import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "50+", label: "Sports Supported" },
  { value: "10,000+", label: "Athletes" },
  { value: "500+", label: "Institutions" },
  { value: "20+", label: "African Countries" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              <div className="flex-1 text-center md:text-left">
                <p className="text-4xl font-black text-black tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden md:block h-12 bg-black/10 mx-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
