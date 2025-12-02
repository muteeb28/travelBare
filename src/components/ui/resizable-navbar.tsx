"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";
import Image from "next/image";

export const Navbar = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto h-16 max-w-7xl border border-transparent bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md px-4 py-2 shadow-lg md:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const NavBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("mx-auto hidden md:flex h-full max-w-7xl items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
}: {
  items: Array<{ name: string; link: string; icon?: React.JSX.Element }>;
  className?: string;
}) => {
  return (
    <div className={cn("hidden items-center justify-center space-x-6 md:flex", className)}>
      {items.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 text-white font-medium hover:text-gray-200 transition-colors drop-shadow-md"
          )}
        >
          <span className="block text-base">{navItem.name}</span>
        </a>
      ))}
    </div>
  );
};

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <a
      href="/"
      className={cn("relative z-20 flex items-center space-x-2 py-1 text-lg font-bold text-white drop-shadow-lg", className)}
    >
      <div className="relative h-12 w-12">
        <Image
          src="/logo/logo.png"
          alt="TravelBare logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>
      <span className="font-bold text-white">TravelBare</span>
    </a>
  );
};

export const NavbarButton = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "relative rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 drop-shadow-lg",
        variant === "primary" && "bg-amber-600 text-white hover:bg-amber-700",
        variant === "secondary" && "border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const MobileNav = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("block md:hidden", className)}>{children}</div>;
};

export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex items-center justify-between", className)}>{children}</div>;
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 h-10 w-10 rounded-md border border-transparent text-black hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Menu className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-16 border-t border-neutral-200 bg-white px-4 py-6 dark:border-neutral-800 dark:bg-black"
        >
          <div className="flex flex-col space-y-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
