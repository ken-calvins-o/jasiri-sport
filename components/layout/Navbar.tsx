"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "For Athletes", href: "#for-who" },
  { label: "For Institutions", href: "#for-who" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter text-black leading-none">
              JASIRI
            </span>
            <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase leading-none">
              Sports Community
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-black hover:text-white font-semibold"
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-white hover:text-black border border-black font-semibold"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <div className="flex flex-col h-full pt-8">
                <Link href="/" className="flex flex-col mb-8">
                  <span className="font-black text-2xl tracking-tighter text-black leading-none">
                    JASIRI
                  </span>
                  <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase leading-none">
                    Sports Community
                  </span>
                </Link>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-gray-700 hover:text-black py-3 px-2 border-b border-gray-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white font-semibold w-full"
                  >
                    Log In
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
