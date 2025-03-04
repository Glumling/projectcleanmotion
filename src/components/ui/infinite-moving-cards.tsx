"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "motion/react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
   const controls = useAnimationControls();
  // Track animation state
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    addAnimation();
    startAnimation();
    
    return () => {
      // Clean up animation frame on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }
      setStart(true);
    }
  }

  function startAnimation() {
    const duration = speed === "fast" ? 20 : speed === "normal" ? 40 : 80;
    startTimeRef.current = Date.now();
    
    controls.start({
      x: direction === "left" ? [0, -2000] : [-2000, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }
    });
  }

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && isPaused) {
      setIsPaused(false);
      
      // Simply restart the animation - this is the most reliable approach
      // with the current version of framer-motion
      startAnimation();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 0.5%, white 99.5%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 0.5%, white 99.5%, transparent)",
      }}
    >
      <motion.ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, idx) => (
          <li 
            key={idx} 
            className="flex items-center justify-center w-[180px] relative flex-shrink-0"
          >
            <Image
              src={item.logo}
              alt={item.alt}
              width={150}
              height={60}
              className="object-contain w-full h-16"
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};