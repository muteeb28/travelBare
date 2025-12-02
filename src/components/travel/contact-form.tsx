"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone").regex(/^[0-9+().\s-]+$/, "Enter a valid phone"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof typeof formData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof formData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = encodeURIComponent(
      `New contact request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/916006031751?text=${text}`, "_blank", "noopener,noreferrer");
    setSuccess("Submitted! Our expert will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrors((prev) => ({ ...prev, [e.target.id]: undefined }));
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-6 md:p-8 dark:bg-neutral-950">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Get in Touch</h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <form className="my-6" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" type="text" value={formData.name} onChange={handleChange} required />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="john@example.com" type="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" type="tel" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help you..."
            rows={4}
            className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500 resize-none"
            required
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-amber-600 to-amber-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-amber-700 hover:to-amber-800 transition-all"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>

        {success && (
          <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
            {success}
          </div>
        )}
      </form>

      <div className="mt-6 space-y-3 border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
            <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Email</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">travelbareofficial@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
            <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Phone</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">+91 6006031751</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
            <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Location</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Srinagar, Kashmir</p>
          </div>
        </div>
      </div>
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
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
