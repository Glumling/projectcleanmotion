"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
  
  // Animation state
  const [animationStopped, setAnimationStopped] = useState(false);
  
  useEffect(() => {
    // Clone items for infinite scroll
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Create multiple duplicates to ensure smooth infinite scrolling
      for (let i = 0; i < 5; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }
      
      // Apply CSS variables for animation control
      if (containerRef.current) {
        // Set direction
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse"
        );
        
        // Set speed
        let durationValue = "40s";
        if (speed === "fast") durationValue = "20s";
        else if (speed === "slow") durationValue = "80s";
        
        containerRef.current.style.setProperty("--animation-duration", durationValue);
      }
      
      // Start animation
      setStart(true);
    }
  }, [direction, speed]);
  
  // Handle mouse events for pause/resume
  const handleMouseEnter = () => {
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.setProperty("--animation-play-state", "paused");
      setAnimationStopped(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.setProperty("--animation-play-state", "running");
      setAnimationStopped(false);
    }
  };
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 0.5%, white 99.5%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 0.5%, white 99.5%, transparent)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
        style={{
          animationPlayState: animationStopped ? "paused" : "running"
        }}
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
      </ul>
    </div>
  );
};