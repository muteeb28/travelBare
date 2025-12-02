import Link from "next/link";
import { notFound } from "next/navigation";

type ItineraryItem = { title: string; detail: string };
type PackagePageData = {
  slug: string;
  title: string;
  duration: string;
  price?: string;
  overview: string;
  facilities: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
};

const packages: PackagePageData[] = [
  {
    slug: "cozy-kashmir-4n5d",
    title: "Cozy Kashmir",
    duration: "4 Nights / 5 Days",
    price: "Rs 32,000 per couple",
    overview:
      "Essential Srinagar, Gulmarg, and Pahalgam circuit with a relaxed pace and curated stays for couples.",
    facilities: ["Flights assistance", "Hotels/Houseboat", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Airport pickup, check-in to hotel/houseboat, evening shikara ride." },
      { title: "Day 2: Srinagar City", detail: "Mughal Gardens, Hazratbal, old city markets." },
      { title: "Day 3: Gulmarg Excursion", detail: "Day trip to Gulmarg; optional Gondola (direct payment). Return to Srinagar." },
      { title: "Day 4: Pahalgam Highlights", detail: "Drive to Pahalgam via saffron fields; Aru/Betaab (local cab). Return Srinagar." },
      { title: "Day 5: Departure", detail: "Airport drop after breakfast." },
    ],
    inclusions: [
      "Accommodation in Srinagar (hotel/houseboat) with breakfast & dinner",
      "Private cab for airport transfers and listed sightseeing",
      "1-hour shikara ride on Dal Lake",
      "Driver allowance, tolls, parking, and taxes",
    ],
    exclusions: [
      "Air/rail fares",
      "Gondola tickets, pony rides, and local union cabs",
      "Lunches and personal expenses",
      "Entry fees to monuments/parks",
      "Any item not mentioned in inclusions",
    ],
  },
  {
    slug: "paradise-kashmir-5n6d",
    title: "Paradise Kashmir",
    duration: "5 Nights / 6 Days",
    price: "Rs 41,000 per couple",
    overview:
      "Bestseller Kashmir circuit covering Srinagar, Gulmarg, and Pahalgam with houseboat and shikara experiences.",
    facilities: ["Flights assistance", "Hotels", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Meet at Srinagar Airport, transfer to deluxe houseboat on Dal Lake. Evening shikara ride and leisure." },
      { title: "Day 2: Srinagar City", detail: "Visit Mughal Gardens (Shalimar, Nishat), Hazratbal, and old city markets. Overnight in Srinagar." },
      { title: "Day 3: Gulmarg Excursion", detail: "Drive to Gulmarg, optional Gondola Phase I/II, meadows walk. Return to Srinagar." },
      { title: "Day 4: Pahalgam", detail: "Check out for Pahalgam. En route saffron fields, Avantipura ruins. Explore Aru / Betaab Valley (local cab). Overnight Pahalgam." },
      { title: "Day 5: Pahalgam Leisure", detail: "Free morning by the Lidder River; optional pony rides. Evening drive back to Srinagar hotel." },
      { title: "Day 6: Departure", detail: "Airport drop after breakfast. Carry great memories of Kashmir!" },
    ],
    inclusions: [
      "Accommodation: Srinagar hotel + 1 night deluxe houseboat, Pahalgam hotel",
      "Meals: Breakfast & dinner as per plan",
      "Private cab for airport transfers and sightseeing (Srinagar/Gulmarg/Pahalgam drops)",
      "Shikara ride on Dal Lake (1 hour)",
      "Driver allowance, tolls, parking, and taxes",
    ],
    exclusions: [
      "Air/rail fares",
      "Gondola tickets, pony rides, and local union cabs in Aru/Chandanwari/Betab Valley",
      "Lunches and personal expenses",
      "Entry fees to monuments/parks",
      "Any item not mentioned in inclusions",
    ],
  },
  {
    slug: "beautiful-kashmir-7n8d",
    title: "Beautiful Kashmir",
    duration: "7 Nights / 8 Days",
    price: "Rs 58,000 per couple",
    overview:
      "Premium stays with curated experiences, extra leisure, and curated food stops for a slow, scenic holiday.",
    facilities: ["Flights assistance", "Hotels", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Check-in at boutique hotel, evening shikara ride with kahwa." },
      { title: "Day 2: Srinagar Heritage", detail: "Old city walk, papier-mâché ateliers, Mughal Gardens." },
      { title: "Day 3: Gulmarg Premium Day", detail: "Gondola (priority slot subject to availability), café stops." },
      { title: "Day 4: Sonmarg", detail: "Thajiwas Glacier by pony/ATV (direct payment). Return to Srinagar." },
      { title: "Day 5: Pahalgam Transfer", detail: "En route saffron fields and Awantipora ruins. Riverside stay." },
      { title: "Day 6: Pahalgam Valleys", detail: "Aru, Betaab, Chandanwari with local cab. Optional rafting." },
      { title: "Day 7: Srinagar Leisure", detail: "Shopping for pashmina/carpet, café-hop on Boulevard Road." },
      { title: "Day 8: Departure", detail: "Airport drop with assistance." },
    ],
    inclusions: [
      "Premium category hotels/houseboat",
      "Breakfast & dinner",
      "Private cab for transfers and listed sightseeing",
      "Shikara ride on Dal Lake",
      "Driver allowance, tolls, parking, taxes",
    ],
    exclusions: [
      "Air/rail fares",
      "Adventure activities, gondola, ponies, local union cabs",
      "Lunches, tips, personal expenses",
      "Park/monument entry fees",
    ],
  },
  {
    slug: "incredible-kashmir-6n7d",
    title: "Incredible Kashmir",
    duration: "6 Nights / 7 Days",
    price: "Rs 48,500 per couple",
    overview:
      "Balanced week-long itinerary with Sonmarg and Gulmarg day trips plus a relaxed Pahalgam stay.",
    facilities: ["Flights assistance", "Hotels", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Airport pick-up, check-in, sunset shikara." },
      { title: "Day 2: Srinagar City", detail: "Mughal Gardens and old Srinagar tour." },
      { title: "Day 3: Gulmarg", detail: "Gondola (optional), meadows. Return to Srinagar." },
      { title: "Day 4: Sonmarg", detail: "Drive to Sonmarg for glacier views. Back to Srinagar." },
      { title: "Day 5: Pahalgam Transfer", detail: "En route saffron fields; evening by Lidder River." },
      { title: "Day 6: Pahalgam Valleys", detail: "Aru/Betaab/Chandanwari (local cab). Return to Srinagar." },
      { title: "Day 7: Departure", detail: "Airport drop." },
    ],
    inclusions: [
      "6 nights accommodation",
      "Breakfast & dinner",
      "Private cab for transfers and listed sightseeing",
      "Shikara ride on Dal Lake",
      "Driver allowance, tolls, parking, taxes",
    ],
    exclusions: [
      "Flights",
      "Gondola, ponies, local union cabs, rafting",
      "Lunches, tips, personal expenses",
      "Entry tickets",
    ],
  },
  {
    slug: "basic-kashmir-3n4d",
    title: "Basic Kashmir",
    duration: "3 Nights / 4 Days",
    price: "Pricing on request",
    overview:
      "Quick getaway covering Srinagar highlights and a short Gulmarg or Pahalgam excursion.",
    facilities: ["Flights assistance", "Hotels", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Check-in, shikara ride, boulevard walk." },
      { title: "Day 2: Srinagar Sights", detail: "Mughal Gardens, Hazratbal, old city walk." },
      { title: "Day 3: Gulmarg or Pahalgam", detail: "Choose one excursion (direct payments for local activities)." },
      { title: "Day 4: Departure", detail: "Airport drop after breakfast." },
    ],
    inclusions: [
      "3 nights accommodation in Srinagar",
      "Breakfast & dinner",
      "Private cab for transfers and listed sightseeing",
      "1-hour shikara ride",
      "Driver allowance, tolls, parking, taxes",
    ],
    exclusions: [
      "Flights",
      "Gondola/ponies/union cabs/rafting",
      "Lunches and personal expenses",
      "Entry fees",
    ],
  },
  {
    slug: "luxury-kashmir-7n8d",
    title: "Luxury Kashmir",
    duration: "7 Nights / 8 Days",
    price: "Pricing on request",
    overview:
      "Luxury-focused Kashmir escape with premium stays, curated dining stops, and a balanced mix of Srinagar, Gulmarg, Sonmarg, and Pahalgam.",
    facilities: ["Flights assistance", "Premium hotels/houseboat", "Meals (Breakfast & Dinner)", "Transfers", "Sightseeing"],
    itinerary: [
      { title: "Day 1: Srinagar Arrival", detail: "Private transfer, check-in to premium hotel/houseboat, evening shikara ride with kahwa." },
      { title: "Day 2: Srinagar Heritage", detail: "Mughal Gardens, Hazratbal, old city walk, artisan ateliers." },
      { title: "Day 3: Gulmarg Premium Day", detail: "Gondola (priority slot subject to availability), café stops, meadow walks. Return Srinagar." },
      { title: "Day 4: Sonmarg", detail: "Thajiwas Glacier by pony/ATV (direct payment). Return to Srinagar." },
      { title: "Day 5: Pahalgam Transfer", detail: "En route saffron fields and Awantipora ruins. Riverside stay." },
      { title: "Day 6: Aru / Betaab / Chandanwari", detail: "Local sightseeing with union cab. Optional rafting. Overnight Pahalgam." },
      { title: "Day 7: Srinagar Leisure", detail: "Back to Srinagar. Shopping and curated dining." },
      { title: "Day 8: Departure", detail: "Airport drop." },
    ],
    inclusions: [
      "7 nights premium accommodation (Srinagar/Pahalgam/houseboat)",
      "Breakfast & dinner",
      "Private cab for transfers and listed sightseeing",
      "1-hour shikara ride on Dal Lake",
      "Driver allowance, tolls, parking, taxes",
    ],
    exclusions: [
      "Flights",
      "Gondola, pony rides, local union cabs, rafting",
      "Lunches, tips, personal expenses",
      "Entry tickets to parks/monuments",
      "Anything not mentioned in inclusions",
    ],
  },
];

