"use client";
import React from "react";
import { Plane, Calendar, Users, MapPin, ArrowRight, Check } from "lucide-react";

export function FlightBookingPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Flight</h2>
              <p className="text-sm text-gray-600">Find the best deals across India</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold">
              Round Trip
            </div>
            <div className="px-4 py-2 bg-white text-gray-600 rounded-lg text-sm">
              One Way
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* From */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                From
              </label>
              <div className="p-4 border-2 border-amber-200 rounded-lg bg-amber-50">
                <div className="text-2xl font-bold text-gray-900">SXR</div>
                <div className="text-sm text-gray-600">Srinagar, India</div>
              </div>
            </div>

            {/* To */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700" />
                To
              </label>
              <div className="p-4 border-2 border-amber-300 rounded-lg bg-amber-100">
                <div className="text-2xl font-bold text-gray-900">BOM</div>
                <div className="text-sm text-gray-600">Mumbai, India</div>
              </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600" />
                Departure
              </label>
              <div className="p-4 border-2 border-amber-200 rounded-lg bg-amber-50">
                <div className="text-lg font-bold text-gray-900">Jan 20</div>
                <div className="text-sm text-gray-600">2026</div>
              </div>
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-700" />
                Passengers
              </label>
              <div className="p-4 border-2 border-amber-300 rounded-lg bg-amber-100">
                <div className="text-lg font-bold text-gray-900">2 Adults</div>
                <div className="text-sm text-gray-600">Economy</div>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg flex items-center justify-center gap-3">
            Search Flights
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Best Prices</div>
              <div className="text-xs text-gray-600">Guaranteed</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Instant Booking</div>
              <div className="text-xs text-gray-600">Quick & Easy</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">24/7 Support</div>
              <div className="text-xs text-gray-600">Always Here</div>
            </div>
          </div>
        </div>

        {/* Sample Results Preview */}
        <div className="mt-6 space-y-3">
          <div className="bg-white/80 rounded-xl p-4 border-2 border-amber-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">IndiGo</div>
                  <div className="text-sm text-gray-600">Direct Flight • 2h 45m</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-600">₹6,850</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Air India</div>
                  <div className="text-sm text-gray-600">1 Stop • 4h 15m</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-600">₹5,420</div>
                <div className="text-sm text-gray-600">per person</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
