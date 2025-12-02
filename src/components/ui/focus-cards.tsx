"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onViewDetails,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onViewDetails?: (cardData: any) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out bg-gray-200",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {card.src ? (
        <Image
          src={card.src}
          alt={card.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover absolute inset-0"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0b1220 0%, #0f172a 50%, #111827 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
      )}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-100 md:opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-4">
          {card.title}
        </div>
        {onViewDetails && (
          <button
            onClick={() => onViewDetails(card)}
            className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-6 flex items-center justify-center w-fit cursor-pointer"
            style={{
              boxShadow:
                "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
            }}
          >
            View Details
          </button>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
  onViewDetails,
}: {
  cards: any[];
  onViewDetails?: (cardData: any) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
