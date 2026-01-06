"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FocusCards } from "@/components/ui/focus-cards";
import { svgPlaceholder } from "@/lib/svgPlaceholder";

export function UmrahFocusCards() {
  const router = useRouter();

  const handleViewDetails = (card: { slug: string }) => {
    router.push(`/umrah-packages/${card.slug}`);
  };

  const cards = [
    {
      title: "Value Umrah — Price on request",
      src: "/umrah/pexels-photo-34956781.jpeg",
      slug: "value-umrah",
    },
    {
      title: "Deluxe Umrah — Price on request",
      src: "/umrah/pexels-photo-19021371.jpeg",
      slug: "deluxe-umrah",
    },
    {
      title: "Executive Umrah — Price on request",
      src: "/umrah/pexels-photo-32839113.jpeg",
      slug: "executive-umrah",
    },
    {
      title: "Premium Umrah — Price on request",
      src: "/umrah/pexels-photo-34959950.jpeg",
      slug: "premium-umrah",
    },
    {
      title: "Luxury Umrah — Price on request",
      src: "/umrah/pexels-photo-20523038.jpeg",
      slug: "luxury-umrah",
    },
    {
      title: "Super Luxury Umrah — Price on request",
      src: "/umrah/pexels-photo-34959950.jpeg",
      slug: "super-luxury-umrah",
    },
  ];

  return (
    <div className="py-8">
      <FocusCards
        cards={cards}
        onViewDetails={(card) => handleViewDetails(card)}
      />
    </div>
  );
}
