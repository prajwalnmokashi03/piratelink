import React from "react";

interface SnailProps {
  className?: string;
  size?: number;
}

// 1. Sleek Headphone Snail (from Screenshot 1 - Setup screen)
export const HeadphoneSnail: React.FC<SnailProps> = ({ className = "", size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_4px_10px_rgba(6,182,212,0.15)]`}
    >
      {/* Soft shadow underneath the snail */}
      <ellipse cx="60" cy="102" rx="42" ry="7" fill="black" fillOpacity="0.25" />

      {/* Snail Body */}
      <path
        d="M25 98C18 97 12 95 15 89C19 82 23 85 28 88C35 92 42 94 49 94C57 94 64 92 70 87C74 84 81 83 85 86C89 89 92 94 95 95C100 97 104 98 102 101C100 104 93 103 86 102C78 101 68 103 60 103C52 103 40 101 25 98Z"
        fill="#93C5FD"
      />
      
      {/* Snail Head & Neck */}
      <path
        d="M78 86C81 86 84 80 84 72C84 62 82 50 85 45C88 40 93 42 94 48C95 54 94 65 92 73C90 81 88 88 81 92"
        stroke="#93C5FD"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Antennas */}
      <line x1="84" y1="46" x2="80" y2="30" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
      <line x1="88" y1="46" x2="94" y2="30" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
      
      {/* Antenna tips */}
      <circle cx="80" cy="29" r="3.5" fill="#22D3EE" />
      <circle cx="94" cy="29" r="3.5" fill="#22D3EE" />

      {/* Blue / Cyan Headphones */}
      <circle cx="77" cy="46" r="6" fill="#0891B2" />
      <circle cx="92" cy="48" r="6" fill="#0891B2" />
      <path d="M77 46C76 40 79 38 84 38C89 38 91 42 92 48" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Snail Shell */}
      <circle cx="50" cy="74" r="26" fill="#06B6D4" />
      
      {/* Shell Spiral Lines */}
      <path
        d="M50 48C64.3594 48 76 59.6406 76 74C76 88.3594 64.3594 100 50 100C35.6406 100 24 88.3594 24 74C24 59.6406 35.6406 48 50 48ZM50 56C40.0589 56 32 64.0589 32 74C32 83.9411 40.0589 92 50 92C59.9411 92 68 83.9411 68 74C68 66.5 61 62 50 62"
        stroke="#E0F2FE"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Shell Inner Accent */}
      <circle cx="50" cy="74" r="4" fill="#E0F2FE" />

      {/* Eyes & Smiling Face */}
      <circle cx="83.5" cy="41" r="1.8" fill="#0F172A" />
      <circle cx="89.5" cy="42" r="1.8" fill="#0F172A" />
      
      {/* Blushing cheeks */}
      <circle cx="81" cy="44" r="2.5" fill="#F43F5E" fillOpacity="0.6" />
      <circle cx="91.5" cy="45" r="2.5" fill="#F43F5E" fillOpacity="0.6" />
      
      {/* Big happy smile */}
      <path d="M84 45.5C84.5 47.5 86.5 47.5 87 45.5" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

// 2. Prajwal Snail (Devil Horns & Angry Expression - Screenshot 2)
export const PrajwalSnail: React.FC<SnailProps> = ({ className = "", size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_4px_10px_rgba(239,68,68,0.2)]`}
    >
      <ellipse cx="60" cy="102" rx="42" ry="7" fill="black" fillOpacity="0.3" />

      {/* Body */}
      <path
        d="M25 98C18 97 12 95 15 89C19 82 23 85 28 88C35 92 42 94 49 94C57 94 64 92 70 87C74 84 81 83 85 86C89 89 92 94 95 95C100 97 104 98 102 101C100 104 93 103 86 102C78 101 68 103 60 103C52 103 40 101 25 98Z"
        fill="#9CA3AF"
      />
      
      {/* Snail Head & Neck */}
      <path
        d="M78 86C81 86 84 80 84 72C84 62 82 50 85 45C88 40 93 42 94 48C95 54 94 65 92 73C90 81 88 88 81 92"
        stroke="#9CA3AF"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Angry eyebrows/horns */}
      {/* Little Devil Horns */}
      <path d="M81 33L85 24L87 31" fill="#EF4444" stroke="#7F1D1D" strokeWidth="1" strokeLinejoin="miter" />
      <path d="M91 33L95 24L97 31" fill="#EF4444" stroke="#7F1D1D" strokeWidth="1" strokeLinejoin="miter" />

      {/* Red Shell */}
      <circle cx="50" cy="74" r="26" fill="#B91C1C" />
      
      {/* Red Shell Spiral Details */}
      <path
        d="M50 48C64.3594 48 76 59.6406 76 74C76 88.3594 64.3594 100 50 100C35.6406 100 24 88.3594 24 74C24 59.6406 35.6406 48 50 48ZM50 56C40.0589 56 32 64.0589 32 74C32 83.9411 40.0589 92 50 92C59.9411 92 68 83.9411 68 74"
        stroke="#170303"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Angry Eyes */}
      <path d="M81 39.5L85 41" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="83" cy="43.5" r="1.5" fill="#000" />
      
      <path d="M91 40L87 41.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="89" cy="44" r="1.5" fill="#000" />

      {/* Closed Grumpy/Angry Mouth */}
      <path d="M83 49C84.5 48 86 48 87.5 49" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

