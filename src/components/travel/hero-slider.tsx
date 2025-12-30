"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ImagesSlider } from "@/components/aceternity/images-slider";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Two images for two slides (stored in /public/kashmir)
  const images = [
    "/kashmir/pexels-haziqfarooqi-34802043%20(1)%20(1).jpg",
    "/kashmir/pexels-imadclicks-7824513%20(1).jpg",
  ];

  const slides = [
    {
      title: "Kashmir Tour Packages",
      subtitle: "Discover Kashmir With Us",
      buttonText: "View Packages",
      link: "/packages",
    },
    {
      title: "Perform Umrah 2026",
      subtitle: "With Leading Tour Operator",
      buttonText: "View Packages",
      link: "/umrah-packages",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImagesSlider className="h-[40rem]" images={images} autoplay={true}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 80,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            {slides[currentSlide].title}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-neutral-300 max-w-2xl text-center mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href={slides[currentSlide].link}>
              <button className="px-8 py-3 backdrop-blur-sm border bg-amber-600/80 border-amber-500/50 text-white mx-auto text-center rounded-full relative hover:bg-amber-600 transition-all duration-300">
                <span>{slides[currentSlide].buttonText}</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-amber-400 to-transparent" />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </ImagesSlider>
  );
}
