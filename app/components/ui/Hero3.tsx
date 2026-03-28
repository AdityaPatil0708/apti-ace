import { PricingCard } from "./PricingCard";

const plans = [
  {
    title: "Free",
    price: "₹0",
    period: "/ forever",
    subtitle: "No credit card needed",
    description:
      "Perfect for students just starting out. Get access to core practice questions and basic analytics.",
    features: [
      "100 aptitude & reasoning questions",
      "Basic topic-wise practice",
      "Performance summary after each test",
      "Access to 2 mock tests per month",
      "Community leaderboard",
    ],
    btnText: "Get Started Free",
    btnHref: "/signup",
    cardBgColor: "bg-white",
    cardTextColor: "text-gray-900",
    buttonBgColor: "bg-white",
    btnTextColor: "text-primary",
  },
  {
    title: "Pro",
    price: "₹199",
    period: "/ month",
    subtitle: "Most popular",
    description:
      "For serious placement seekers. Unlock unlimited practice, detailed analytics, and timed mock tests.",
    features: [
      "500+ aptitude & reasoning questions",
      "Unlimited timed mock tests",
      "Detailed topic-wise analytics",
      "Personalised weak-area suggestions",
      "Solution walkthroughs for every question",
      "Priority email support",
    ],
    btnText: "Choose Plan",
    btnHref: "/signup?plan=pro",
    cardBgColor: "bg-black",
    cardTextColor: "text-white",
    buttonBgColor: "bg-primary",
    btnTextColor: "text-white",
    checkColor: "text-primary", 
    dotted: true,               
  },
  {
    title: "Campus",
    price: "₹99",
    period: " / month",
    subtitle: "For colleges & institutes",
    description:
      "Built for coaching institutes. Manage batches, assign tests, and track every student.",
    features: [
      "Everything in Pro",
      "Bulk student onboarding",
      "Batch & section management",
      "Admin dashboard with export",
      "Custom branded test links",
      "Dedicated account manager",
    ],
    btnText: "Buy now",
    btnHref: "/contact",
    cardBgColor: "bg-white",
    cardTextColor: "text-gray-900",
    buttonBgColor: "bg-white",
    btnTextColor: "text-primary",
  },
];

export function Hero3() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="text-primary tracking-wide text-xs md:text-sm font-medium">PRICING PLAN</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}