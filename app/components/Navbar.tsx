"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative text-sm max-w-7xl mx-auto">
      {/* Desktop & Mobile Top Bar */}
      <div className="flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img src="./aptiace.png" alt="AptiAce" className="h-7 rounded-md" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row gap-6">
          <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
          <li><Link href="/aptitude" className="hover:text-blue-500 transition-colors">Aptitude</Link></li>
          <li><Link href="/reasoning" className="hover:text-blue-500 transition-colors">Reasoning</Link></li>
        </ul>

        {/* Desktop Login + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:inline-block bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-sm text-sm transition-colors"
          >
            Login
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
        className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-xl flex flex-col px-6 py-6 gap-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/aptitude" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Aptitude
            </Link>
          </li>
          <li>
            <Link href="/reasoning" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>
              Reasoning
            </Link>
          </li>
        </ul>

        <Link
          href="/login"
          onClick={() => setMenuOpen(false)}
          className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-sm text-sm text-center transition-colors w-full"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}