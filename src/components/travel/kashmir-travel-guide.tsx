"use client";

import React from "react";
import { ExpandableCard, Card } from "@/components/ui/expandable-card";

export function KashmirTravelGuide() {
  const cards: Card[] = [
    {
      title: "1) Manasbal Lake - The Emerald Mirror Lake",
      description: "Ganderbal | ~30 km from Srinagar",
      src: "/offbeat/Manasbal-Lake_brown_chinar_kashmir.jpeg.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            A serene freshwater lake with emerald clarity, lotus fields, and a calm vibe that stays quieter than Dal or Nigeen.
            Perfect for slow mornings, couples, and photography.
          </p>
          <p><strong>Distance:</strong> ~30 km (45-55 min) from Srinagar.</p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Hazratbal - 22 km</li>
              <li>Nigeen Lake - 20 km</li>
              <li>Ganderbal Market - 4 km</li>
              <li>Sonamarg Highway (Wayil) - 18 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2) Kausarnag Lake - The Alpine Glacier Basin",
      description: "Aharbal / Kulgam | 80-85 km from Srinagar",
      src: "/offbeat/Kounsarnag-Lake9.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            A pristine 3,800m glacier lake reached via a trek from Aharbal waterfall. Turquoise water, dramatic cliffs,
            and raw high-altitude beauty.
          </p>
          <p><strong>Distance:</strong> 3-4 hrs drive to Aharbal + trek.</p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Aharbal Waterfall - start point</li>
              <li>Kulgam - 35 km</li>
              <li>Shopian - 40 km</li>
              <li>Peer Ki Gali - 55 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "3) Naranag & Gangbal Base - The Mystic Temple Village",
      description: "Ganderbal | 50 km from Srinagar",
      src: "/offbeat/naranag-domail.jpg",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Ancient stone temples amid pine forests and the starting point for treks to Gangbal and Nundkol Lakes.
            Spiritual, calm, and lightly visited.
          </p>
          <p><strong>Distance:</strong> ~1.5 hrs from Srinagar.</p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Kangan - 10 km</li>
              <li>Manasbal - 25 km</li>
              <li>Sonamarg entry - 35 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "4) Doodhpathri - The Valley of Milk",
      description: "Budgam | 42 km from Srinagar",
      src: "/offbeat/1722601769013_Doodhpathri1.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Rolling meadows, the fast-flowing Shaliganga River, pine forests, and cool breezes. A lush picnic-and-walk escape.
          </p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Yusmarg - 35 km</li>
              <li>Khag Village - 8 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "5) Chatpal Valley - The Hidden Forest Escape",
      description: "Anantnag (Shangus) | 85 km from Srinagar",
      src: "/offbeat/1_Zh1OcPsyB5HatJVuqFA0DA.jpg",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Zero-crowd valley with waterfalls, dense forests, and wooden huts. Quiet trails and bird calls instead of traffic.
          </p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Achabal - 25 km</li>
              <li>Kokernag - 30 km</li>
              <li>Daksum - 35 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "6) Bangus Valley - The Endless Green Wonderland",
      description: "Kupwara | ~110 km from Srinagar",
      src: "/offbeat/BANGUS_VALLEY.png",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Massive undisturbed meadows, streams, and a vast open landscape. One of Kashmir's biggest offbeat gems for campers and stargazers.
          </p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Lolab Valley - 40 km</li>
              <li>Kupwara Town - 30 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "7) Gurez Valley - The Himalayas' Best Kept Secret",
      description: "Bandipora | 130 km from Srinagar",
      src: "/offbeat/kashmirtimes_import_kashmirtimes.com_wp-content_uploads_2024_06_Habba-Khatoon-Mountain-in-Gurez.avif",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Wooden homes, Habba Khatoon Peak, and the Kishanganga River. Remote, romantic, and framed by dramatic mountains.
          </p>
          <p><strong>Distance:</strong> 5-6 hrs from Srinagar over Razdan Pass.</p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Dawar Town - center</li>
              <li>Tulail Valley - 25 km</li>
              <li>Razdan Pass - 55 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "8) Tulail Valley - The Last Village Wonderland",
      description: "Beyond Gurez | 150-160 km from Srinagar",
      src: "/offbeat/tulail-valley_kashmir_golden_wheels.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            A string of remote wooden villages, alpine rivers, and untouched culture past Gurez. Pure offbeat paradise with minimal crowds.
          </p>
          <p><strong>Distance:</strong> 6-7 hrs from Srinagar (via Gurez).</p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Gurez (Dawar) - 25 km</li>
              <li>Habba Khatoon Peak - 28 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "9) Aharbal Waterfall - The Niagara of Kashmir",
      description: "Kulgam | 70 km from Srinagar",
      src: "/offbeat/Aharbal_Falls_139323901-jpeg.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            A powerful blue waterfall in thick pine forests, and the gateway to the Kausarnag trek. Mist, roar, and forest perfume.
          </p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Kausarnag trek base - adjacent</li>
              <li>Kulgam - 20 km</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "10) Daksum Valley - The Whispering Pine Paradise",
      description: "Anantnag | 95 km from Srinagar",
      src: "/offbeat/Daksum-Valley_brown_chinar_kashmir.webp",
      ctaText: "View Details",
      content: (
        <div className="space-y-3">
          <p>
            Pine forests, clear streams, and quiet mountain trails with almost no tourist traffic. Ideal for unhurried walks and picnics.
          </p>
          <div>
            <strong>Nearby:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Sinthan Top - 25 km</li>
              <li>Kokernag Garden - 20 km</li>
              <li>Chatpal - 35 km</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return <ExpandableCard cards={cards} />;
}
