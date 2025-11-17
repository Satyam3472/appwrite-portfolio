"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export function ProfileImage({
  imageUrl,
  firstName,
  lastName,
}: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative aspect-square rounded-2xl overflow-hidden border-4 border-blue-500/20 dark:border-blue-400/20 block group cursor-pointer w-full shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      {/* Online Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-medium text-white">Online</span>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-600/80 dark:from-blue-700/80 dark:to-indigo-700/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center space-y-3">
          <div className="text-white text-xl font-semibold">
            {firstName} {lastName}
          </div>
          <div className="text-white/90 text-sm">
            Senior Solutions Developer
          </div>
        </div>
      </div>
    </div>
  );
}

