const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Sign up free and set up your sports identity in minutes. Whether you're a fan, athlete, or institution — Jasiri has a space for you.",
  },
  {
    number: "02",
    title: "Join Your Community",
    description:
      "Connect with clubs, gyms, and leagues near you — or build your own. Invite friends, set up fixtures, and start competing.",
  },
  {
    number: "03",
    title: "Track & Grow",
    description:
      "Use analytics, performance data, and institutional tools to continuously improve. From stats to schedules, Jasiri keeps you levelling up.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-white/10 z-0 translate-x-4" />
              )}
              <div className="relative z-10 p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                <p className="text-7xl font-black text-white/10 mb-6 leading-none tracking-tighter">
                  {step.number}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
