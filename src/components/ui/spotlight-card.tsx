"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  borderHoverColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(249, 115, 22, 0.15)", // Default Velocine Orange glow
  borderHoverColor = "rgba(255, 255, 255, 0.2)",
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative rounded-3xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm overflow-hidden transition-colors duration-500",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl border opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          borderColor: borderHoverColor,
          maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`,
        }}
      />
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
}
