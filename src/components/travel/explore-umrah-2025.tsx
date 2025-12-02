"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

const umrahServices = [
  {
    title: "Flight Reservations",
    description:
      "Direct flights with major airlines including Saudi Airlines, Emirates, and Etihad Airways.",
    link: "#flights",
  },
  {
    title: "Expert Spiritual Guides",
    description:
      "Knowledgeable Islamic scholars who guide you through rituals and historical sites.",
    link: "#guides",
  },
  {
    title: "Premium Accommodation",
    description:
      "Hotels near Haram in Mecca and Masjid Nabawi in Medina for convenient access to prayers.",
    link: "#accommodation",
  },
  {
    title: "Halal Cuisine",
    description:
      "Delicious halal meals with a mix of local Saudi and international cuisine options.",
    link: "#cuisine",
  },
  {
    title: "Complete Ziyarat Tours",
    description:
      "Guided tours to all sacred sites in Mecca and Medina including Cave of Hira, Masjid Quba.",
    link: "#ziyarat",
  },
  {
    title: "Customized Packages",
    description:
      "Flexible itineraries tailored to your budget, duration, and spiritual preferences.",
    link: "#custom-packages",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance in Arabic, English, and Urdu throughout your journey.",
    link: "#support",
  },
  {
    title: "Visa Processing",
    description:
      "Complete visa assistance with document preparation and submission to Saudi consulate.",
    link: "#visa",
  },
  {
    title: "Safe & Comfortable Travel",
    description:
      "Modern air-conditioned transport, trusted local partners, and seamless coordination.",
    link: "#safe-travel",
  },
];

export function ExploreUmrah2025() {
  return (
    <div className="w-full py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">EXPLORE UMRAH 2026</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Embark on a blessed journey to the holy cities of Mecca and Medina. We offer comprehensive
          Umrah packages with spiritual guidance, premium services, and complete peace of mind.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={umrahServices} />
      </div>
    </div>
  );
}