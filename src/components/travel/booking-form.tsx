"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "Kashmir",
    travelDate: "",
    numberOfTravelers: "1",
    packageType: "",
    specialRequests: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "Booking Request (TravelBare)",
      `Name: ${formData.firstName} ${formData.lastName}`.trim(),
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Destination: ${formData.destination}`,
      `Travel Date: ${formData.travelDate}`,
      `Travelers: ${formData.numberOfTravelers}`,
      `Package Type: ${formData.packageType || "N/A"}`,
      `Special Requests: ${formData.specialRequests || "N/A"}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappNumber = "916006031751";
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat with prefilled message
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setSuccessMessage("Your message has been submitted. Our expert will contact you shortly.");
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 dark:bg-neutral-950">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
        Book Your Kashmir Journey
      </h2>
      <p className="mt-2 max-w-lg text-sm text-neutral-600 dark:text-neutral-300">
        Fill in your details and we'll get back to you with the best package options
      </p>

      {submitted ? (
        <div className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-6 text-center text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Request Submitted</h3>
          <p className="mt-2 text-sm">{successMessage}</p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSuccessMessage("");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                destination: "Kashmir",
                travelDate: "",
                numberOfTravelers: "1",
                packageType: "",
                specialRequests: "",
              });
            }}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="my-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-1 pb-20" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              placeholder="John"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Email and Phone */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Destination and Date */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="destination">Destination</Label>
            <select
              id="destination"
              value={formData.destination}
              onChange={handleChange}
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
              required
            >
              <option value="Kashmir">Kashmir</option>
              <option value="Mecca">Mecca (Umrah)</option>
              <option value="Kashmir + Umrah">Kashmir + Umrah Combo</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="travelDate">Travel Date</Label>
            <Input
              id="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Number of Travelers and Package Type */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="numberOfTravelers">Number of Travelers</Label>
            <select
              id="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={handleChange}
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Person" : "People"}
                </option>
              ))}
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="packageType">Package Type</Label>
            <select
              id="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
              required
            >
              <option value="">Select Package</option>
              <option value="budget">Budget Package</option>
              <option value="standard">Standard Package</option>
              <option value="luxury">Luxury Package</option>
              <option value="custom">Custom Package</option>
            </select>
          </LabelInputContainer>
        </div>

        {/* Special Requests */}
        <LabelInputContainer className="mb-6">
          <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
          <textarea
            id="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special requirements or preferences..."
            rows={3}
            className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500 resize-none"
          />
        </LabelInputContainer>

        <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-neutral-950 pb-2">
          <button
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-amber-600 to-amber-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-amber-700 hover:to-amber-800 transition-all"
            type="submit"
          >
            Submit Booking Request →
            <BottomGradient />
          </button>
        </div>
      </form>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