const packagesBySlug = Object.fromEntries(packages.map((p) => [p.slug, p]));

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg bg-card shadow-sm">
      <div className="px-4 py-3 border-b font-semibold text-lg">{title}</div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default async function PackageDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packagesBySlug[slug];

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <Link href="/" className="text-sm text-amber-600 hover:underline">
          ← Back to packages
        </Link>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{pkg.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
            <p>{pkg.duration}</p>
            {pkg.price && (
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 border border-amber-200">
                {pkg.price}
              </span>
            )}
          </div>
          <p className="text-muted-foreground max-w-3xl">{pkg.overview}</p>
          <p className="text-base text-foreground">
            Ready to book {pkg.title}? Call us at{" "}
            <a className="font-semibold text-amber-700" href="tel:+916006031751">
              +91-6006031751
            </a>{" "}
            or email{" "}
            <a className="font-semibold text-amber-700" href="mailto:travelbareofficial@gmail.com">
              travelbareofficial@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {pkg.facilities.map((facility) => (
            <div
              key={facility}
              className="flex items-center gap-2 rounded-md border bg-white/40 dark:bg-neutral-900 px-3 py-2 text-sm font-medium"
            >
              <span aria-hidden>✓</span>
              <span>{facility}</span>
            </div>
          ))}
        </div>

        <SectionCard title="Itinerary">
          <ol className="space-y-3 list-decimal list-inside">
            {pkg.itinerary.map((item) => (
              <li key={item.title} className="space-y-1">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-4">
          <SectionCard title="Inclusions">
            <ul className="space-y-2 list-disc list-inside">
              {pkg.inclusions.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
          </SectionCard>
          <SectionCard title="Exclusions">
            <ul className="space-y-2 list-disc list-inside">
              {pkg.exclusions.map((exc) => (
                <li key={exc}>{exc}</li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-amber-50 dark:bg-amber-950/20">
          <div>
            <p className="font-semibold">Ready to book {pkg.title}?</p>
            <p className="text-sm text-muted-foreground">
              Call us at{" "}
              <a className="text-amber-700 hover:underline" href="tel:+916006031751">
                +91-6006031751
              </a>{" "}
              or email{" "}
              <a className="text-amber-700 hover:underline" href="mailto:travelbareofficial@gmail.com">
                travelbareofficial@gmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="tel:+916006031751"
              className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 text-sm font-semibold"
            >
              Call Now
            </Link>
            <Link
              href={`https://wa.me/916006031751?text=${encodeURIComponent(`Booking request: ${pkg.title}`)}`}
              className="px-4 py-2 rounded-md border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
