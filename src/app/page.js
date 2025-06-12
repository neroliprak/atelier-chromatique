import Navbar2 from "./Components2/Navbar/Navbar2";
import Herosection2 from "./Components2/Herosection/HeroSection2";
import About from "./Components2/About/About";
import Concept from "./Components2/Concept/Concept";
import Artistes from "./Components2/Artistes/Artistes";
import Team from "./Components2/Team/Team";
import Footer from "./Components2/Footer/Footer";
import "./Artiste/artiste.css";
export default function Home() {
  return (
    <>
      <Navbar2 />
      <Herosection2 />
      <About />
      <div className="margin-page"></div>
      <Concept />
      <div className="margin-page"></div>
      <Artistes />
      <div className="margin-page"></div>
      <Team />
      <Footer />
    </>
  );
}
