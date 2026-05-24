/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import InteractiveMeshBackground from "./components/InteractiveMeshBackground";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Screenshots from "./components/Screenshots";
import Security from "./components/Security";
import Downloads from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-white overflow-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Background canvas simulation (interactive node triggers) */}
      <InteractiveMeshBackground />

      {/* Main Content Containers */}
      <div className="relative z-10">
        
        {/* Navigation bar */}
        <Navbar />

        {/* Hero Area */}
        <Hero />

        {/* Core Features */}
        <Features />

        {/* Action How It Works */}
        <HowItWorks />

        {/* Interactive App Mockup Simulation */}
        <Screenshots />

        {/* Dynamic Security Info Detail */}
        <Security />

        {/* Downloads Spec board */}
        <Downloads />

        {/* Accordions FAQ base */}
        <Faq />

        {/* Symmetrical Footers */}
        <Footer />

      </div>
    </div>
  );
}
