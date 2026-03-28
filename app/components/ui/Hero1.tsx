// import { ArrowRight } from "lucide-react";

// export function Hero1() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
//       {/* Left: Text Content */}
//       <div className="flex flex-col gap-8 md:w-1/2">
//         <div className="flex flex-row bg-gray-100 items-center gap-1 px-3 py-1 rounded-full w-fit">
//           <img src="./star.png" alt="" className="h-5 w-5" />
//           <p className="text-primary text-sm rounded-full">
//             Ace your placement tests
//           </p>
//         </div>
//         <h1 className="text-6xl text-zinc-800 font font-semibold tracking-normal">
//           Master Your Aptitude <br /> Skills with{" "}
//           <span className="text-primary">Confidence</span>
//           <div className="text-gray-500 text-[15px] font-normal leading-relaxed py-2">
//             Practice aptitude, reasoning, and placement tests with our smart
//             platform. Track your progress and crack your dream job.
//           </div>
//         </h1>
//         <div className="flex gap-4">
//           <button className="hover:cursor-pointer hover:bg-primary-hover outline-none border px-4 py-2 rounded-md text-sm bg-primary text-white flex items-center gap-2">
//             Start Practicing Free
//             <ArrowRight className="w-4 h-4" />
//           </button>
//           <button className="hover:cursor-pointer border border-gray-400 px-4 py-2 hover:bg-black hover:text-white transition duration-300 rounded-md text-sm">
//             View Pricing
//           </button>
//         </div>

//         {/* Social proof */}
//         <div className="flex items-center gap-3 mt-2">
//           <div className="flex -space-x-2">
//             {[
//               "https://i.pravatar.cc/40?img=11",
//               "https://i.pravatar.cc/40?img=22",
//               "https://i.pravatar.cc/40?img=33",
//               "https://i.pravatar.cc/40?img=44",
//             ].map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt="user"
//                 className="w-8 h-8 rounded-full border-2 border-white object-cover"
//               />
//             ))}
//           </div>
//           <p className="text-sm text-gray-500">
//             <span className="font-semibold text-zinc-800">2,400+</span> students
//             already practicing
//           </p>
//         </div>
//       </div>

//       {/* Right: Dummy Image Grid */}
//       <div className="md:w-1/2 grid grid-cols-2 gap-4">
//         {/* Large top-left card */}
//         <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden bg-gray-100 h-60">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
//             alt="Students studying"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Top-right card */}
//         <div className="rounded-2xl overflow-hidden bg-gray-100 h-60">
//           <img
//             src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=300&fit=crop"
//             alt="Exam preparation"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Bottom full-width card */}
//         <div className="col-span-2 rounded-2xl overflow-hidden bg-gray-100 h-50">
//           <img
//             src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=300&fit=crop"
//             alt="Analytics dashboard"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { ArrowRight } from "lucide-react"
export function Hero1() {
    return (
        <div className="justify-center py-20 flex flex-col gap-5 items-center text-center">
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
                <button className="hover:cursor-pointer hover:bg-black hover:text-white transition duration-300 border border-gray-400 px-3 py-2 rounded-sm text-sm">View Pricing</button>
            </div>
        </div>
    )
}