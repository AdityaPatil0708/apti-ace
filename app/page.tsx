import Navbar from "./components/Navbar";
import { LandingHero } from "./components/ui/LandingHero";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
      <LandingHero/>
    </div>
  );
}
