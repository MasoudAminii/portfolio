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
    // Check if the hovered element is interactive
    const isInteractive = e.target.closest(
      "a, button, [role='button'], input, select, textarea",
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
      // Smoothly interpolate positions
      currentCirclePos.current.x +=
        (targetPos.current.x - currentCirclePos.current.x) *
        easingFactors.circlePos;
      currentCirclePos.current.y +=
        (targetPos.current.y - currentCirclePos.current.y) *
        easingFactors.circlePos;
      currentDotPos.current.x +=
        (targetPos.current.x - currentDotPos.current.x) * easingFactors.dotPos;
      currentDotPos.current.y +=
        (targetPos.current.y - currentDotPos.current.y) * easingFactors.dotPos;

      // Interpolate sizes and opacity
      currentCircleSize.current +=
        (targetCircleSize.current - currentCircleSize.current) *
        easingFactors.size;
      currentDotSize.current +=
        (targetDotSize.current - currentDotSize.current) * easingFactors.size;
      currentBorderOpacity.current +=
        (targetBorderOpacity.current - currentBorderOpacity.current) *
        easingFactors.opacity;

      const currentHalfCircle = Math.max(currentCircleSize.current / 2, 0.1);
      const currentHalfDot = currentDotSize.current / 2;

      // Update circle styles
      if (circleRef.current) {
        circleRef.current.style.width = `${Math.max(currentCircleSize.current, 0)}px`;
        circleRef.current.style.height = `${Math.max(currentCircleSize.current, 0)}px`;
        circleRef.current.style.transform = `translate(${currentCirclePos.current.x - currentHalfCircle}px, ${currentCirclePos.current.y - currentHalfCircle}px)`;
        circleRef.current.style.opacity = currentBorderOpacity.current;
        const borderWidth = Math.max(
          1.5 * (currentCircleSize.current / 100),
          0.5,
        );
        circleRef.current.style.borderWidth = `${borderWidth}px`;
        circleRef.current.style.filter = "blur(0.5px)";

        // Accent styling adjustments based on hover
        if (isHoveringLink) {
          circleRef.current.style.borderColor = "var(--accent-color)";
          circleRef.current.style.boxShadow =
            "0 0 12px 2px var(--accent-color)";
          circleRef.current.style.backdropFilter = "blur(0)";
        } else {
          circleRef.current.style.borderColor = "var(--accent-color)";
          circleRef.current.style.boxShadow = "0 0 8px 1px rgba(0, 0, 0, 0.1)";
          circleRef.current.style.backdropFilter = "blur(10px)";
        }
      }

      // Update dot styles
      if (dotRef.current) {
        dotRef.current.style.width = `${currentDotSize.current}px`;
        dotRef.current.style.height = `${currentDotSize.current}px`;
        dotRef.current.style.transform = `translate(${currentDotPos.current.x - currentHalfDot}px, ${currentDotPos.current.y - currentHalfDot}px)`;
        if (isHoveringLink) {
          dotRef.current.style.backgroundColor = "var(--accent-color)";
        } else {
          dotRef.current.style.backgroundColor = "var(--accent-color)";
          dotRef.current.style.opacity = 0.8;
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
          border: "1px solid var(--accent-color)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height, opacity, border-width",
          backdropFilter: "blur(10px)",
          transition:
            "transform 0.1s linear, width 0.1s linear, height 0.1s linear, background-color 0.1s linear, box-shadow 0.1s linear",
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
          backgroundColor: "var(--accent-color)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform, width, height, background-color, box-shadow",
          transition:
            "transform 0.1s linear, width 0.1s linear, height 0.1s linear, opacity 0.1s linear, border-width 0.1s linear",
          filter: "brightness(1.2)",
        }}
      />
    </>
  );
};

export default MouseBorder;
