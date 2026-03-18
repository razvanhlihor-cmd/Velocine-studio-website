"use client";

import React, { useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  springOptions?: { stiffness: number; damping: number; mass: number };
  intensity?: number;
}

export function Magnetic({ 
  children, 
  springOptions = { stiffness: 150, damping: 15, mass: 0.1 },
  intensity = 0.2
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * intensity);
    y.set(distanceY * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block relative z-50 cursor-pointer"
    >
      {React.cloneElement(children as React.ReactElement<any>, {
        style: { ...(children as React.ReactElement<any>).props.style, pointerEvents: "none" }
      })}
    </motion.div>
  );
}
