"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FocusCards } from "@/components/ui/focus-cards";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const cardData = [
  {
    title: "Basic Kashmir - 3N/4D — Pricing on request",
    slug: "basic-kashmir-3n4d",
    image: "/kashmir/pexels-wanderinglenses-16024592 (2) (1) (1).jpg",
  },
  {
    title: "Cozy Kashmir - 4N/5D — Rs 32k / couple",
    slug: "cozy-kashmir-4n5d",
    image: "/kashmir/pexels-gautham-reghu-1029880-19189030 (1).jpg",
  },
  {
    title: "Paradise Kashmir - 5N/6D — Rs 41k / couple",
    slug: "paradise-kashmir-5n6d",
    image: "/kashmir/pexels-haziqfarooqi-34802043 (1) (1).jpg",
  },
  {
    title: "Incredible Kashmir - 6N/7D — Rs 48.5k / couple",
    slug: "incredible-kashmir-6n7d",
    image: "/kashmir/pexels-rubaitulazad-12141330 (2) (1).jpg",
  },
  {
    title: "Beautiful Kashmir - 7N/8D — Rs 58k / couple",
    slug: "beautiful-kashmir-7n8d",
    image: "/kashmir/pexels-imshafeek-34848384 (1) (1).jpg",
  },
  {
    title: "Luxury Kashmir - 7N/8D — Pricing on request",
    slug: "luxury-kashmir-7n8d",
    image: "/kashmir/pexels-imadclicks-7824513 (1).jpg",
  },
];

export function KashmirFocusCards() {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const router = useRouter();

  const handleViewDetails = (cardData: any) => {
    setSelectedPackage(cardData);
    setLoading(true);
    setLoadingComplete(false);
  };

  useEffect(() => {
    if (loadingComplete && selectedPackage) {
      setTimeout(() => {
        setLoading(false);
        router.push(`/package-details/${selectedPackage.slug}`);
      }, 500);
    }
  }, [loadingComplete, selectedPackage, router]);

  const getLoadingStates = (packageTitle: string) => {
    const packageName = packageTitle.split(" - ")[0];
    return [
      { text: `Preparing ${packageName} details...` },
      { text: "Including Houseboat stay" },
      { text: "Including Hotel accommodations" },
      { text: "Including Meals (Breakfast + Dinner)" },
      { text: "Including Shikara ride" },
      { text: "Including All sightseeing" },
      { text: "Including Transportation" },
      { text: "Including Toll & taxes" },
      { text: "Including Driver allowance" },
      { text: `${packageName} ready for booking!` },
    ];
  };

  const cards = cardData.map((card, idx) => ({
    title: card.title,
    src: encodeURI(card.image),
    slug: card.slug,
    // provide a predictable key for React
    id: card.slug,
  }));

  return (
    <div className="py-8">
      <MultiStepLoader
        loadingStates={selectedPackage ? getLoadingStates(selectedPackage.title) : []}
        loading={loading}
        duration={800}
        loop={false}
        onComplete={() => setLoadingComplete(true)}
      />

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}

      <FocusCards cards={cards} onViewDetails={handleViewDetails} />
    </div>
  );
}
