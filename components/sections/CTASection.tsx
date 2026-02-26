import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <p className="text-[20vw] font-black text-white/[0.03] tracking-tighter whitespace-nowrap leading-none">
          JASIRI
        </p>
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">
          Get Started Today
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Join Africa&apos;s Biggest Sports Community?
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
          Join thousands of athletes, institutions, and sports professionals
          already building Africa&apos;s sports future on Jasiri.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-bold text-base px-8 py-6 h-auto"
          >
            Create Free Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black font-bold text-base px-8 py-6 h-auto"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
