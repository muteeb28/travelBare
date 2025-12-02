"use client";

import { useState } from "react";
import { Plane, ArrowRight } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

export default function FlightSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setPhoneNumber("");
    }, 3000);
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 mx-auto">
          <Plane className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Book Cheap Flights Soon
        </h1>

        {/* Subheading */}
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Worldwide Travel, your gateway to affordable flights worldwide.
          We provide reliable, competitive rates, and seamless booking experience for
          your travel needs. Whether you're planning a pilgrimage, vacation, or business
          trip, we've got you covered.
        </p>

        {/* Early Access Form */}
        {!isSubmitted ? (
          <div className="mt-4 space-y-4 relative z-10">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91 98765 43210"
              required
              pattern="[0-9+\-\s()]+"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-amber-500 w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700 px-4 py-3 text-neutral-200"
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                "Submitting..."
              ) : (
                <>
                  Notify Me When Available
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="mt-8 py-4 relative z-10">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-amber-400 font-semibold text-lg text-center">
              Thanks! We'll notify you when we launch.
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-neutral-600 text-center relative z-10">
          Stay tuned for exclusive launch offers and discounts!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
