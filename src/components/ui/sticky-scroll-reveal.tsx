"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "linear-gradient(135deg, #1e3a8a 0%, #064e3b 50%, #1f2937 100%)", // Deep blue to emerald to gray
    "linear-gradient(135deg, #7c2d12 0%, #581c87 50%, #1f2937 100%)", // Brown to purple to gray
    "linear-gradient(135deg, #166534 0%, #0c4a6e 50%, #1f2937 100%)", // Green to blue to gray
    "linear-gradient(135deg, #92400e 0%, #7c2d12 50%, #1f2937 100%)", // Amber to brown to gray
    "linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #1f2937 100%)", // Purple to blue to gray
    "linear-gradient(135deg, #064e3b 0%, #92400e 50%, #1f2937 100%)", // Emerald to amber to gray
  ];
  const linearGradients = [
    "linear-gradient(135deg, #34d399 0%, #60a5fa 100%)", // Emerald to blue
    "linear-gradient(135deg, #fbbf24 0%, #f472b6 100%)", // Amber to pink
    "linear-gradient(135deg, #a78bfa 0%, #34d399 100%)", // Purple to emerald
    "linear-gradient(135deg, #fb7185 0%, #fbbf24 100%)", // Rose to amber
    "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)", // Blue to purple
    "linear-gradient(135deg, #34d399 0%, #fb7185 100%)", // Emerald to rose
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        background: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-lg p-6 md:p-10 shadow-2xl border border-white/10"
      ref={ref}
    >
      <div className="div relative flex items-start px-2 md:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm md:text-base text-slate-100 max-w-lg leading-relaxed drop-shadow-md"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32 md:h-40" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        animate={{
          background: backgroundGradient,
          scale: [1, 1.02, 1],
        }}
        transition={{
          background: { duration: 0.8 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className={cn(
          "hidden lg:block h-72 w-96 rounded-lg bg-white sticky top-10 overflow-hidden shadow-2xl border-2 border-white/20",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};