import { ClipboardList, BrainCircuit, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Create Your Free Account",
    description:
      "Sign up in seconds — no credit card required. Set your target companies and choose your practice areas to personalise your experience.",
  },
  {
    step: "02",
    icon: BrainCircuit,
    title: "Practice & Take Mock Tests",
    description:
      "Work through 200+ curated aptitude and reasoning questions. Take timed mock tests that mirror real placement exams and get instant solution walkthroughs.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Track Progress & Crack Placements",
    description:
      "Review your detailed analytics after every session. Identify weak areas, improve your score, and walk into your placement test with total confidence.",
  },
];

export function Hero4() {
  return (
    <section className="bg-gray-100 py-15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 flex flex-col gap-2">
          <p className="text-primary tracking-wide text-[15px] font-medium uppercase">
            How It Works
          </p>
          <p className="text-[40px] font-semibold text-zinc-800 leading-tight">
            Get placement-ready in{" "}
            <span className="text-primary">3 simple steps</span>
          </p>
          <p className="text-gray-500">
            From sign-up to success — here's how students use our platform to
            land their dream jobs.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%-12px)] right-[calc(16.66%-12px)] h-px border-t-2 border-dashed border-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-4"
                >
                  {/* Icon circle */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-semibold text-zinc-800">
                      {step.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button className="hover:cursor-pointer hover:bg-primary-hover bg-primary text-white px-6 py-2.5 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors">
            Start for Free — It only takes 30 seconds
          </button>
        </div>
      </div>
    </section>
  );
}