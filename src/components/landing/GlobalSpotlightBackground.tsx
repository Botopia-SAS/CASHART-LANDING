"use client";

import { useState, useEffect } from "react";
import { GridSpotlight } from "./hero/GridSpotlight";
import { SmoothGradientOverlay } from "./hero/SmoothGradientOverlay";

export function GlobalSpotlightBackground() {
    const [globalMousePosition, setGlobalMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) =>
            setGlobalMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base gradient background with highly saturated colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-teal-300 to-cyan-300" />

            {/* Super strong radial gradient overlays for maximum drama */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    background: 'radial-gradient(ellipse 100% 70% at top left, rgba(16, 185, 129, 0.7) 0%, transparent 70%)',
                }}
            />
            <div
                className="absolute inset-0 opacity-70"
                style={{
                    background: 'radial-gradient(ellipse 90% 80% at bottom right, rgba(6, 182, 212, 0.8) 0%, transparent 75%)',
                }}
            />
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: 'radial-gradient(circle 80% at center, rgba(20, 184, 166, 0.6) 0%, transparent 60%)',
                }}
            />

            {/* Additional strong accent gradients */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at top right, rgba(5, 150, 105, 0.5) 0%, transparent 50%)',
                }}
            />

            <GridSpotlight mousePos={globalMousePosition} />
            <SmoothGradientOverlay />
        </div>
    );
}
