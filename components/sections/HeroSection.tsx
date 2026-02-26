import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full border border-white/10 translate-x-1/2" />
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full border border-white/5" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full border border-white/10 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge
              variant="outline"
              className="border-white/30 text-white bg-white/10 px-3 py-1 text-xs font-medium"
            >
              🏆 Live Leagues
            </Badge>
            <Badge
              variant="outline"
              className="border-white/30 text-white bg-white/10 px-3 py-1 text-xs font-medium"
            >
              📊 Performance Analytics
            </Badge>
            <Badge
              variant="outline"
              className="border-white/30 text-white bg-white/10 px-3 py-1 text-xs font-medium"
            >
              🌍 Pan-African
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            Africa&apos;s Sports
            <br />
            <span className="text-white/80">Community.</span>
            <br />
            Reimagined.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            One platform for athletes, institutions, fans, and service
            providers across Africa. Build your legacy, manage your game, and
            connect with the continent&apos;s sports ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-bold text-base px-8 py-6 h-auto"
            >
              Join Jasiri Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold text-base px-8 py-6 h-auto"
              asChild
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          {/* Stat Highlight */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-5xl sm:text-6xl font-black tracking-tighter text-white/90">
              10K+
            </p>
            <p className="text-white/50 text-sm font-medium tracking-widest uppercase mt-1">
              Athletes Connected Across Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
