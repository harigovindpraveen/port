
import React from 'react';

const FloatingShapes = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <div
      className="absolute top-[10%] left-[5%] w-10 h-10 bg-[--accent] opacity-30 rounded-full"
      style={{ animation: 'float-1 15s ease-in-out infinite' }}
    />
    <div
      className="absolute top-[50%] right-[10%] w-16 h-16 border-2 border-[--border-color] opacity-30"
      style={{ animation: 'float-2 20s ease-in-out infinite' }}
    />
    <div
      className="absolute bottom-[5%] left-[20%] w-8 h-8 bg-[--accent] opacity-20"
      style={{ animation: 'float-1 18s ease-in-out infinite reverse' }}
    />
     <div
      className="absolute bottom-[15%] right-[25%] w-6 h-6 border-2 border-[--border-color] opacity-30"
      style={{ animation: 'float-2 25s ease-in-out infinite reverse' }}
    />
    {/* New Shapes */}
    <div
      className="absolute top-[25%] right-[20%] w-5 h-5 bg-[--accent] opacity-20"
      style={{ animation: 'float-3 12s ease-in-out infinite' }}
    />
     <div
      className="absolute bottom-[40%] left-[15%] w-12 h-12 border-2 border-[--border-color] opacity-20 rounded-full"
      style={{ animation: 'float-3 22s ease-in-out infinite reverse' }}
    />
  </div>
);

export default FloatingShapes;