"use client";
import React from "react";
import { Tooltip } from "@/components/ui/tooltip-card";

export function ExploreKashmir() {
  return (
    <div className="w-full py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">EXPLORE KASHMIR</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          TravelBare – Kashmir & Umrah With Care
        </p>
        <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto">
          TravelBare is a Srinagar-based travel company offering premium experiences across Kashmir and spiritually guided Umrah journeys. With 4+ years of expertise, we focus on comfort, trust, and seamless travel planning.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-8">
        <div className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          <span>A journey to Kashmir deserves comfort wrapped in sophistication. Bring a </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content={<PackLayersCard />}
          >
            <span className="cursor-pointer font-semibold">well-insulated overcoat</span>
          </Tooltip>
          <span> with premium thermals, plush woolen layers, and </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content="Choose waterproof, grippy boots that can handle snow and slush without sacrificing comfort."
          >
            <span className="cursor-pointer font-semibold">snow-friendly footwear</span>
          </Tooltip>
          <span> so the crisp Himalayan air stays enjoyable instead of harsh.</span>
        </div>

        <div className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          <span>Elevate your care kit with a rich </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content="Heavy-duty moisturizer + SPF + nourishing lip balm. Reapply often in dry mountain air."
          >
            <span className="cursor-pointer font-semibold">moisturizer & lip balm</span>
          </Tooltip>
          <span>, hydrating essentials, and a small </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content={<WellnessCard />}
          >
            <span className="cursor-pointer font-semibold">wellness kit</span>
          </Tooltip>
          <span> for altitude, aches, and immunity. Sunglasses are non-negotiable against the snow-glare.</span>
        </div>

        <div className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          <span>Keep a fully charged </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content="Carry a high-output power bank (20,000 mAh+), spare cable, and a universal adapter."
          >
            <span className="cursor-pointer font-semibold">power bank</span>
          </Tooltip>
          <span> for uninterrupted photography, and secure your </span>
          <Tooltip
            containerClassName="text-neutral-800 dark:text-neutral-100"
            content="Passport/ID, permits, insurance, bookings, and a few photocopies stored separately."
          >
            <span className="cursor-pointer font-semibold">IDs & travel documents</span>
          </Tooltip>
          <span> for seamless movement across the region. With thoughtful preparation, your Kashmir escape becomes an effortless blend of serenity, comfort, and luxury—just as it’s meant to be.</span>
        </div>

        <div className="space-y-3 rounded-lg border bg-card/30 p-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">🌄 Kashmir Travel</h3>
          <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            We design personalized Kashmir packages for families, couples, friends, and groups, combining local expertise with curated hospitality. Our services include comfortable transportation, experienced local guides, 3★ to 5★ hotel stays along with premium houseboats and homestays, and fully customized itineraries supported by our dedicated 24/7 assistance — ensuring every journey through Kashmir feels effortless and memorable.
          </p>
        </div>

        <div className="space-y-3 rounded-lg border bg-card/30 p-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">🕋 Umrah Services</h3>
          <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            TravelBare offers reliable and spiritually fulfilling Umrah packages designed to give every pilgrim complete peace of mind. From 3★ to 5★ accommodation options in Makkah and Madinah to seamless ground handling, transportation, and guided orientation, we ensure a smooth and meaningful pilgrimage. With our local support teams based in Madinah, pilgrims receive trusted on-ground assistance throughout their sacred journey.
          </p>
          <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
            ❤️ TravelBare – Comfort, Care & Memorable Journeys.
          </p>
        </div>
      </div>
    </div>
  );
}

const PackLayersCard = () => (
  <div className="space-y-2">
    <img
      src="/offbeat/1722601769013_Doodhpathri1.webp"
      alt="Layered winter wear"
      className="aspect-video w-full rounded-sm object-cover"
    />
    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Layer like a pro</p>
    <ul className="text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside space-y-1">
      <li>Base: merino thermals</li>
      <li>Mid: fleece or light down</li>
      <li>Shell: waterproof overcoat</li>
    </ul>
  </div>
);

const WellnessCard = () => (
  <div className="space-y-2">
    <img
      src="/offbeat/Aharbal_Falls_139323901-jpeg.webp"
      alt="Kashmir wellness"
      className="aspect-video w-full rounded-sm object-cover"
    />
    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Wellness mini-kit</p>
    <ul className="text-xs text-neutral-600 dark:text-neutral-400 list-disc list-inside space-y-1">
      <li>Basic meds + pain relief</li>
      <li>Electrolytes & hydration</li>
      <li>Hand sanitizer & wipes</li>
    </ul>
  </div>
);
