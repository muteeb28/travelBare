"use client";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { svgPlaceholder } from "@/lib/svgPlaceholder";

const vlogs = [
  {
    id: 1,
    title: "Kashmir Valley Tour - Complete Travel Guide",
    thumbnail: svgPlaceholder("Kashmir Valley Tour"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "125K",
    duration: "15:30",
    date: "March 15, 2025",
    description: "Join us on an incredible journey through Kashmir Valley. Exploring Dal Lake, Gulmarg, and Pahalgam."
  },
  {
    id: 2,
    title: "Gulmarg Gondola Ride - Highest Cable Car in Asia",
    thumbnail: svgPlaceholder("Gulmarg Gondola"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "98K",
    duration: "12:45",
    date: "March 12, 2025",
    description: "Experience the breathtaking Gulmarg Gondola ride and stunning mountain views."
  },
  {
    id: 3,
    title: "Kashmir Street Food Tour - Must Try Dishes",
    thumbnail: svgPlaceholder("Street Food Tour"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "156K",
    duration: "18:20",
    date: "March 10, 2025",
    description: "Exploring the best street food in Kashmir - from Wazwan to Kahwa tea."
  },
  {
    id: 4,
    title: "Skiing in Gulmarg - Adventure Vlog",
    thumbnail: svgPlaceholder("Skiing Gulmarg"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "87K",
    duration: "14:10",
    date: "March 8, 2025",
    description: "Experience world-class skiing in Gulmarg with stunning Himalayan views."
  },
  {
    id: 5,
    title: "Dal Lake Houseboat Stay Experience",
    thumbnail: svgPlaceholder("Houseboat Stay"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "203K",
    duration: "20:15",
    date: "March 5, 2025",
    description: "24 hours in a luxury houseboat on Dal Lake. A unique Kashmir experience."
  },
  {
    id: 6,
    title: "Srinagar City Tour - Complete Guide",
    thumbnail: svgPlaceholder("Srinagar Tour"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "176K",
    duration: "22:30",
    date: "March 3, 2025",
    description: "Exploring Srinagar - Mughal Gardens, markets, and local culture."
  }
];

export default function VlogsPage() {
  const words = [
    {
      text: "Watch",
    },
    {
      text: "Kashmir",
      className: "text-amber-600 dark:text-amber-500",
    },
    {
      text: "come",
    },
    {
      text: "alive",
      className: "text-amber-600 dark:text-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TravelNavbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-4">
            Travel vlogs, destination guides, and Kashmir adventures on video
          </p>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* Vlogs Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Vlogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog, index) => (
            <motion.div
              key={vlog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {vlog.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <span>{vlog.views} views</span>
                    <span>•</span>
                    <span>{vlog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {vlog.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
                    {vlog.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 rounded-2xl p-8 md:p-12 border border-amber-500/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to our YouTube Channel
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Get notified about new Kashmir travel vlogs and destination guides
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
