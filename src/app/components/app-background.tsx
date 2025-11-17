"use client";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <BackgroundBeamsWithCollision className="w-full h-full">
          <div />
        </BackgroundBeamsWithCollision>
      </div>
      <div className="relative z-10">{children}</div>
    </>
  );
}

