const testimonials = [
  {
    quote:
      "Jasiri transformed how I manage my gym. Membership tracking, attendance, payments — all in one place. My client retention improved by 40% in just three months.",
    name: "Amara Diallo",
    role: "Gym Owner",
    institution: "Kinshasa Fitness Centre",
    stars: 5,
  },
  {
    quote:
      "As a semi-professional football player, Jasiri helped me get noticed. My stats were visible to three clubs across the continent. I signed my first professional contract through a connection I made on the platform.",
    name: "Kwame Asante",
    role: "Professional Footballer",
    institution: "FC Accra United",
    stars: 5,
  },
  {
    quote:
      "The analytics on Jasiri are incredible. I can track my athletes' performance across sessions, monitor recovery, and show parents tangible progress. It's elevated my coaching practice entirely.",
    name: "Fatima Osei",
    role: "Performance Coach",
    institution: "Lagos Athletic Academy",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Trusted by Africa&apos;s
            <br />
            Sports Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-black/10 p-8 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="text-black text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-black/80 text-sm leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-black/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role} · {testimonial.institution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
