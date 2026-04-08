"use client";

import { LucideIcon } from "lucide-react";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  questionCount: number;
  difficulty: Difficulty;
  href?: string;
}

const difficultyColors: Record<Difficulty, string> = {
  Beginner: "bg-emerald-50 text-emerald-600",
  Intermediate: "bg-amber-50 text-amber-600",
  Advanced: "bg-rose-50 text-rose-600",
};

export function TopicCard({
  icon: Icon,
  title,
  questionCount,
  difficulty,
}: TopicCardProps) {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Coming soon badge */}
      <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
        Coming soon
      </span>

      {/* Icon */}
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Meta row */}
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          {questionCount} Questions
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>
    </div>
  );
}
