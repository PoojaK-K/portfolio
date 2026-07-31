import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      
      {/* Animated glowing blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-secondary/15 blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};
