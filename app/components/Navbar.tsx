import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative flex justify-center items-center p-5 text-sm max-w-7xl mx-auto">
      <div className="absolute left-4">
        <Link href="/" >
          <img src="./aptiace.png" alt="" className="h-7 rounded-md  "/>
        </Link>
      </div>
      <div>
        <ul className="flex flex-row gap-5">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/aptitude" className="hover:text-blue-500">
              Aptitude
            </Link>
          </li>
          <li>
            <Link href="/reasoning" className="hover:text-blue-500">
              Reasoning
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute right-4 flex flex-row gap-2">
        <Link
          href="/login"
          className="bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-sm hover:cursor-pointer text-sm outline-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}