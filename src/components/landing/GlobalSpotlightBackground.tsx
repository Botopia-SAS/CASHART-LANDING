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
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-100 to-cyan-100 animate-gradient-shift [color-scheme:light]">
            <GridSpotlight mousePos={globalMousePosition} />
            <SmoothGradientOverlay />
        </div>
    );
}
