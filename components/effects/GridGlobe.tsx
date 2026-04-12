"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import World with SSR disabled
const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const GridGlobe = () => {
  // Add a mounted state to prevent Three.js from initializing too early
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full" />;
  }

  // Three.js/WebGL Scene Configuration
  // Note: These are Three.js-specific color values for 3D rendering
  // They cannot use CSS variables as they're passed to the WebGL context
  // Design tokens for 3D: Primary=#062056, Accent=#38bdf8, Lights=#ffffff
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  // Static arcs data (Optimization: Move outside or memoize to prevent re-renders)
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[2],
    },
    // ... rest of your arcs
  ];

  if (!isMounted) return <div className="w-full h-full bg-transparent" />;

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full min-h-[300px]">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        {/* Ambient Gradient Overlay to prevent sharp edges */}
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-background z-40" />

        <div className="absolute w-full h-72 md:h-full z-10">
          {/* Ensure data is passed only when we are sure the environment is ready */}
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GridGlobe;
