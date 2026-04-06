"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, Brain } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Login failed");
      }

      localStorage.setItem("customLoggedIn", "true");
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-screen flex bg-white">
      {/* Left Panel */}
      <div className="hidden lg:flex w-[40%] bg-gray-100 flex-col items-center justify-center">
        {/* Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <img src="/aptiace.png" alt="AptiAce" className="h-12" />
          <div className="flex flex-col items-center font-bold text-lg">
            Master your aptitude
            <br /> <span>with AptiAce</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center px-8 py-12">
        <div className="w-full max-w-sm">

          <h1 className="text-2xl font-black text-gray-900 mb-1">
            Welcome back!
          </h1>
          <p className="text-gray-400 text-sm mb-8">
            Login to continue your practice streak
          </p>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="aditya@gmail.com"
                className="w-full border border-gray-300 outline-none px-3.5 py-2.5 rounded-xl text-sm text-gray-800 placeholder:text-gray-400  focus:ring-2 focus:ring-blue-50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 outline-none px-3.5 py-2.5 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-50 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                <p className="text-red-500 text-xs font-medium">{error}</p>
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 disabled:opacity-60 shadow-sm shadow-blue-200 mt-2"
            >
              {loading ? "Signing in..." : "Login"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-5 text-center">
            By signing in you agree to our{" "}
            <span className="underline cursor-pointer hover:text-gray-600">
              Privacy Policy
            </span>
            .
          </p>

          <p className="text-sm text-center mt-4 text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#2563EB] font-semibold hover:underline"
            >
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
