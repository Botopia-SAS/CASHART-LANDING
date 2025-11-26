"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  className?: string;
  quantity?: number;
  colors?: string[];
}

export function Sparkles({ 
  className = "", 
  quantity = 15,
  colors = ["#0C5F4C", "#10B981", "#14B8A6"]
}: SparklesProps) {
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
  }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const generateSparkles = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const newSparkles = Array.from({ length: quantity }, (_, i) => ({
        id: i + Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2.5,
      }));
      
      setSparkles(newSparkles);
    };

    generateSparkles();

    const handleResize = () => {
      generateSparkles();
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(generateSparkles, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [quantity, colors]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}, 0 0 ${sparkle.size * 4}px ${sparkle.color}`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            x: (Math.random() - 0.5) * 40,
            y: (Math.random() - 0.5) * 40,
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

