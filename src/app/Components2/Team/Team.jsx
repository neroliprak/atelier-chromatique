import "./../../Artiste/artiste.css";
import "./../Navbar/navbar.css";

const Team = () => {
  return (
    <>
      <section
        id="equipe"
        className="text-[#1e2127] relative h-[1100px] overflow-hidden custom-padding-lr
max-sm:h-[1800px]"
      >
        <div className="display-team flex-col">
          <h2 className=" display-team leading-20 relative font-[AmaticBold] text-[5rem] top-[0px] z-[10] text-center top-titleTeam flex-wrap">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-center py-[20px]">
            Nous sommes une équipe passionnée qui a conçu ce musée virtuel pour
            mettre en avant les talents d'artistes en situation de handicap.
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-[30px]">
            <img
              src="./img/pauline-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/solene-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/andrea-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/hugo-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
          </div>
        </div>

        <h2 className="leading-20 relative font-[AmaticBold] text-[5rem]  z-[10] text-center top-[300px] flex-wrap display-team-big">
          Qui sommes-nous ?
        </h2>
        <div className="relative w-full h-full display-team-big">
          <div
            className="absolute left-[0%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-10deg)" }}
          >
            <img
              src="./img/solene-polaroid.png"
              className="w-[300px]"
              alt="Membre 1"
            />
          </div>
          <div
            className="absolute left-[5%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-30deg)" }}
          >
            <img
              src="./img/andrea-polaroid.png"
              className="w-[300px]"
              alt="Membre 2"
            />
          </div>
          <div
            className="absolute right-[0%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(8deg)" }}
          >
            <img
              src="./img/hugo-polaroid.png"
              className="w-[300px]"
              alt="Membre 3"
            />
          </div>
          <div
            className="absolute right-[5%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(20deg)" }}
          >
            <img
              src="./img/pauline-polaroid.png"
              className="w-[300px]"
              alt="Membre 4"
            />
          </div>
          <p className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] text-center text-lg">
            Nous sommes une équipe passionnée qui a conçu ce musée virtuel pour
            mettre en avant les talents d'artistes en situation de handicap.
          </p>
        </div>
      </section>
    </>
  );
};

export default Team;
