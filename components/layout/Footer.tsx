import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Community", href: "#" },
    { label: "Analytics", href: "#" },
    { label: "Marketplace", href: "#" },
  ],
  "For Athletes": [
    { label: "Athlete Profiles", href: "#" },
    { label: "Performance Tracking", href: "#" },
    { label: "Club Connections", href: "#" },
    { label: "AthletIQ Plan", href: "#pricing" },
    { label: "Success Stories", href: "#" },
  ],
  "For Institutions": [
    { label: "Gym Management", href: "#" },
    { label: "Booking System", href: "#" },
    { label: "Member Analytics", href: "#" },
    { label: "Imara Plan", href: "#pricing" },
    { label: "Enterprise", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-black text-2xl tracking-tighter text-white leading-none">
                JASIRI
              </span>
              <span className="text-[10px] font-medium text-white/40 tracking-widest uppercase leading-none mt-1">
                Sports Community
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Africa&apos;s one-stop digital ecosystem for sports. Connecting
              athletes, institutions, and communities.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-white"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Jasiri. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">Made with ❤️ for African Sport</p>
        </div>
      </div>
    </footer>
  );
}
