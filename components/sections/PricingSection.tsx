import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For sports fans and everyday participants",
    features: [
      "Personal sports profile",
      "Community & league participation",
      "Event discovery",
      "Social connections",
      "Basic match results",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "AthletIQ",
    price: "$9",
    period: "per month",
    description: "For serious and professional athletes",
    features: [
      "Everything in Free",
      "Performance analytics dashboard",
      "Club connections & scouting",
      "Athlete profile priority listing",
      "Training & recovery metrics",
      "Career milestone tracking",
    ],
    cta: "Start AthletIQ",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Imara",
    price: "$49",
    period: "per month",
    description: "For institutions and service providers",
    features: [
      "Everything in AthletIQ",
      "Client management tools",
      "Booking & scheduling system",
      "Custom analytics reports",
      "Promotional boosts",
      "Attendance tracking",
      "Payment processing",
    ],
    cta: "Start Imara",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, no contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 border-2 flex flex-col ${
                plan.highlighted
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/10 hover:border-black transition-colors"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white border-0 px-4 py-1">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.highlighted ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-white" : "text-black"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-bold py-6 h-auto ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-black/80 border border-black"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