// 3. Elish Snail (Happy Smile & Purple Shell - Screenshot 4/6)
export const ElishSnail: React.FC<SnailProps> = ({ className = "", size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_4px_10px_rgba(168,85,247,0.18)]`}
    >
      <ellipse cx="60" cy="102" rx="42" ry="7" fill="black" fillOpacity="0.2" />

      {/* Body */}
      <path
        d="M25 98C18 97 12 95 15 89C19 82 23 85 28 88C35 92 42 94 49 94C57 94 64 92 70 87C74 84 81 83 85 86C89 89 92 94 95 95C100 97 104 98 102 101C100 104 93 103 86 102C78 101 68 103 60 103C52 103 40 101 25 98Z"
        fill="#DDD6FE"
      />
      
      {/* Snail Head & Neck */}
      <path
        d="M78 86C81 86 84 80 84 72C84 62 82 50 85 45C88 40 93 42 94 48C95 54 94 65 92 73C90 81 88 88 81 92"
        stroke="#DDD6FE"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Antennas */}
      <line x1="84" y1="46" x2="80" y2="30" stroke="#DDD6FE" strokeWidth="3" strokeLinecap="round" />
      <line x1="88" y1="46" x2="94" y2="30" stroke="#DDD6FE" strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="29" r="3.5" fill="#D8B4FE" />
      <circle cx="94" cy="29" r="3.5" fill="#D8B4FE" />

      {/* Purple Shell */}
      <circle cx="50" cy="74" r="26" fill="#7C3AED" />
      
      {/* Purple Shell Spiral Details */}
      <path
        d="M50 48C64.3594 48 76 59.6406 76 74C76 88.3594 64.3594 100 50 100C35.6406 100 24 88.3594 24 74C24 59.6406 35.6406 48 50 48ZM50 56C40.0589 56 32 64.0589 32 74C32 83.9411 40.0589 92 50 92C59.9411 92 68 83.9411 68 74"
        stroke="#F5F3FF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <circle cx="50" cy="74" r="4" fill="#F5F3FF" />

      {/* Big Cheerful Eyes */}
      <circle cx="82.5" cy="41" r="2.5" fill="#1E1B4B" />
      <circle cx="82.5" cy="41" r="0.8" fill="#FFF" />
      <circle cx="89.5" cy="42" r="2.5" fill="#1E1B4B" />
      <circle cx="89.5" cy="42" r="0.8" fill="#FFF" />
      
      {/* Smiling cheeks */}
      <circle cx="80" cy="44" r="2" fill="#F472B6" fillOpacity="0.7" />
      <circle cx="92.5" cy="45" r="2" fill="#F472B6" fillOpacity="0.7" />
      
      {/* Smile */}
      <path d="M84 45.5C85 47.5 87 47.5 88 45.5" stroke="#1E1B4B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
