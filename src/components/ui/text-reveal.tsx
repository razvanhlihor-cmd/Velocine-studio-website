"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export function TextReveal({ text, className, delay = 0, as: Component = "h1" }: TextRevealProps) {
  const words = text.split(" ");
  // We map the passed Component to a motion component if needed, or just use motion.div and styled text if simple.
  // To keep it type safe and easy with framer-motion, we usually render a motion.div or motion.h1 directly.
  const MotionTag = motion(Component as keyof typeof motion) as any;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      scale: 0.95,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <MotionTag
      className={cn("flex flex-wrap m-0 p-0", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
