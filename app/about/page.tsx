import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/Card";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Github,
  Lightbulb,
  Linkedin,
  Target,
  TrendingUp,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2,400+", label: "Students Practicing" },
  { value: "500+", label: "Practice Questions" },
  { value: "10+", label: "Core Topics" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Target,
    title: "Placement-Focused",
    description: "Every question, mock test, and analytics feature is designed around what actually appears in campus placement exams.",
  },
  {
    icon: Lightbulb,
    title: "Learn, Don't Just Solve",
    description: "Detailed solution walkthroughs help you understand the 'why' behind every answer, building lasting problem-solving skills.",
  },
  {
    icon: TrendingUp,
    title: "Track & Improve",
    description: "Our topic-wise analytics pinpoint your weak areas so you can focus your effort where it matters most.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Compete on leaderboards, compare with peers, and stay motivated through your entire prep journey.",
  },
];

const missionItems = [
  {
    icon: BookOpen,
    text: "500+ questions modelled after real placement exams",
  },
  {
    icon: BarChart3,
    text: "Topic-wise analytics to identify weak areas instantly",
  },
  {
    icon: Target,
    text: "Timed mock tests that simulate actual exam conditions",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AdityaPatil0708",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aditya-patil-ap2907",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/Aditya_070804",
    icon: Twitter,
  },
];

export default function About() {
  return (
    <div>
      <main>
        {/* ─── Hero ─── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
            <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
              <Image
                src="/star.png"
                alt=""
                width={20}
                height={20}
                className="h-4 w-4 md:h-5 md:w-5"
              />
              <span className="text-primary text-xs md:text-sm">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-zinc-800">
              Built for students,{" "}
              <br className="hidden sm:block" />
              by a <span className="text-primary">student</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
              AptiAce was created because placement prep shouldn&apos;t feel
              overwhelming. We&apos;re turning an anxious process into a
              confident one — with smart practice, real analytics, and a
              supportive community.
            </p>
          </div>
        </section>

        {/* ─── Stats Strip ─── */}
        <section className="bg-gray-100 rounded-md py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Mission ─── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-5">
                <p className="text-primary tracking-wide text-xs md:text-sm font-medium uppercase">
                  Why We Built This
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 leading-tight">
                  Because every student deserves a{" "}
                  <span className="text-primary">fair shot</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Most placement prep resources are expensive, scattered, or
                  outdated. AptiAce brings everything under one roof — curated
                  questions, timed mock tests, and detailed analytics — so you
                  spend less time searching and more time improving.
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Whether you&apos;re aiming for TCS, Infosys, Wipro, or any
                  top recruiter coming to your campus, our question bank and
                  practice engine are tailored to what these companies actually
                  test.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {missionItems.map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Values ─── */}
        <section className="bg-gray-100 rounded-md py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center flex flex-col gap-2 mb-10">
              <p className="text-primary tracking-wide text-xs md:text-sm font-medium uppercase">
                Our Values
              </p>
              <p className="text-3xl md:text-4xl font-semibold text-zinc-800">
                What drives <span className="text-primary">AptiAce</span>
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <Card
                  key={v.title}
                  icon={v.icon}
                  title={v.title}
                  description={v.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Founder Spotlight ─── */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-3">
            <p className="text-primary tracking-wide text-xs md:text-sm font-medium uppercase">
              Meet the Creator
            </p>
            <div className="flex h-25 w-25 items-center justify-center overflow-hidden rounded-full bg-primary/10">
              <Image
                src="/myprofile.png"
                alt="Aditya Patil"
                height={80}
                width={80}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-800">Aditya Patil</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              A student developer passionate about making placement prep
              accessible. Built AptiAce to solve the very problem he faced —
              finding reliable, well-structured practice material for campus
              placements.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-gray-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative bg-black rounded-md py-16">
          <div
            className="absolute inset-0 z-0"
            style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Ready to ace your{" "}
              <span className="text-primary">placements?</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Join thousands of students who are building confidence with
              AptiAce. Start practicing for free — no credit card needed.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
