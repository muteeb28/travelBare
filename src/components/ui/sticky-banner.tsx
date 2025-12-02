"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center px-4 py-4 text-center z-40",
        className
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-center gap-2">
        {children}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 flex-shrink-0 rounded-full p-1 hover:bg-white/20 transition-colors"
          aria-label="Close banner"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
