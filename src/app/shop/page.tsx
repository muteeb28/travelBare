"use client";
import { TravelNavbar } from "@/components/travel/travel-navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { ProductInquiryForm } from "@/components/travel/product-inquiry-form";

const products = [
  {
    id: 1,
    name: "Embroidered Pashmina Shawl",
    category: "Embroidered Pashminas",
    price: "₹12,500",
    image: "/shop/Kashmiri shawl.jpg",
    description: "Handwoven pure Pashmina with intricate embroidery",
  },
  {
    id: 2,
    name: "Premium Woolen Jacket",
    category: "Woolen Jackets",
    price: "₹5,800",
    image: "/shop/woolen jacket.webp",
    description: "Traditional Kashmiri woolen jacket with fine craftsmanship",
  },
  {
    id: 3,
    name: "Woolen Co-ord Set",
    category: "Woolen Co-ord Sets",
    price: "₹7,200",
    image: "/shop/cordset.webp",
    description: "Stylish and warm woolen coordinated outfit",
  },
  {
    id: 4,
    name: "Traditional Kashmiri Phiran",
    category: "Women Clothing - Phirans",
    price: "₹4,500",
    image: "/shop/kashmrir phiran.webp",
    description: "Authentic women's Phiran with beautiful patterns",
  },
  {
    id: 5,
    name: "Koshur Premium Dry Fruits Mix",
    category: "Koshur Dry Fruits",
    price: "₹2,200",
    image: "/shop/dryfruit.webp",
    description: "Finest selection of Kashmir almonds, walnuts and apricots",
  },
  {
    id: 6,
    name: "Koshur Kashmiri Saffron (5g)",
    category: "Koshur Kashmiri Saffron",
    price: "₹1,800",
    image: "/shop/kashmiri safron.webp",
    description: "Premium grade Kashmiri Kesar - World's finest saffron",
  },
  {
    id: 7,
    name: "Koshur Pure Kashmiri Honey",
    category: "Koshur Kashmiri Honey",
    price: "₹850",
    image: "/shop/kashmiri honey.webp",
    description: "Raw organic honey from Kashmir valley flowers",
  },
  {
    id: 8,
    name: "Koshur Kahwa Tea Collection",
    category: "Koshur Exotic Foods, Teas & Kehwas",
    price: "₹650",
    image: "/shop/1_30.webp",
    description: "Traditional Kashmiri Kahwa with exotic spices",
  },
  {
    id: 9,
    name: "Silk Woolen Rug",
    category: "Silk Woolen Rugs & Wall Hanging",
    price: "₹35,000",
    image: "/shop/woolen rugs.webp",
    description: "Hand-knotted silk and wool blend carpet",
  },
  {
    id: 10,
    name: "Copper Samovar Set",
    category: "Copperware",
    price: "₹8,500",
    image: "/shop/copper samovar.webp",
    description: "Traditional copper tea kettle with cups",
  },
  {
    id: 11,
    name: "Paper Mache Decorative Box",
    category: "Paper Mache Art",
    price: "₹2,400",
    image: "/shop/paper mache box.webp",
    description: "Hand-painted Paper Mache jewelry box",
  },
  {
    id: 12,
    name: "Embroidered Pashmina Stole",
    category: "Embroidered Pashminas",
    price: "₹9,800",
    image: "/shop/Kashmiri shawl.jpg",
    description: "Elegant Pashmina stole with traditional embroidery",
  },
];

const categories = [
  "All",
  "Embroidered Pashminas",
  "Woolen Jackets",
  "Woolen Co-ord Sets",
  "Women Clothing - Phirans",
  "Koshur Dry Fruits",
  "Koshur Kashmiri Saffron",
  "Koshur Kashmiri Honey",
  "Koshur Exotic Foods, Teas & Kehwas",
  "Silk Woolen Rugs & Wall Hanging",
  "Copperware",
  "Paper Mache Art",
];

export default function ShopPage() {
  const words = [
    {
      text: "Shop",
    },
    {
      text: "authentic",
    },
    {
      text: "Kashmir",
      className: "text-amber-600 dark:text-amber-500",
    },
    {
      text: "products",
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
            Discover handcrafted treasures from the valley of Kashmir
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
              className="px-6 py-2 rounded-full border-2 border-neutral-300 dark:border-neutral-700 hover:border-amber-600 hover:text-amber-600 transition-colors font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Starting from</p>
                      <span className="text-2xl font-bold text-amber-600">
                        {product.price}
                      </span>
                    </div>
                    <Modal>
                      <ModalTrigger className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold">
                        View Details
                      </ModalTrigger>
                      <ModalBody>
                        <ProductInquiryForm
                          productName={product.name}
                          productPrice={product.price}
                          productImage={product.image}
                        />
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Shop With Us */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Shop With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">100% Authentic</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              All products are genuine Kashmir handicrafts and goods
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Free delivery on orders above ₹1,000
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              7-day hassle-free return policy
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
