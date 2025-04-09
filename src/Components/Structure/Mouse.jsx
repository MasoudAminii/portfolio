"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const MouseBorder = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  // Position tracking
  const currentCirclePos = useRef({ x: 0, y: 0 });
  const currentDotPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  // Hover state
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Size and opacity state (using refs for performance during animation)
  const currentCircleSize = useRef(100);
  const currentDotSize = useRef(10);
  const targetCircleSize = useRef(100);
  const targetDotSize = useRef(10);
  const currentBorderOpacity = useRef(0.8);
  const targetBorderOpacity = useRef(0.8);

  // Easing factors for smoother transitions
  const easingFactors = {
    circlePos: 0.12,
    dotPos: 0.22,
    size: 0.09,
    opacity: 0.09,
  };

  // Update mouse position and hover state
  const handleMouseMove = useCallback((e) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
    const isInteractive = e.target.closest(
      "a, button, [role='button'], input, select, textarea"
    );
    setIsHoveringLink(!!isInteractive);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    // Optionally hide the default cursor
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [handleMouseMove]);

  // Update target sizes and opacity based on hover state
  useEffect(() => {
    if (isHoveringLink) {
      targetCircleSize.current = 20; // Smaller circle for hover
      targetDotSize.current = 18; // Larger dot for emphasis
      targetBorderOpacity.current = 1; // Full opacity when hovering
    } else {
      targetCircleSize.current = 100;
      targetDotSize.current = 10;
      targetBorderOpacity.current = 0.8;
    }
  }, [isHoveringLink]);

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      const darkModeEnabled = document.documentElement.classList.contains("dark");

      // Smoothly interpolate positions
      currentCirclePos.current.x +=
        (targetPos.current.x - currentCirclePos.current.x) * easingFactors.circlePos;
      currentCirclePos.current.y +=
        (targetPos.current.y - currentCirclePos.current.y) * easingFactors.circlePos;
      currentDotPos.current.x +=
        (targetPos.current.x - currentDotPos.current.x) * easingFactors.dotPos;
      currentDotPos.current.y +=
        (targetPos.current.y - currentDotPos.current.y) * easingFactors.dotPos;

      // Interpolate sizes and opacity
      currentCircleSize.current +=
        (targetCircleSize.current - currentCircleSize.current) * easingFactors.size;
      currentDotSize.current +=
        (targetDotSize.current - currentDotSize.current) * easingFactors.size;
      currentBorderOpacity.current +=
        (targetBorderOpacity.current - currentBorderOpacity.current) * easingFactors.opacity;

      const currentHalfCircle = Math.max(currentCircleSize.current / 2, 0.1);
      const currentHalfDot = currentDotSize.current / 2;

      // Update circle styles
      if (circleRef.current) {
        circleRef.current.style.width = `${Math.max(currentCircleSize.current, 0)}px`;
        circleRef.current.style.height = `${Math.max(currentCircleSize.current, 0)}px`;
        circleRef.current.style.transform = `translate(${currentCirclePos.current.x - currentHalfCircle}px, ${currentCirclePos.current.y - currentHalfCircle}px)`;
        circleRef.current.style.opacity = currentBorderOpacity.current;
        const borderWidth = Math.max(1.5 * (currentCircleSize.current / 100), 0.5);
        circleRef.current.style.borderWidth = `${borderWidth}px`;
        circleRef.current.style.filter = "blur(0.5px)";

        if (isHoveringLink) {
          if (darkModeEnabled) {
            // In dark mode hover, use bright white for high contrast
            circleRef.current.style.borderColor = "#ffffff";
            circleRef.current.style.boxShadow = "0 0 12px 2px rgba(255, 255, 255, 0.5)";
          } else {
            circleRef.current.style.borderColor = "white";
            circleRef.current.style.boxShadow = "0 0 12px 2px rgba(255, 255, 255, 0.3)";
          }
        } else {
          // Non-hover state: less pronounced border
          circleRef.current.style.borderColor = darkModeEnabled ? "#f1f3f4" : "#18181b";
          circleRef.current.style.boxShadow = "none";
        }
      }

      // Update dot styles
      if (dotRef.current) {
        dotRef.current.style.width = `${currentDotSize.current}px`;
        dotRef.current.style.height = `${currentDotSize.current}px`;
        dotRef.current.style.transform = `translate(${currentDotPos.current.x - currentHalfDot}px, ${currentDotPos.current.y - currentHalfDot}px)`;
        if (isHoveringLink) {
          if (darkModeEnabled) {
            // In dark mode hover: make dot bright and clear
            dotRef.current.style.backgroundColor = "#ffffff";
            dotRef.current.style.opacity = 0.8;
            dotRef.current.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
          } else {
            // Light mode hover settings
            dotRef.current.style.backgroundColor = "#ffffff";
            dotRef.current.style.opacity = 0.4;
            dotRef.current.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.5)";
          }
        } else {
          // Normal state: set dot colors based on theme
          dotRef.current.style.backgroundColor = darkModeEnabled ? "#f1f3f4" : "#18181b";
          dotRef.current.style.boxShadow = "none";
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [easingFactors, isHoveringLink]);

  return (
    <>
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          border: "1px solid rgba(100, 100, 255, 0.2)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height, opacity, border-width",
          mixBlendMode: "exclusion",
          backdropFilter: "blur(2px)",
          transition: "all 0.1s linear",
          boxShadow: "0 0 12px 2px rgba(255, 255, 255, 0.3)",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.6,
          zIndex: 9999,
          willChange: "transform, width, height, background-color, box-shadow",
          transition: "all 0.1s linear",
        }}
      />
    </>
  );
};

export default MouseBorder;
