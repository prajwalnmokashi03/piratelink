import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  activePulse: number;
  pulseTimer: number;
}

interface Signal {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  speed: number;
  color: string;
}

export default function InteractiveMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive node count
    const isMobile = width < 768;
    const nodeCount = isMobile ? 35 : 80;
    const connectionDistance = isMobile ? 90 : 130;

    // Helper to request a visual signal relay
    const triggerSignal = (fromNode: Node, toNode: Node) => {
      signals.push({
        fromX: fromNode.x,
        fromY: fromNode.y,
        toX: toNode.x,
        toY: toNode.y,
        progress: 0,
        speed: 0.02 + Math.random() * 0.015,
        color: Math.random() > 0.4 ? "#06B6D4" : "#3B82F6",
      });
    };

    // Initialize nodes
    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1.5,
          activePulse: 0,
          pulseTimer: Math.random() * 200,
        });
      }
    };

    initNodes();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Click to add custom active node
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Create interactive node
      const newNode: Node = {
        x: clickX,
        y: clickY,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 4,
        activePulse: 30, // Large starting pulse
        pulseTimer: 0,
      };

      nodes.push(newNode);
      if (nodes.length > nodeCount + 15) {
        nodes.shift(); // keep node pool capped
      }

      // Find nearby nodes to send signals to
      nodes.forEach((node) => {
        if (node === newNode) return;
        const dx = node.x - newNode.x;
        const dy = node.y - newNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance * 1.5) {
          triggerSignal(newNode, node);
        }
      });
    };

    canvas.addEventListener("click", handleCanvasClick);

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep tech background fill
      ctx.fillStyle = "#0B1020";
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient mesh background grid lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)";
      ctx.lineWidth = 1;
      const gridSpacing = 80;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();

            // Randomly relay a background micro-signal along lines
            if (Math.random() < 0.0001) {
              triggerSignal(nodeA, nodeB);
            }
          }
        }
      }

      // Update and draw live signals propagating the network
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          // Trigger sub-signal or pulse at destination
          const destNode = nodes.find(
            (n) => Math.hypot(n.x - sig.toX, n.y - sig.toY) < 5
          );
          if (destNode && Math.random() < 0.2) {
            destNode.activePulse = 15;
          }
          signals.splice(i, 1);
          continue;
        }

        // Draw signal particle
        const curX = sig.fromX + (sig.toX - sig.fromX) * sig.progress;
        const curY = sig.fromY + (sig.toY - sig.fromY) * sig.progress;

        // Path tail
        ctx.beginPath();
        ctx.strokeStyle = sig.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.5;
        ctx.moveTo(
          sig.fromX + (sig.toX - sig.fromX) * Math.max(0, sig.progress - 0.15),
          sig.fromY + (sig.toY - sig.fromY) * Math.max(0, sig.progress - 0.15)
        );
        ctx.lineTo(curX, curY);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Signal head glow
        const gradient = ctx.createRadialGradient(curX, curY, 0, curX, curY, 8);
        gradient.addColorStop(0, sig.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(curX, curY, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce details
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Pulsing behavior
        node.pulseTimer += 0.015;
        const pulseRatio = Math.sin(node.pulseTimer);

        // Draw active relay outer glow
        if (node.activePulse > 0) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${node.activePulse / 30})`;
          ctx.lineWidth = 1;
          ctx.arc(node.x, node.y, node.radius * (1 + node.activePulse * 0.3), 0, Math.PI * 2);
          ctx.stroke();
          node.activePulse -= 0.3; // decay pulse
        }

        // Base glow effect around node
        const glowRad = node.radius + (pulseRatio + 1) * 3;
        const grad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRad
        );
        grad.addColorStop(0, "rgba(6, 182, 212, 0.4)");
        grad.addColorStop(0.5, "rgba(59, 130, 246, 0.15)");
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Solid node core
        ctx.fillStyle = node.activePulse > 5 ? "#06B6D4" : "#3B82F6";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("click", handleCanvasClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-mesh-canvas"
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
}
