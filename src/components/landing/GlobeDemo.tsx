"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const t = useTranslations("comingSoon");

  const globeConfig = {
    pointSize: 4,
    globeColor: "#0C5F4C",
    showAtmosphere: true,
    atmosphereColor: "#10B981",
    atmosphereAltitude: 0.1,
    emissive: "#0C5F4C",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(16, 185, 129, 0.7)",
    ambientLight: "#10B981",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 37.0902, lng: -95.7129 }, // USA center
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#0C5F4C", "#10B981", "#059669"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.006, // New York
      endLat: 51.5072,
      endLng: -0.1276, // London
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 1,
      startLat: 34.0522,
      startLng: -118.2437, // Los Angeles
      endLat: 48.8566,
      endLng: 2.3522, // Paris
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 41.8781,
      startLng: -87.6298, // Chicago
      endLat: 35.6762,
      endLng: 139.6503, // Tokyo
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 29.7604,
      startLng: -95.3698, // Houston
      endLat: -22.9068,
      endLng: -43.1729, // Rio
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: 37.7749,
      startLng: -122.4194, // San Francisco
      endLat: 1.3521,
      endLng: 103.8198, // Singapore
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: 25.7617,
      startLng: -80.1918, // Miami
      endLat: -34.6037,
      endLng: -58.3816, // Buenos Aires
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 4,
      startLat: 47.6062,
      startLng: -122.3321, // Seattle
      endLat: 22.3193,
      endLng: 114.1694, // Hong Kong
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 4,
      startLat: 33.4484,
      startLng: -112.074, // Phoenix
      endLat: 19.4326,
      endLng: -99.1332, // Mexico City
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 5,
      startLat: 42.3601,
      startLng: -71.0589, // Boston
      endLat: 52.52,
      endLng: 13.405, // Berlin
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 5,
      startLat: 39.7392,
      startLng: -104.9903, // Denver
      endLat: -33.8688,
      endLng: 151.2093, // Sydney
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 6,
      startLat: 38.9072,
      startLng: -77.0369, // Washington DC
      endLat: 41.9028,
      endLng: 12.4964, // Rome
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 6,
      startLat: 32.7767,
      startLng: -96.797, // Dallas
      endLat: -15.7975,
      endLng: -47.8919, // Brasilia
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 7,
      startLat: 45.5017,
      startLng: -73.5673, // Montreal
      endLat: 55.7558,
      endLng: 37.6173, // Moscow
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 7,
      startLat: 30.2672,
      startLng: -97.7431, // Austin
      endLat: 28.6139,
      endLng: 77.209, // New Delhi
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 8,
      startLat: 36.1699,
      startLng: -115.1398, // Las Vegas
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 8,
      startLat: 43.6532,
      startLng: -79.3832, // Toronto
      endLat: -23.5505,
      endLng: -46.6333, // São Paulo
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <div id="coming-soon" className="flex flex-row items-center justify-center py-10 md:py-20 min-h-[100vh] md:min-h-[50rem] relative w-full scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full relative overflow-visible h-full min-h-[800px] md:h-[50rem] px-4">
        <div className="absolute w-full h-[500px] md:h-[600px] z-10 top-56 md:top-40">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-20 pt-8 md:pt-12"
        >
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-[#0C5F4C] via-[#10B981] to-[#0C5F4C] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mt-6 mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
