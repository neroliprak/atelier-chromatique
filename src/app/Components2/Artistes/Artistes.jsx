import "./../../Artiste/artiste.css";
import ArtistCards2 from "../ArtistCards/ArtistsCards2";
const Artistes = () => {
  return (
    <>
      <section id="artiste" className="text-[#1e2127] custom-padding-lr">
        <h2 className="font-[AmaticBold] text-[5rem] z-10 text-center">
          Les artistes
        </h2>
        <ArtistCards2 />
      </section>
    </>
  );
};

export default Artistes;
