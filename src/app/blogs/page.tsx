"use client";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useState } from "react";
import { motion } from "framer-motion";
import { svgPlaceholder } from "@/lib/svgPlaceholder";

const blogPosts = [
  {
    slug: "top-offbeat-locations-kashmir-2025",
    title: "Top Offbeat Locations in Kashmir (2025 Guide)",
    excerpt: "Hidden valleys, secret meadows, and untouched villages for a real “Heaven on Earth” experience with TravelBare.",
    image: "/kashmir/pexels-gautham-reghu-1029880-19189030 (1).jpg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Kashmir",
    readTime: "8 min read",
  },
  {
    slug: "top-hike-tours-kashmir-2025",
    title: "Top Hike Tours in Kashmir (2025 Guide)",
    excerpt: "KGL, Tarsar Marsar, Kousarnag, Gangbal, and beginner-friendly trails curated for every trekker.",
    image: "/kashmir/pexels-imshafeek-34848384 (1) (1).jpg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Trekking",
    readTime: "7 min read",
  },
  {
    slug: "top-foods-to-try-in-kashmir-2025",
    title: "Top Foods to Try in Kashmir",
    excerpt: "Wazwan, harissa, kahwa, trout, Yakhni, Rogan Josh—your 2025 Kashmiri food list.",
    image: "/kashmir/pexels-rubaitulazad-12141330 (2) (1).jpg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Food",
    readTime: "6 min read",
  },
  {
    slug: "top-foods-to-try-during-umrah",
    title: "Top Foods to Try During Umrah",
    excerpt: "Mandi, shawarma, mutabbaq, labneh bowls, and more—light, energizing meals for pilgrims.",
    image: "/kashmir/pexels-wanderinglenses-16024592 (2) (1) (1).jpg",
    date: "Jan 2025",
    author: "TravelBare",
    category: "Umrah",
    readTime: "5 min read",
  },
];

const subscribers = [
  {
    id: 1,
    name: "Ahmed Khan",
    designation: "Travel Enthusiast",
    image: svgPlaceholder("Ahmed Khan"),
  },
  {
    id: 2,
    name: "Sarah Ali",
    designation: "Adventure Seeker",
    image: svgPlaceholder("Sarah Ali"),
  },
  {
    id: 3,
    name: "Mohammed Raza",
    designation: "Kashmir Explorer",
    image: svgPlaceholder("Mohammed Raza"),
  },
  {
    id: 4,
    name: "Fatima Noor",
    designation: "Travel Blogger",
    image: svgPlaceholder("Fatima Noor"),
  },
  {
    id: 5,
    name: "Rizwan Sheikh",
    designation: "Mountain Lover",
    image: svgPlaceholder("Rizwan Sheikh"),
  },
  {
    id: 6,
    name: "Zara Ahmed",
    designation: "Nature Photographer",
    image: svgPlaceholder("Zara Ahmed"),
  },
];

export default function BlogsPage() {
  const [email, setEmail] = useState("");

  const words = [
    {
      text: "Discover",
    },
    {
      text: "Kashmir",
      className: "text-amber-600 dark:text-amber-500",
    },
    {
      text: "through",
    },
    {
      text: "our",
    },
    {
      text: "stories",
      className: "text-amber-600 dark:text-amber-500",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <TravelNavbar />

      {/* Hero Section with Typewriter */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-4">
            Travel tips, destination guides, and insider stories from the paradise on earth
          </p>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-amber-500/10 rounded-2xl p-8 md:p-12 border border-amber-500/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Get the latest travel guides, tips, and exclusive Kashmir tour packages delivered to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Animated Tooltip - Subscribers */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-row items-center justify-center mb-3">
                <AnimatedTooltip items={subscribers} />
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Join <span className="font-bold text-amber-600">5,000+</span> travelers already subscribed
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Personal Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = `/blogs/${post.slug}`}
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      By {post.author}
                    </span>
                    <span className="text-amber-600 font-semibold group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
