import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/About/About";
import Concept from "./Components/Concept/Concept";
import Artistes from "./Components/Artistes/Artistes";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import "./Artiste/artiste.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
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
