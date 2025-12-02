"use client";

import React from "react";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function AboutUs() {
  const introText =
    "TravelBare is a Srinagar-based travel company offering premium experiences across Kashmir and spiritually guided Umrah journeys. With 4+ years of expertise, we focus on comfort, trust, and seamless travel planning.";

  const kashmirText =
    "We design personalized Kashmir packages for families, couples, friends, and groups — blending local expertise with curated hospitality. Our services include comfortable transportation, experienced local guides, 3★ to 5★ hotel stays along with premium houseboats and homestays, and fully customized itineraries supported by our dedicated 24/7 assistance — ensuring every journey through Kashmir feels effortless and memorable.";

  const umrahText =
    "TravelBare offers reliable and spiritually fulfilling Umrah packages designed to give every pilgrim complete peace of mind. From 3★ to 5★ accommodation options in Makkah and Madinah to seamless ground handling, transportation, and guided orientation, we ensure a smooth and meaningful pilgrimage. With our local support teams based in Madinah, pilgrims receive trusted on-ground assistance throughout their sacred journey.";

  return (
    <div className="p-8 bg-card rounded-lg border">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8 flex flex-col items-center gap-3">
          <div className="relative h-14 w-14">
            <Image src="/logo/logo.png" alt="TravelBare logo" fill sizes="56px" className="object-contain" priority />
          </div>
          <h2 className="text-3xl font-bold mb-2">TravelBare — Kashmir &amp; Umrah with Care</h2>
          <TextGenerateEffect words={introText} className="text-lg text-muted-foreground font-normal" duration={0.3} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Kashmir Travel</h3>
            <p className="text-muted-foreground">{kashmirText}</p>
            <div className="mt-4">
              <p className="font-semibold mb-3">We offer:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Comfortable transportation</li>
                <li>• Local guides</li>
                <li>• 3★ to 5★ hotels, houseboats &amp; homestays</li>
                <li>• Custom itineraries + 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Umrah Services</h3>
            <p className="text-muted-foreground">{umrahText}</p>
            <div className="mt-4">
              <p className="font-semibold mb-3">We provide:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3★ to 5★ Umrah packages</li>
                <li>• Ground handling &amp; transport</li>
                <li>• Guidance and orientation</li>
                <li>• Local support teams in Madinah</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t">
          <p className="text-muted-foreground">
            Our dedicated team is committed to delivering comfort, care, and exceptional service — making your travel
            experience both peaceful and memorable.
          </p>
          <p className="font-semibold text-lg mt-4">TravelBare — Kashmir &amp; Umrah with Care.</p>
        </div>
      </div>
    </div>
  );
}
