import React, { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".clickable") ||
        target.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth Lerp loop for the outer ring
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "#38bdf8",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: "-3px",
          marginTop: "-3px",
          transition: "transform 0.02s linear, width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
          boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
        }}
      />

      {/* Smooth Trailing Follower Ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "46px" : isClicking ? "24px" : "32px",
          height: isHovered ? "46px" : isClicking ? "24px" : "32px",
          border: isHovered ? "1.5px solid rgba(56, 189, 248, 0.75)" : "1px solid rgba(255, 255, 255, 0.25)",
          backgroundColor: isHovered ? "rgba(56, 189, 248, 0.08)" : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: isHovered ? "-23px" : isClicking ? "-12px" : "-16px",
          marginTop: isHovered ? "-23px" : isClicking ? "-12px" : "-16px",
          transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background-color 0.25s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
