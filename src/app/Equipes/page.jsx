import Navbar2 from "../Components2/Navbar/Navbar2";

const Teams = () => {
  return (
    <>
      <Navbar2 />
      <section className="mt-[120px]">
        <h1 className="font-[AmaticBold] text-[8rem] text-center z-10 leading-[5.5rem] ">
          Notre équipe
        </h1>
        <h2 className="font-[AmaticBold] text-[5rem] text-center z-10 leading-[5.5rem] ">
          Les communiquants
        </h2>
        <div className="flex flex-wrap justify-center gap-4 my-[30px]">
          <img
            src="./img/pauline-polaroid.png"
            className="w-[250px]"
            alt="Pauline"
          />
          <img
            src="./img/solene-polaroid.png"
            className="w-[250px]"
            alt="Solene"
          />
          <img
            src="./img/andrea-polaroid.png"
            className="w-[250px]"
            alt="Andréa"
          />
          <img src="./img/hugo-polaroid.png" className="w-[250px]" alt="Hugo" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-[30px]">
          <img
            src="./img/daria-polaroid.png"
            className="w-[250px]"
            alt="Daria"
          />
          <img
            src="./img/arthur-polaroid.png"
            className="w-[250px]"
            alt="Arthur"
          />
          <img
            src="./img/waldi-polaroid.png"
            className="w-[250px]"
            alt="Waldi"
          />
          <img src="./img/manu-polaroid.png" className="w-[250px]" alt="Manu" />
          <img
            src="./img/caro-polaroid.png"
            className="w-[250px]"
            alt="Caroline"
          />
          <img
            src="./img/neroli-polaroid.png"
            className="w-[250px]"
            alt="Néroli"
          />
        </div>
      </section>
    </>
  );
};

export default Teams;
