import {
  Trophy,
  Building2,
  User,
  BarChart3,
  ShoppingBag,
  Archive,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Community Leagues",
    description:
      "Create public or private leagues with fixtures, score tracking, and dynamic leaderboards. Compete with friends or challenge clubs across Africa.",
    dark: true,
  },
  {
    icon: Building2,
    title: "Institutional Tools",
    description:
      "Manage memberships, bookings, attendance, and payments from one powerful dashboard built for gyms, clubs, stadiums, and courts.",
    dark: false,
  },
  {
    icon: User,
    title: "Athlete Profiles",
    description:
      "Showcase your career, stats, and achievements. Connect directly with clubs, institutions, and scouts looking for talent.",
    dark: true,
  },
  {
    icon: BarChart3,
    title: "Sports Analytics",
    description:
      "Premium data insights for performance tracking, recovery metrics, and benchmarking. Turn raw stats into actionable growth reports.",
    dark: false,
  },
  {
    icon: ShoppingBag,
    title: "Service Marketplace",
    description:
      "Find certified coaches, physiotherapists, nutritionists, and sports agents. Get matched with the right experts for your goals.",
    dark: false,
  },
  {
    icon: Archive,
    title: "Tournament Archive",
    description:
      "Preserve your club's complete history — tournament records, results, highlights, and milestones stored permanently.",
    dark: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
            Platform Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Everything You Need to
            <br />
            Compete, Connect &amp; Grow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group p-8 transition-all duration-300 cursor-default ${
                  feature.dark
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                    feature.dark
                      ? "bg-white/10 group-hover:bg-black/10"
                      : "bg-black/5 group-hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p
                  className={`text-sm leading-relaxed transition-all duration-300 ${
                    feature.dark
                      ? "text-white/70 group-hover:text-black/70"
                      : "text-black/60 group-hover:text-white/70"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
