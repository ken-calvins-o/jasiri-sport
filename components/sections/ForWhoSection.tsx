import { Users, Building2, Award, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    icon: Users,
    title: "Fans & Players",
    description:
      "Join leagues, discover events, and build your sports community. Free access for every individual who loves sport.",
  },
  {
    icon: Building2,
    title: "Institutions",
    description:
      "Gyms, clubs, and courts with powerful tools to manage memberships, schedule bookings, and grow your community.",
  },
  {
    icon: Award,
    title: "Athletes",
    description:
      "From grassroots to pro — showcase your career, access performance data, and connect with clubs and scouts.",
  },
  {
    icon: Briefcase,
    title: "Service Providers",
    description:
      "Coaches, trainers, and experts with a digital home. Advertise services, manage clients, and measure impact.",
  },
];

export default function ForWhoSection() {
  return (
    <section id="for-who" className="bg-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
            Who It&apos;s For
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Built for Everyone in the Game
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="group bg-white border border-black/10 p-8 hover:bg-black hover:border-black transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-sm text-black/60 group-hover:text-white/70 leading-relaxed mb-6 transition-colors duration-300">
                  {audience.description}
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-sm font-semibold text-black group-hover:text-white transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
