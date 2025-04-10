"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react"; // Import React

export function HeroProjectAnimation() {
  const totalDuration = 1.2;
  const pageTransitionDelay = 0.3; // 300ms delay for page transition

  return (
    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
      {/* Left Card Stack */}
      <motion.div
        className="absolute top-1/4 left-0 hidden opacity-80 lg:block"
        initial={{ opacity: 0, x: -150, y: 50, scale: 0.5, rotate: -30 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 12,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: pageTransitionDelay, // Add page transition delay
        }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        {/* Primary card */}
        <motion.div
          className="h-48 w-64 rounded-lg bg-white shadow-2xl"
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: totalDuration * 0.33,
            delay: pageTransitionDelay + totalDuration * 0.17, // Add to existing delay
          }}
        />
        {/* Secondary card */}
        <motion.div
          className="absolute -top-16 -left-10 h-48 w-64 rounded-lg bg-white shadow-2xl"
          initial={{ x: -30, y: 40, rotate: -30, opacity: 0 }}
          whileInView={{ x: 0, y: 0, rotate: -6, opacity: 1 }}
          transition={{
            type: "spring",
            delay: pageTransitionDelay + totalDuration * 0.33,
            stiffness: 100,
            damping: 15,
          }}
        />
      </motion.div>

      {/* Right Card Stack */}
      <motion.div
        className="absolute right-0 bottom-1/4 hidden opacity-80 lg:block"
        initial={{ opacity: 0, x: 150, y: 50, scale: 0.5, rotate: 30 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: -12,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: pageTransitionDelay + totalDuration * 0.17, // Add to existing delay
        }}
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        {/* Primary card */}
        <motion.div
          className="h-48 w-64 rounded-lg bg-white shadow-2xl"
          initial={{ scale: 0.8, filter: "blur(4px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          transition={{
            duration: totalDuration * 0.33,
            delay: pageTransitionDelay + totalDuration * 0.33,
          }}
        />
        {/* Secondary card */}
        <motion.div
          className="absolute -top-16 -right-10 h-48 w-64 rounded-lg bg-white shadow-2xl"
          initial={{ x: 30, y: 40, rotate: 30, opacity: 0 }}
          whileInView={{ x: 0, y: 0, rotate: 6, opacity: 1 }}
          transition={{
            type: "spring",
            delay: pageTransitionDelay + totalDuration * 0.5,
            stiffness: 100,
            damping: 15,
          }}
        />
      </motion.div>
    </div>
  );
}

export function AnimateText({ children, delay = 0.25, type = "default" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const pageTransitionDelay = 0.3; // 300ms delay for page transition

  // Enhanced animation variants for a smoother and more typographic transition
  const textVariants = {
    hidden: {
      opacity: 0,
      // Adjust Y based on element type for a graceful entrance.
      y: type === "heading" ? 60 : 40,
      // Introduce slight letter spacing contraction for a “tight to loose” feel.
      letterSpacing: "-0.05em",
      // Add a soft blur and a subtle text shadow to emphasize depth.
      filter: "blur(4px)",
      textShadow: "0px 0px 2px rgba(0,0,0,0.2)",
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "normal",
      filter: "blur(0px)",
      textShadow: "0px 0px 0px rgba(0,0,0,0)",
      transition: {
        // A spring with lowered stiffness and higher damping for a smooth, flowing animation.
        type: "spring",
        stiffness: 90,
        damping: 20,
        mass: 0.6,
      },
    },
  };

  const slideVariants = {
    hidden: { x: "-100%", opacity: 1 },
    visible: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 30,
        mass: 0.8,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={mainControls}
        transition={{
          delay: pageTransitionDelay + delay, // Add page transition delay
          duration: 0.7,
        }}
      >
        {children}
      </motion.div>

      {/* Refined overlay for added visual dynamism with enhanced gradient detail */}
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        className="absolute top-0 bottom-0 left-0 z-30 w-full"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            var(--primary-color) 30%,
            var(--accent-color) 70%,
            transparent 100%
          )`,
        }}
      >
        <div className="h-full w-full backdrop-blur-[2px]"></div>
      </motion.div>
    </div>
  );
}
