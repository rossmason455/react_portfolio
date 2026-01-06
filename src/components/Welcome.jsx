import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Welcome({ onEnter }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleEnterPortfolio = () => {
    setFadeOut(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 1000); 
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-[url('/images/3306716.jpg')] transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto px-6">
        <div className="flex-shrink-0">
          <img
            src="/images/spotpfp.jpg"
            alt="Profile"
            className="w-100 h-100 rounded-full object-cover shadow-lg border-4 border-white/20"
          />
        </div>


        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Welcome
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Thanks for visiting! Click below to explore my portfolio and see what I've been working on.
          </p>
          <Button
            onClick={handleEnterPortfolio}
            size="lg"
            className="px-8 py-3 text-lg cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white hover:text-black"
          >
            Enter Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}