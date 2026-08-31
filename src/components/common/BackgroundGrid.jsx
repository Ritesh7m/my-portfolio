import React, { useEffect, useState } from "react";

const BackgroundGrid = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Precision Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, #000 30%, transparent 85%)",
        }}
      />

      {/* Dynamic Cursor Spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
          transition: "background 0.05s ease",
        }}
      />

      {/* Ambient Top Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "20%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
