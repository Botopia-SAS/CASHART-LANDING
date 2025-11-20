"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: quantity }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        id: i,
      }));
      setParticles(newParticles);
    };

    generateParticles();

    if (refresh) {
      const interval = setInterval(generateParticles, 5000);
      return () => clearInterval(interval);
    }
  }, [quantity, refresh]);

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-purple-500/30"
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * staticity,
            y: particle.y + (Math.random() - 0.5) * staticity,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: ease,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
