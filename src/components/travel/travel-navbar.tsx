"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { BookingForm } from "@/components/travel/booking-form";
import { ContactForm } from "@/components/travel/contact-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { svgPlaceholder } from "@/lib/svgPlaceholder";

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const HotelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const MapIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
      <path d="M9 4v13" />
      <path d="M15 7v13" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const GuideIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  );
};

const BusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
      <path d="M16 5l1.5 7l4.5 0" />
      <path d="M2 10l15 0" />
    </svg>
  );
};

function BookingModalContent() {
  const [showForm, setShowForm] = useState<"none" | "booking" | "contact">("none");
  const { setOpen } = useModal();

  if (showForm === "booking") {
    return <BookingForm />;
  }

  if (showForm === "contact") {
    return <ContactForm />;
  }

  return (
    <>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          Book your trip to{" "}
          <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
            Kashmir
          </span>{" "}
          now!
        </h4>
        <div className="flex justify-center items-center">
          {[
            svgPlaceholder("Kashmir Lakes"),
            svgPlaceholder("Mountain Views"),
            svgPlaceholder("Snowy Peaks"),
            svgPlaceholder("Houseboat Stays"),
            svgPlaceholder("Pine Forests"),
          ].map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <img
                src={image}
                alt="travel images"
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
          <div className="flex items-center justify-center">
            <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Flights & Hotel Accommodations
            </span>
          </div>
          <div className="flex items-center justify-center">
            <BusIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Complete Transportation
            </span>
          </div>
          <div className="flex items-center justify-center">
            <GuideIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Expert Tour Guides
            </span>
          </div>
          <div className="flex items-center justify-center">
            <MapIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Curated & Customised Packages
            </span>
          </div>
          <div className="flex items-center justify-center">
            <HotelIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              5-Star Luxury Options Available
            </span>
          </div>
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        <button
          onClick={() => setShowForm("contact")}
          className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors"
        >
          Contact Us
        </button>
        <button
          onClick={() => setShowForm("booking")}
          className="bg-amber-600 text-white dark:bg-amber-600 dark:text-white text-sm px-2 py-1 rounded-md border border-amber-600 w-28 hover:bg-amber-700 transition-colors"
        >
          Book Now
        </button>
      </ModalFooter>
    </>
  );
}

export function TravelNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Packages",
      link: "/packages",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Umrah Packages",
      link: "/umrah-packages",
    },
    {
      name: "Flights",
      link: "/flights",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Modal>
              <ModalTrigger className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm relative rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 drop-shadow-lg">
                Contact
              </ModalTrigger>
              <ModalBody>
                <ContactForm />
              </ModalBody>
            </Modal>
            <Modal>
              <ModalTrigger className="bg-amber-600 text-white hover:bg-amber-700 relative rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 drop-shadow-lg">
                Book Now
              </ModalTrigger>
              <ModalBody>
                <BookingModalContent />
              </ModalBody>
            </Modal>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Modal>
                <ModalTrigger className="border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 relative rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 drop-shadow-lg w-full">
                  Contact
                </ModalTrigger>
                <ModalBody>
                  <ContactForm />
                </ModalBody>
              </Modal>
              <Modal>
                <ModalTrigger className="bg-amber-600 text-white hover:bg-amber-700 relative rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 drop-shadow-lg w-full">
                  Book Now
                </ModalTrigger>
                <ModalBody>
                  <BookingModalContent />
                </ModalBody>
              </Modal>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

