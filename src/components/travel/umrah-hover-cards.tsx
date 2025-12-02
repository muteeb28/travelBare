import { HoverEffect } from "@/components/ui/card-hover-effect";

export function UmrahHoverCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={umrahPackages} />
    </div>
  );
}

export const umrahPackages = [
  {
    title: "15 Days Package",
    description:
      "Budget spiritual journey with complete Umrah experience. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
  {
    title: "17 Days Package",
    description:
      "Extended budget journey with additional days for spiritual reflection. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
  {
    title: "19 Days Package",
    description:
      "Complete spiritual journey with comprehensive services. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
  {
    title: "20 Days Package",
    description:
      "Our most popular extended spiritual experience with premium services. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
  {
    title: "28 Days Package",
    description:
      "Comprehensive pilgrimage with extended stay for deep spiritual connection. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
  {
    title: "30 Days Package",
    description:
      "Ultimate spiritual journey with maximum time for worship and reflection. Includes Ziyarat, laundry, meals, Maulim, air ticket, visa, Zam Zam, kit bags, accommodation, and transportation.",
    link: "#contact",
  },
];
