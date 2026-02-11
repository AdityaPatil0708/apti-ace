import { ArrowRight } from "lucide-react"
export function Hero1() {
    return (
        <div className="justify-center mt-20 flex flex-col gap-5 items-center text-center">
            <div className="flex flex-row bg-gray-100 items-center gap-1 px-3 py-1 rounded-full">
                <img src="./star.png" alt="" className="h-5 w-5" />
                <p className="text-primary text-sm rounded-full">Ace your placement tests</p>
            </div>
            <div className="text-6xl text-zinc-800 font-semibold">
                Master Your Aptitude <br /> Skills with <span className="text-primary">Confidence</span>
            </div>
            <div>
                Practice aptitude, reasoning, and placement tests with our smart platform. <br /> Track your progress and crack your dream job.
            </div>
            <div className="flex gap-4">
                <button className="hover:cursor-pointer hover:bg-primary-hover outline-none border px-3 py-2 rounded-md text-sm bg-primary text-white flex items-center gap-2">
                    Start Practicing free
                    <ArrowRight className="w-4 h-4" />
                </button>
                <button className="hover:cursor-pointer border border-gray-500 px-3 py-2 rounded-sm text-sm">View Pricing</button>
            </div>
        </div>
    )
}