"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    { id: "packages", label: "Packages", icon: "📦" },
    { id: "hotels", label: "Hotels", icon: "🏨" },
    { id: "visa", label: "Visa", icon: "📄" },
    { id: "transport", label: "Transport", icon: "🚐" },
];

const routes = [
    { value: "", label: "Select Route" },
    { value: "kashmir", label: "Kashmir Tour" },
    { value: "umrah", label: "Umrah Package" },
    { value: "custom", label: "Custom Package" },
];

const vehicles = [
    { value: "", label: "Select Vehicle" },
    { value: "sedan", label: "Sedan (4 Seater)" },
    { value: "suv", label: "SUV (6 Seater)" },
    { value: "tempo", label: "Tempo Traveller (12 Seater)" },
    { value: "bus", label: "Mini Bus (20+ Seater)" },
];

export function LandingHero() {
    const [activeService, setActiveService] = useState("packages");
    const [formData, setFormData] = useState({
        route: "",
        vehicle: "",
        passengers: 1,
    });

    const handleSearch = () => {
        if (formData.route === "kashmir") {
            window.location.href = "/packages#kashmir-packages";
        } else if (formData.route === "umrah") {
            window.location.href = "/umrah-packages";
        } else {
            window.location.href = "/packages";
        }
    };

    return (
        <div className="relative min-h-[90vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-teal-900/30 to-transparent" />
                {/* Mosque silhouette SVG */}
                <svg
                    className="absolute bottom-0 left-0 right-0 w-full h-64 text-teal-900/40"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,320 L0,280 C20,280 30,200 50,200 C70,200 70,240 90,240 L90,320 Z M100,320 L100,260 C120,260 130,180 150,180 C170,180 180,260 200,260 L200,320 Z M720,320 L720,120 C740,120 750,60 780,60 C810,60 820,120 840,120 L840,320 Z M1200,320 L1200,280 C1220,280 1230,200 1250,200 C1270,200 1280,280 1300,280 L1300,320 Z M1350,320 L1350,240 C1370,240 1380,160 1400,160 C1420,160 1430,240 1440,240 L1440,320 Z"
                    />
                </svg>
                {/* Decorative stars */}
                <div className="absolute top-20 left-[10%] w-1 h-1 bg-amber-300 rounded-full animate-pulse" />
                <div className="absolute top-32 left-[25%] w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse delay-300" />
                <div className="absolute top-16 right-[20%] w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-500" />
                <div className="absolute top-40 right-[35%] w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
                {/* Service Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeService === service.id
                                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                                    : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"
                                }`}
                        >
                            <span>{service.icon}</span>
                            <span className="hidden sm:inline">{service.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Booking Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <label className="text-white/70 text-sm font-medium">Route</label>
                            <select
                                value={formData.route}
                                onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                {routes.map((route) => (
                                    <option key={route.value} value={route.value} className="bg-slate-800">
                                        {route.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-white/70 text-sm font-medium">Vehicle</label>
                            <select
                                value={formData.vehicle}
                                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                {vehicles.map((vehicle) => (
                                    <option key={vehicle.value} value={vehicle.value} className="bg-slate-800">
                                        {vehicle.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-white/70 text-sm font-medium">Passengers</label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={formData.passengers}
                                onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                                className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <div className="flex items-end">
                            <button
                                onClick={handleSearch}
                                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-600/30"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16 max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Customize your{" "}
                        <span className="text-amber-500">Umrah Package 2026</span>
                    </h1>
                    <p className="text-lg text-white/70 mb-8 leading-relaxed">
                        We are home to the DIY (Do-It-Yourself) Umrah Package. Every pilgrim is unique,
                        we believe in delivering a tailor-made experience for everyone! Choose the hotels,
                        transportation, attractions, and travel dates that work for YOU and let TravelBare
                        take care of the rest.
                    </p>

                    <div className="space-y-4">
                        <p className="text-white/60 text-sm">
                            Not sure where to go? We got you covered...
                        </p>
                        <Link href="/packages">
                            <button className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold rounded-full transition-all duration-300">
                                SHOW ME OPTIONS
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
                >
                    {[
                        { value: "4+", label: "Years Experience" },
                        { value: "500+", label: "Happy Travelers" },
                        { value: "50+", label: "Tour Packages" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-3xl font-bold text-amber-500">{stat.value}</div>
                            <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
