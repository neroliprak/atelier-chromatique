const Team = () => {
  return (
    <>
      <section className="text-[#1e2127] relative h-[800px] overflow-hidden ">
        <h2 className="relative font-[AmaticBold] text-[5rem] z-10 text-center top-[100px]">
          Qui sommes-nous ?
        </h2>

        <div className="relative w-full h-full">
          <div
            className="absolute left-[0%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-10deg)" }}
          >
            <img
              src="./img/polaroid.png"
              className="w-[300px]"
              alt="Membre 1"
            />
          </div>
          <div
            className="absolute left-[5%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-30deg)" }}
          >
            <img
              src="./img/polaroid.png"
              className="w-[300px]"
              alt="Membre 2"
            />
          </div>
          <div
            className="absolute right-[0%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(8deg)" }}
          >
            <img
              src="./img/polaroid.png"
              className="w-[300px]"
              alt="Membre 3"
            />
          </div>
          <div
            className="absolute right-[5%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(20deg)" }}
          >
            <img
              src="./img/polaroid.png"
              className="w-[300px]"
              alt="Membre 4"
            />
          </div>
          <p className="absolute left-1/2 top-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] text-center text-lg">
            Nous sommes une équipe passionnée qui a conçu ce musée virtuel pour
            mettre en avant les talents d'artistes en situation de handicap.
          </p>
        </div>
      </section>
    </>
  );
};

export default Team;
