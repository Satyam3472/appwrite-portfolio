"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface HeroGalleryProps {
    images: string[];
    interval?: number;
    className?: string;
}

export function HeroGallery({
    images,
    interval = 4000,
    className,
}: HeroGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotation
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval, isPaused]);

    // Helper to get circular distance
    const getDistance = (index: number) => {
        const total = images.length;
        let distance = (index - activeIndex + total) % total;
        if (distance > total / 2) distance -= total;
        return distance;
    };

    return (
        <div
            className={cn(
                "relative w-full max-w-[600px] h-[300px] md:h-[500px] flex items-center justify-center perspective-[1200px]",
                className
            )}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* We map ALL images to ensure stable DOM elements for smooth transform */}
            {images.map((img, index) => {
                const distance = getDistance(index);
                const isActive = distance === 0;

                // Visual properties based on distance
                // We only show items close to the center to avoid clutter
                // but we keep them in DOM for transition
                const isVisible = Math.abs(distance) <= 2;

                // Tighter spread to prevent text overlap
                // Responsive spread: smaller on mobile
                const xOffset = distance * (typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 85);
                const scale = isActive ? 1 : Math.max(0.85, 1 - Math.abs(distance) * 0.15);
                const rotateY = isActive ? 0 : distance * -20; // More rotation to tuck it in
                const zIndex = 100 - Math.abs(distance) * 10;
                const opacity = isActive ? 1 : Math.max(0.2, 0.8 - Math.abs(distance) * 0.3);
                const blur = isActive ? 0 : Math.abs(distance) * 2;

                if (!isVisible) return null;

                return (
                    <motion.div
                        key={index} // Use index as key if images are unique enough or `img` if strictly unique
                        className={cn(
                            "absolute top-1/2 left-1/2", // Center origin
                            "rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-black",
                            isActive ? "w-[180px] sm:w-[320px] aspect-[3/4] z-50 ring-2 ring-white/20" : "w-[180px] sm:w-[320px] aspect-[3/4]"
                        )}
                        initial={false}
                        animate={{
                            x: `calc(-50% + ${xOffset}px)`, // Adjust for centering
                            y: "-50%",
                            scale: scale,
                            rotateY: rotateY,
                            zIndex: zIndex,
                            opacity: opacity,
                            filter: `blur(${blur}px)`,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                            mass: 1,
                        }}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover pointer-events-none"
                        />

                        {/* Dark overlay for depth */}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            animate={{ opacity: isActive ? 0 : 0.4 }}
                        />

                        {/* Reflection/Shine effect */}
                        {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
