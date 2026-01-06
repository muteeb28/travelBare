"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

type Highlight = { title: string; desc: string; image: string };
type Advantage = { title: string; desc: string; icon: string };
type RoomRate = { label: string; desc: string; price: string };

type PackageDetail = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  price: string;
  subtitle?: string;
  paymentTerms: string[];
  roomOptions: string[];
  highlights: Highlight[];
  howToBook: string[];
  advantages: Advantage[];
  roomRates?: RoomRate[];
  inclusions?: string[];
  exclusions?: string[];
  requirements?: string[];
  important?: string[];
  ziyaratMakkah?: string[];
  ziyaratMadinah?: string[];
};

const SHARED_PAYMENT_TERMS = [
  "70% to be paid at the time of booking along with the necessary documents.",
  "30% to be paid on receiving the final booking vouchers.",
  "Booking can be confirmed via bank transfer.",
];

const SHARED_ROOM_OPTIONS = ["Quad", "Triple", "Double"];

const SHARED_ROOM_RATES_REQUEST: RoomRate[] = [
  { label: "Quad", desc: "Standard 04 Guests in a Room", price: "Pricing on request" },
  { label: "Triple", desc: "Standard 03 Guests in a Room", price: "Pricing on request" },
  { label: "Double", desc: "Standard 02 Guests in a Room", price: "Pricing on request" },
];

const SHARED_HIGHLIGHTS: Highlight[] = [
  {
    title: "Makkah 5 Star",
    desc: "Comfortable 5-star hotel for easy access to Haram.",
    image: "/highlights/le-meridian-towers-atyab1-e1571488350124.webp",
  },
  {
    title: "Direct Flights",
    desc: "Direct flights as per availability for convenient travel.",
    image: "/highlights/Saudi-Arabian-Airlines_Saudia-e1532861222703.webp",
  },
  {
    title: "Deluxe Buses",
    desc: "Airport, inter-city, and Ziyarat transfers.",
    image: "/highlights/DLX-BUS2-e1519899146323.webp",
  },
  {
    title: "Indian Meals",
    desc: "Buffet-style Indian meals at the hotel.",
    image: "/highlights/sheraton-makkah-atyab-umrah-786923-e1641462543611.jpg",
  },
];

const SHARED_ADVANTAGES: Advantage[] = [
  { title: "Local Assistance", desc: "On-ground staff to help, always.", icon: "📍" },
  { title: "Complete Privacy", desc: "Private secured car for your family.", icon: "🛡️" },
  { title: "No Fixed Dates", desc: "Travel the day you want, no group hassles.", icon: "🗓️" },
  { title: "Wheelchair Help", desc: "Wheelchair with assistant available.", icon: "♿" },
  { title: "Transparency", desc: "No hidden costs; vouchers shared in advance.", icon: "✔️" },
  { title: "Service Guarantee", desc: "24/7 support with best services.", icon: "🤝" },
];

const SHARED_INCLUSIONS = [
  "Stay in Makkah Hotel: 5 Star, 1500m with free shuttle",
  "Stay in Madinah Hotel: Economy hotel, 250m",
  "All meals: Indian buffet",
  "Laundry",
  "Airfare: Direct Saudi flights",
  "Deluxe Coach airport transfers",
  "Deluxe Coach transfer from Makkah to Madinah",
  "Ziyaraat in Makkah & Madinah",
  "Local Assistance",
  "Umrah Visa",
  "Ground Handling Services",
  "Guidance for Rawda permit",
  "Saudi VAT and Municipality Tax",
  "Health Insurance (valid in KSA)",
  "TravelBare Umrah Kit (complimentary)",
  "5 liters Zam Zam (complimentary)",
  "24/7 Customer Support",
];

const SHARED_EXCLUSIONS = [
  "Any expenses of personal nature incurred by the pilgrims during the stay",
  "Any other expense not mentioned in the inclusions",
];

const SHARED_REQUIREMENTS = [
  "Scanned passport copies with minimum 6 months validity at travel time",
  "1 recent passport size photograph (35mm x 45mm) with white background (soft copy)",
  "PAN card copy (soft copy)",
  "International passport holders/US B1B2 visa holders can opt for Umrah/Tourist visa via email/WhatsApp",
  "Offering Umrah services to 30+ nationalities; complete documentation handled by TravelBare",
];

const SHARED_IMPORTANT = [
  "Group Umrah package; fixed dates and selected cities",
  "Routing follows group plan (Makkah/Madinah sequence is fixed)",
  "Complete local transport by bus with the group; private transport available at extra cost",
  "Meals provided by hygienic caterers (not hotel kitchen)",
  "Any unused service is not entitled to a refund",
  "Wheelchair assistance available on request",
  "Airfare included as per availability; any difference added to final price",
  "Upgrades (rooms/hotels/transport) subject to availability and additional cost",
  "Express visa available; processing 2-4 working days",
  "Prices not valid for Ramadan; pricing on request",
  "Own-flights option not available for group departures",
  "Relatives/friends in KSA cannot share group services without charges",
  "New charges by Saudi authorities will be borne by pilgrims",
  "Passports must have minimum 4 empty pages and 6 months validity on travel date",
];

