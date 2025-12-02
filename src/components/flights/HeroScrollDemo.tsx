"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FlightBookingPreview } from "./FlightBookingPreview";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Book flights effortlessly with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Simple & Quick Booking
              </span>
            </h1>
          </>
        }
      >
        <FlightBookingPreview />
      </ContainerScroll>
    </div>
  );
}
