"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the free plan really free forever?",
    answer:
      "Yes! The Free plan never expires. You get access to 100 aptitude & reasoning questions, 2 mock tests per month, and the community leaderboard — no credit card required.",
  },
  {
    question: "What kinds of questions are on the platform?",
    answer:
      "We cover all major placement test topics: quantitative aptitude, logical reasoning, verbal ability, and data interpretation. Questions are modelled after real tests from top companies like TCS, Infosys, Wipro, Accenture, and more.",
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer:
      "Absolutely. You can cancel your Pro plan at any time from your account settings. You'll continue to have access until the end of your current billing period, after which your account reverts to the Free plan.",
  },
  {
    question: "How is the Campus plan different from Pro?",
    answer:
      "The Campus plan is designed for coaching institutes and colleges. It includes everything in Pro, plus bulk student onboarding, batch management, an admin dashboard with export options, and a dedicated account manager.",
  },
  {
    question: "Do I get solution walkthroughs for every question?",
    answer:
      "Solution walkthroughs are available on the Pro and Campus plans. Each question comes with a step-by-step explanation so you understand the concept, not just the answer.",
  },
  {
    question: "Is this platform suitable for freshers with no prep experience?",
    answer:
      "Definitely. The platform is built specifically for college students preparing for campus placements. Whether you're just starting out or in the final stages of prep, the adaptive practice and analytics will guide you at your own pace.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl px-6 py-4 transition-all duration-200 ${
        open ? "border-primary bg-gray-50" : "border-gray-200 bg-white"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 text-left hover:cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[15px] font-medium text-zinc-800">{question}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-15">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 flex flex-col gap-2">
          <p className="text-primary tracking-wide text-xs md:text-sm font-medium">
            FAQ's
          </p>
          <p className="text-3xl md:text-4xl  font-semibold text-zinc-800 leading-tight">
            Got <span className="text-primary">questions?</span> We've got answers.
          </p>
          <p className="text-gray-500">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-primary font-medium hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  );
}