const SHARED_ZIYARAT_MAKKAH = [
  "Jabal E Noor",
  "Jabal E Soar",
  "Jabal E Rehmat",
  "Mina",
  "Muzdalifah",
  "Arafaat",
  "Masjid Jinn",
  "Masjid Namirah",
  "Masjid Khaif",
  "Maqbarat Al Mualla",
  "Maqbarat Al Shabeka (By Walk)",
  "Masjid Mashar Al Haraam",
];

const SHARED_ZIYARAT_MADINAH = [
  "Jabal E Ohud",
  "Shuhada E Ohud",
  "Masjid Quba",
  "Masjid Qiblatain",
  "Masjid Saba",
  "Masjid Sajdah",
  "Masjid Ali (RA)",
  "Masjid Abu Bakr (RA)",
  "Masjid Usmaan (RA)",
  "Maqbarat Al Baqi",
  "Masjid Ghamama",
];

const PACKAGES: PackageDetail[] = [
  {
    slug: "value-umrah",
    title: "Value Umrah",
    duration: "Group departures, all inclusive",
    image: "/umrah/pexels-photo-34956781.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: [
      { label: "Quad", desc: "Standard 04 Guests in a Room", price: "Pricing on request" },
      { label: "Triple", desc: "Standard 03 Guests in a Room", price: "Pricing on request" },
      { label: "Double", desc: "Standard 02 Guests in a Room", price: "Pricing on request" },
    ],
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose your package", "Finalise dates & itinerary", "Pay via secure channels", "Travel - we handle the rest"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
  {
    slug: "deluxe-umrah",
    title: "Deluxe Umrah",
    duration: "Custom dates • 5 Star focus",
    image: "/umrah/pexels-photo-19021371.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: SHARED_ROOM_RATES_REQUEST,
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose your package", "Finalise dates & itinerary", "Pay via secure channels", "Travel - we handle the rest"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
  {
    slug: "executive-umrah",
    title: "Executive Umrah",
    duration: "Tailored dates • Executive comfort",
    image: "/umrah/pexels-photo-32839113.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: SHARED_ROOM_RATES_REQUEST,
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose your package", "Finalise dates & itinerary", "Pay via secure channels", "Travel - we handle the rest"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
  {
    slug: "premium-umrah",
    title: "Premium Umrah",
    duration: "Premium itinerary",
    image: "/umrah/pexels-photo-34959950.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: SHARED_ROOM_RATES_REQUEST,
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose", "Finalise", "Pay", "Travel"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
  {
    slug: "luxury-umrah",
    title: "Luxury Umrah",
    duration: "Luxury itinerary",
    image: "/umrah/pexels-photo-20523038.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: SHARED_ROOM_RATES_REQUEST,
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose", "Finalise", "Pay", "Travel"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
  {
    slug: "super-luxury-umrah",
    title: "Super Luxury Umrah",
    duration: "Bespoke ultra luxury",
    image: "/umrah/pexels-photo-27131989.jpeg",
    price: "Pricing on request",
    subtitle: "Room options: Quad / Triple / Double",
    paymentTerms: SHARED_PAYMENT_TERMS,
    roomOptions: SHARED_ROOM_OPTIONS,
    roomRates: SHARED_ROOM_RATES_REQUEST,
    highlights: SHARED_HIGHLIGHTS,
    howToBook: ["Choose", "Finalise", "Pay", "Travel"],
    advantages: SHARED_ADVANTAGES,
    inclusions: SHARED_INCLUSIONS,
    exclusions: SHARED_EXCLUSIONS,
    requirements: SHARED_REQUIREMENTS,
    important: SHARED_IMPORTANT,
    ziyaratMakkah: SHARED_ZIYARAT_MAKKAH,
    ziyaratMadinah: SHARED_ZIYARAT_MADINAH,
  },
];

const TABS = ["Booking", "Details", "Requirements", "Important"] as const;

export default function UmrahPackageDetail() {
  const { slug } = useParams() as { slug: string };
  const router = useRouter();
  const data = useMemo(() => PACKAGES.find((p) => p.slug === slug), [slug]);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Booking");
  const [roomSelection, setRoomSelection] = useState<string>(data?.roomRates?.[0]?.label || data?.roomOptions?.[0] || "Quad");

  if (!data) {
    return (
      <div className="min-h-screen bg-background px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Package not found</h1>
        <Link href="/umrah-packages" className="text-amber-600 hover:underline">
          Back to Umrah Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/umrah-packages" className="text-sm text-amber-600 hover:underline">
            &lt;- Back to Umrah Packages
          </Link>
          <button
            onClick={() => router.push("https://wa.me/916006031751")}
            className="rounded-full border border-amber-600 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-600 hover:text-white transition"
          >
            Call Now
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-muted-foreground">{data.duration}</p>
            <p className="text-xl font-semibold text-amber-700">{data.price}</p>
            {data.subtitle && <p className="text-sm text-foreground">{data.subtitle}</p>}
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border">
            <Image src={data.image} alt={data.title} fill className="object-cover" sizes="100vw" />
          </div>
        </div>

        <div className="bg-card rounded-lg border p-4 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${activeTab === tab ? "bg-amber-100 text-amber-800 border border-amber-200" : "bg-muted text-foreground"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {data.roomRates && data.roomRates.length > 0 && (
            <div className="flex gap-2">
              {data.roomRates.map((rate) => (
                <button
                  key={rate.label}
                  onClick={() => setRoomSelection(rate.label)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md ${roomSelection === rate.label ? "bg-amber-100 text-amber-800 border border-amber-200" : "bg-muted text-foreground"
                    }`}
                >
                  {rate.label.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-lg border bg-card p-4 space-y-6">
          {activeTab === "Booking" && (
            <div className="grid md:grid-cols-2 gap-4 items-start">
              <ul className="list-disc list-inside space-y-2 text-foreground">
                {data.paymentTerms.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <span className="text-3xl">👥</span>
                  <p className="text-sm font-semibold text-foreground">
                    {data.roomRates?.find((r) => r.label === roomSelection)?.desc || "Room selection"}
                  </p>
                  <p className="text-amber-700 font-bold">
                    {data.roomRates?.find((r) => r.label === roomSelection)?.price || data.price}
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Details" && (
            <div className="space-y-4 text-foreground">
              {data.inclusions && (
                <div>
                  <h4 className="font-semibold">Inclusions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {data.inclusions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.exclusions && (
                <div>
                  <h4 className="font-semibold">Exclusions</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {data.exclusions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="font-semibold">Room Options: {data.roomOptions.join(" / ")}</p>
            </div>
          )}
          {activeTab === "Requirements" && (
            <ul className="list-disc list-inside space-y-2 text-foreground">
              {(data.requirements || SHARED_REQUIREMENTS).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {activeTab === "Important" && (
            <ul className="list-disc list-inside space-y-2 text-foreground">
              {(data.important || SHARED_IMPORTANT).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {data.highlights.map((item) => (
            <DirectionAwareHover key={item.title} imageUrl={item.image} className="w-full h-48 md:h-64 rounded-lg border">
              <div className="space-y-1">
                <p className="text-sm font-semibold uppercase tracking-wide">{item.title}</p>
                <p className="text-xs md:text-sm text-white/90">{item.desc}</p>
              </div>
            </DirectionAwareHover>
          ))}
        </div>

        {data.ziyaratMakkah && (
          <div className="rounded-lg border bg-card p-4 space-y-3">
            <h3 className="text-xl font-semibold text-amber-700">Makkah Ziyarat</h3>
            <ul className="list-disc list-inside space-y-1 text-foreground">
              {data.ziyaratMakkah.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {data.ziyaratMadinah && (
          <div className="rounded-lg border bg-card p-4 space-y-3">
            <h3 className="text-xl font-semibold text-amber-700">Madinah Ziyarat</h3>
            <ul className="list-disc list-inside space-y-1 text-foreground">
              {data.ziyaratMadinah.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-lg border bg-card p-6 space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Check out our</p>
            <h3 className="text-2xl font-bold">Custom Packages</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Planning for a short duration, fixed dates, or need 5 Star hotels close to the Haram? Our custom packages are the best pick for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Deluxe", "Executive", "Premium", "Luxury", "Super Luxury"].map((tier) => (
              <span
                key={tier}
                className="px-4 py-2 rounded-md border border-amber-200 text-amber-800 bg-amber-50 text-sm font-semibold"
              >
                {tier}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground">Didn&apos;t get what you were looking for?</p>
            <Link
              href="https://wa.me/916006031751?text=Custom%20Umrah%20package%20quote"
              className="inline-flex w-fit items-center justify-center rounded-md border border-amber-600 bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {data.howToBook.map((step, idx) => (
            <div key={step} className="rounded-lg border bg-card p-4 text-center space-y-2">
              <div className="text-2xl font-bold text-amber-700">{idx + 1}</div>
              <p className="text-sm font-semibold">{step}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.advantages.map((adv) => (
            <div key={adv.title} className="rounded-lg border bg-card p-4 space-y-2 text-center">
              <div className="text-2xl">{adv.icon}</div>
              <h4 className="font-semibold">{adv.title}</h4>
              <p className="text-sm text-muted-foreground">{adv.desc}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-amber-50 dark:bg-amber-950/20">
          <div>
            <p className="font-semibold">Ready to book {data.title}?</p>
            <p className="text-sm text-muted-foreground">
              Call us at{" "}
              <a className="text-amber-700 hover:underline" href="tel:+916006031751">
                +91-6006031751
              </a>{" "}
              or email{" "}
              <a className="text-amber-700 hover:underline" href="mailto:travelbareofficial@gmail.com">
                travelbareofficial@gmail.com
              </a>
              .
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
              href={`https://wa.me/916006031751?text=${encodeURIComponent(`Booking request: ${data.title}`)}`}
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
