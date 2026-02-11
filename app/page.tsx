import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Hero1 } from "./components/ui/Hero1";
import { Hero2 } from "./components/ui/Hero2";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main>
        <Hero1/>
        <Hero2/>
      </main>
      <Footer/>
    </div>
  );
}
