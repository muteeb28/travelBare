"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProductInquiryFormProps {
  productName: string;
  productPrice: string;
  productImage: string;
}

export function ProductInquiryForm({ productName, productPrice, productImage }: ProductInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product inquiry submitted:", {
      product: productName,
      price: productPrice,
      ...formData,
    });
    alert(`Thank you for your interest in ${productName}! Our team will contact you shortly.`);
    setFormData({ name: "", email: "", phone: "", quantity: "1", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 dark:bg-neutral-950">
      {/* Product Preview */}
      <div className="mb-6 flex items-start gap-4 border-b border-border pb-6">
        <img
          src={productImage}
          alt={productName}
          loading="lazy"
          decoding="async"
          className="h-24 w-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            {productName}
          </h3>
          <p className="mt-1 text-2xl font-bold text-amber-600">{productPrice}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
        Product Inquiry
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Fill in your details and we'll get back to you with more information about this product.
      </p>

      <form className="my-6" onSubmit={handleSubmit}>
        {/* Name */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

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

        {/* Quantity */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="quantity">Quantity</Label>
          <select
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Message (Optional)</Label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific requirements or questions..."
            rows={3}
            className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-500 resize-none"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-amber-600 to-amber-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:from-amber-700 hover:to-amber-800 transition-all"
          type="submit"
        >
          Submit Inquiry →
          <BottomGradient />
        </button>
      </form>

      <div className="mt-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 p-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <strong>Note:</strong> Our team will contact you within 24 hours to confirm availability,
          discuss customization options, and arrange delivery.
        </p>
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
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
