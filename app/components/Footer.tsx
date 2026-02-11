import Link from "next/link"

export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
                <Link href="/">
                    <img src="/aptiace.png" alt="Aptiace Logo" className="h-7 rounded-md" />
                </Link>
                <p className="text-sm text-gray-600">
                    © 2026 Aptiace. All rights reserved.
                </p>
            </div>
        </footer>
    )
}