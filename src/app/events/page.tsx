"use client";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";
import { svgPlaceholder } from "@/lib/svgPlaceholder";

const events = [
  {
    id: 1,
    title: "Tulip Festival",
    description: "Asia's largest tulip garden blooms with over 1.5 million tulips in vibrant colors. A spectacular spring event that transforms Srinagar into a floral paradise.",
    image: svgPlaceholder("Tulip Festival"),
    month: "March - April",
    location: "Indira Gandhi Memorial Tulip Garden, Srinagar",
    duration: "30 days",
    category: "Festival",
    highlights: ["1.5M+ tulips", "70+ varieties", "Mountain backdrop", "Photography paradise"]
  },
  {
    id: 2,
    title: "Shikara Festival",
    description: "A grand celebration on Dal Lake featuring decorated shikaras, cultural performances, and traditional Kashmiri music. Experience the heart of Kashmir's water culture.",
    image: svgPlaceholder("Shikara Festival"),
    month: "June - July",
    location: "Dal Lake, Srinagar",
    duration: "3 days",
    category: "Cultural",
    highlights: ["Decorated Shikaras", "Live music", "Local cuisine", "Night performances"]
  },
  {
    id: 3,
    title: "Saffron Harvest Festival",
    description: "Witness the harvesting of world's finest saffron in the purple fields of Pampore. A unique agricultural celebration showcasing Kashmir's golden spice.",
    image: svgPlaceholder("Saffron Harvest"),
    month: "October - November",
    location: "Pampore, Pulwama",
    duration: "14 days",
    category: "Agricultural",
    highlights: ["Purple saffron fields", "Harvesting experience", "Saffron products", "Local farming culture"]
  },
  {
    id: 4,
    title: "Gulmarg Winter Sports Festival",
    description: "A thrilling winter sports extravaganza featuring skiing, snowboarding, and snow activities. Perfect for adventure enthusiasts and winter sport lovers.",
    image: svgPlaceholder("Winter Sports"),
    month: "January - February",
    location: "Gulmarg",
    duration: "10 days",
    category: "Sports",
    highlights: ["Ski competitions", "Snowboarding", "Gondola rides", "International participants"]
  },
  {
    id: 5,
    title: "Kashmir Handicrafts Fair",
    description: "Explore exquisite Kashmiri handicrafts including Pashmina shawls, carpets, and papier-mâché art. Meet local artisans and witness centuries-old craftsmanship.",
    image: svgPlaceholder("Handicrafts Fair"),
    month: "August - September",
    location: "SKICC, Srinagar",
    duration: "7 days",
    category: "Cultural",
    highlights: ["Pashmina showcase", "Live craft demos", "Artisan workshops", "Traditional art"]
  },
  {
    id: 6,
    title: "Baisakhi Celebration",
    description: "A vibrant spring harvest festival celebrated with traditional dances, music, and feasts. Experience the joyous spirit of Kashmir's agricultural heritage.",
    image: svgPlaceholder("Baisakhi"),
    month: "April",
    location: "Various locations across Kashmir",
    duration: "1 day",
    category: "Festival",
    highlights: ["Traditional dances", "Folk music", "Local cuisine", "Harvest celebrations"]
  },
  {
    id: 7,
    title: "Sindh Darshan Yatra",
    description: "A spiritual and scenic journey to the origin of River Sindh. A lesser-known trekking event that combines adventure with spirituality.",
    image: svgPlaceholder("Sindh Darshan"),
    month: "May - June",
    location: "Ganderbal District",
    duration: "5 days",
    category: "Pilgrimage",
    highlights: ["Sacred river origin", "Trekking routes", "Mountain views", "Spiritual experience"]
  },
  {
    id: 8,
    title: "Kashmir Food Festival",
    description: "Savor authentic Wazwan cuisine and traditional Kashmiri dishes. A culinary journey through Kashmir's rich gastronomic heritage.",
    image: svgPlaceholder("Food Festival"),
    month: "September",
    location: "Srinagar",
    duration: "5 days",
    category: "Food",
    highlights: ["Wazwan feast", "Kahwa tea", "Street food", "Cooking workshops"]
  },
  {
    id: 9,
    title: "Apple Harvest Festival",
    description: "Celebrate Kashmir's famous apple harvest with orchard visits, apple picking, and local festivities. Experience rural Kashmir's agricultural bounty.",
    image: svgPlaceholder("Apple Harvest"),
    month: "September - October",
    location: "Shopian, Pulwama",
    duration: "20 days",
    category: "Agricultural",
    highlights: ["Apple orchards", "Fresh produce", "Farm tours", "Local products"]
  }
];

const categories = ["All", "Festival", "Cultural", "Sports", "Agricultural", "Food", "Pilgrimage"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const words = [
    {
      text: "Discover",
    },
    {
      text: "Kashmir's",
      className: "text-amber-600 dark:text-amber-500",
    },
    {
      text: "hidden",
    },
    {
      text: "events",
      className: "text-amber-600 dark:text-amber-500",
    },
  ];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <TravelNavbar />

      {/* Hero Section with Typewriter */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-4">
            Exclusive festivals and cultural events that most tourists never hear about
          </p>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${
                selectedCategory === category
                  ? "bg-amber-600 text-white border-amber-600"
                  : "border-neutral-300 dark:border-neutral-700 hover:border-amber-600 hover:text-amber-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-neutral-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.month}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Location and Duration */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 rounded-2xl p-8 md:p-12 border border-amber-500/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Miss These Unique Experiences
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              These are the hidden gems and cultural celebrations that make Kashmir truly special.
              Plan your visit around these events to experience the authentic soul of Kashmir that most tourists never discover.
            </p>
            <button className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Contact Us for Event Tours
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
