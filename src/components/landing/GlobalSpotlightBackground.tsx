"use client";

import { useState, useEffect } from "react";
import { GridSpotlight } from "./hero/GridSpotlight";
import { SmoothGradientOverlay } from "./hero/SmoothGradientOverlay";
import Iridescence from "./Iridescence";

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
            {/* Iridescence WebGL Background */}
            <div className="absolute inset-0 opacity-30">
                <Iridescence
                    color={[0.8, 1, 0.95]}
                    mouseReact={false}
                    amplitude={0.1}
                    speed={0.8}
                />
            </div>

            <GridSpotlight mousePos={globalMousePosition} />
            <SmoothGradientOverlay />
        </div>
    );
}
