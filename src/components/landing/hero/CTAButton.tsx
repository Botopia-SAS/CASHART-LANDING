import { Button } from "@/components/ui/button";

import React from "react";

export function CTAButton({
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  mousePosition,
  isHovering,
  text,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mousePosition: { x: number; y: number };
  isHovering: boolean;
  text: string;
}) {
  return (
    <Button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className="hidden md:flex absolute right-0 h-14 bg-[#0C5F4C] hover:bg-[#0A4F3E] text-white text-[15px] font-medium px-6 rounded-full whitespace-nowrap pointer-events-auto relative overflow-hidden transition-all duration-300 items-center justify-center"
    >
      <span
        className="absolute pointer-events-none rounded-full"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "150px" : "0px",
          height: isHovering ? "150px" : "0px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
          opacity: isHovering ? 1 : 0,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          filter: "blur(20px)",
        }}
      />
      <span className="relative z-10">{text}</span>
    </Button>
  );
}
