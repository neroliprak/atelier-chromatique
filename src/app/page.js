import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import Navbar2 from "./Components/Navbar/Navbar2";
import Herosection2 from "./Components/Herosection/HeroSection2";
import About from "./Components/About/About";
import Concept from "./Components/Concept/Concept";
import Artistes from "./Components/Artistes/Artistes";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Herosection /> */}
      {/* <Navbar2 /> */}
      <Herosection2 />
      <div className="mt-[90px]"></div>
      <About />
      <div className="mt-[90px]"></div>
      <Concept />
      <div className="mt-[90px]"></div>
      <Artistes />
      <div className="mt-[90px]"></div>
      <Team />
      <Footer />
    </>
  );
}
