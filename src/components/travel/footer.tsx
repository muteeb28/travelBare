"use client";
import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400">📍</span>
                  <div className="text-gray-300 space-y-1">
                    <p>Srinagar, J&amp;K</p>
                    <p>Ganderbal, J&amp;K</p>
                  </div>
                </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <p className="text-gray-300">+91-6006031751</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <p className="text-gray-300">travelbareofficial@gmail.com</p>
              </div>
              </div>
            </div>

          {/* Popular Links */}
          <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Popular Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/umrah-packages" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Umrah Packages
                </Link>
              </li>
              <li>
              <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                Kashmir Packages
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

          {/* Popular Posts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Popular Posts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/blogs/top-offbeat-locations-kashmir-2025" className="hover:text-orange-400 transition-colors">
                  🌄 Top Offbeat Locations in Kashmir
                </Link>
              </li>
              <li>
                <Link href="/blogs/top-hike-tours-kashmir-2025" className="hover:text-orange-400 transition-colors">
                  🥾 Top Hike Tours in Kashmir
                </Link>
              </li>
              <li>
                <Link href="/blogs/top-foods-to-try-in-kashmir-2025" className="hover:text-orange-400 transition-colors">
                  🍽️ Top Foods to Try in Kashmir
                </Link>
              </li>
              <li>
                <Link href="/blogs/top-foods-to-try-during-umrah" className="hover:text-orange-400 transition-colors">
                  🕋 Top Foods to Try During Umrah
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="https://www.instagram.com/travelbare__"
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex h-6 w-6">
                    <img src="/socials/Instagram_icon.png.webp" alt="Instagram" className="h-6 w-6 object-contain" />
                  </span>
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://wa.me/916006031751"
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex h-6 w-6">
                    <img src="/socials/WhatsApp.svg.webp" alt="WhatsApp" className="h-6 w-6 object-contain" />
                  </span>
                  <span>WhatsApp</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300">
                  <span className="inline-flex h-6 w-6">
                    <img src="/socials/png-transparent-twitter-x-logo.png" alt="X" className="h-6 w-6 object-contain" />
                  </span>
                  <span>X (coming soon)</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300">
                  <span className="inline-flex h-6 w-6">
                    <img src="/socials/Youtube_logo.png" alt="YouTube" className="h-6 w-6 object-contain" />
                  </span>
                  <span>YouTube (coming soon)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 TravelBare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-orange-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
