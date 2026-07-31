import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-background relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-2">
          Designed & Developed by <span className="font-bold text-white">Pooja Kathirvel</span> 
          <Heart size={16} className="text-primary fill-primary" />
        </p>
        <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};
