import Link from "next/link";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const links = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Mock Tests", href: "/tests" },
    { label: "Leaderboard", href: "/leaderboard" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refunds" },
  ],
};

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-300" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: XIcon, href: "https://x.com/Aditya_070804", label: "X" },
  { icon: Linkedin, href: "https://linkedin.com/in/aditya-patil-ap2907", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/_adityaa_11", label: "Instagram" },
  { icon: Github, href: "https://github.com/AdityaPatil0708", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black rounded-t-md text-gray-400 overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/">
              <img src="/aptiace.png" alt="Aptiace Logo" className="h-10 rounded-md" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Helping college students ace placement tests with smart practice,
              mock exams, and detailed analytics.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-3 pt-2">
              <p className="text-[16px] font-bold text-white tracking-wide">
                {group}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-row md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-400">
            © 2026 Aptiace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}