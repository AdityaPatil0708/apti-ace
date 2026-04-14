"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TopicCard } from "../components/ui/TopicCard";
import {
  Percent,
  TrendingUp,
  Clock,
  Hash,
  BarChart3,
  Banknote,
  Ratio,
  Dices,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

const topics: {
  icon: typeof Percent;
  title: string;
  questionCount: number;
  difficulty: Difficulty;
}[] = [
  {
    icon: Percent,
    title: "Percentages",
    questionCount: 30,
    difficulty: "Beginner",
  },
  {
    icon: TrendingUp,
    title: "Profit & Loss",
    questionCount: 28,
    difficulty: "Beginner",
  },
  {
    icon: Clock,
    title: "Time & Work",
    questionCount: 25,
    difficulty: "Intermediate",
  },
  {
    icon: Hash,
    title: "Number Series",
    questionCount: 35,
    difficulty: "Intermediate",
  },
  {
    icon: BarChart3,
    title: "Averages",
    questionCount: 20,
    difficulty: "Beginner",
  },
  {
    icon: Banknote,
    title: "Simple & Compound Interest",
    questionCount: 22,
    difficulty: "Intermediate",
  },
  {
    icon: Ratio,
    title: "Ratio & Proportion",
    questionCount: 18,
    difficulty: "Beginner",
  },
  {
    icon: Dices,
    title: "Probability",
    questionCount: 24,
    difficulty: "Advanced",
  },
];

const filters: ("All" | Difficulty)[] = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function Aptitude() {
  const [active, setActive] = useState<"All" | Difficulty>("All");

  const filtered =
    active === "All" ? topics : topics.filter((t) => t.difficulty === active);

  return (
    <div>
      <main>
        {/* ─── Hero ─── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
              <img src="./star.png" alt="" className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-primary text-xs md:text-sm">
                Quantitative Aptitude
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold text-zinc-800">
              Aptitude{" "}
              <span className="text-primary">Practice</span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
              Sharpen your quantitative skills with topic-wise practice sets
              covering percentages, profit & loss, time & work, and more —
              modelled after real placement exams.
            </p>
          </div>
        </section>

        {/* ─── Filter Bar + Topic Grid ─── */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    active === f
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((topic) => (
                <TopicCard key={topic.title} {...topic} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-400 mt-12 text-sm">
                No topics match this filter yet.
              </p>
            )}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-gray-100 rounded-md py-14">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800">
              Want the <span className="text-primary">full experience?</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md">
              Sign up free to access timed mock tests, detailed analytics, and
              solution walkthroughs for every question.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              Start Practicing Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}