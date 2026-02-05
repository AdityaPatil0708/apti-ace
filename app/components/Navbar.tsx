import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <div className="flex flex-row gap-1">
        <img src="/globe.svg" alt="" className="h-5" />
        <Link href="/">HireReady</Link>
      </div>

      <div className="flex flex-row gap-5 text-sm">
        <Link href="#pricing" className="">
          Pricing
        </Link>
        <button>Login</button>
        <button>Get Started</button>
      </div>
    </div>
  )
}
