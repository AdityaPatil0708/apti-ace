import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CompanyLogos } from "./components/ui/CompanyLogos";
import { FAQ } from "./components/ui/FAQ";
import { Hero1 } from "./components/ui/Hero1";
import { Hero2 } from "./components/ui/Hero2";
import { Hero3 } from "./components/ui/Hero3";
import { Hero4 } from "./components/ui/Hero4";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main>
        <Hero1/>
        <CompanyLogos />
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <FAQ/>
      </main>
      <Footer/>
    </div>
  );
}
