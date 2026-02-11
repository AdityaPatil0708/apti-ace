import { BookOpen, BarChart3, Trophy, Users } from "lucide-react";
import { Card } from "./Card";

const features = [
  {
    icon: BookOpen,
    title: "1000+ Practice Questions",
    description: "Curated aptitude and reasoning questions covering all major topics.",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Detailed analytics to identify strengths and improve weak areas.",
  },
  {
    icon: Trophy,
    title: "Mock Tests & Challenges",
    description: "Timed tests that simulate real placement exams from top companies.",
  },
  {
    icon: Users,
    title: "Community & Leaderboards",
    description: "Compete with peers and climb the ranks on our global leaderboard.",
  },
];

export function Hero2() {
  return (
    <section className="mt-20 bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center flex flex-col gap-2 mb-12">
          <p className="text-4xl font-semibold">
            Everything you need to <span className="text-primary">succeed</span>
          </p>
          <p className="text-gray-600">
            Our platform is built to help college students prepare <br />
            efficiently for placement tests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
