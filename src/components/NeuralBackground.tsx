import React from 'react';

export const NeuralBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f3f4f6]">
      {/* Subtle, soft natural ash gradients for depth while keeping the theme plain and clean */}
      <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-slate-300/30 blur-3xl pointer-events-none" />
    </div>
  );
};
