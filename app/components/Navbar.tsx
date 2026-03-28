"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative text-sm max-w-7xl mx-auto">
      {/* Top Bar */}
      <div className="grid grid-cols-3 items-center px-4 md:px-5 py-4">

        {/* Left: Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img src="./aptiace.png" alt="AptiAce" className="h-8 rounded-md" />
        </Link>

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex justify-center flex-row gap-6">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/aptitude" className="hover:text-primary transition-colors">Aptitude</Link></li>
          <li><Link href="/reasoning" className="hover:text-primary transition-colors">Reasoning</Link></li>
        </ul>

        {/* Right: Login + Mobile Hamburger */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/login"
            className="bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-md text-sm transition-colors"
          >
            Login
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-xl flex flex-col px-6 py-5 gap-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between">
          <img src="./aptiace.png" alt="AptiAce" className="h-6 rounded-md" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Aptitude", href: "/aptitude" },
            { label: "Reasoning", href: "/reasoning" },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-gray-700 font-medium hover:text-primary hover:bg-gray-50 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}