"use client"

import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(initialDark)
    
    if (initialDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="flex justify-between p-4 text-sm">
      <div className="">
        <Link href="/" className="font-bold px-3 py-1">HireReady</Link>
      </div>
      <div>
        <ul className="flex flex-row gap-4 py-1">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/aptitude" className="hover:text-blue-500">Aptitude</Link></li>
          <li><Link href="/reasoning" className="hover:text-blue-500">Reasoning</Link></li>
        </ul>
      </div>
      <div className="flex flex-row gap-2">
        <Link href="/pricing" className="px-3 py-1 hover:text-blue-500">Pricing</Link>
        <Link href="/login" className="bg-blue-500 text-white px-3 py-1 rounded-sm hover:cursor-pointer text-sm outline-none">
          Login
        </Link>
      </div>
    </div>
  )
}