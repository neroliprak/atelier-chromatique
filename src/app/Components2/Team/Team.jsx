"use client";
import { ArrowUpRight } from "lucide-react";
import "./../../Artiste/artiste.css";
import "./../Navbar/navbar.css";
import Link from "next/link";

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

        <h2 className="leading-20 relative font-[AmaticBold] text-[5rem]  z-[10] text-center top-[350px] flex-wrap display-team-big">
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
              alt="Andréa"
            />
          </div>
          <div
            className="absolute right-[0%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(8deg)" }}
          >
            <img
              src="./img/hugo-polaroid.png"
              className="w-[300px]"
              alt="Hugo"
            />
          </div>
          <div
            className="absolute right-[5%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(20deg)" }}
          >
            <img
              src="./img/pauline-polaroid.png"
              className="w-[300px]"
              alt="Pauline"
            />
          </div>
          <div>
            <p className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] text-center text-lg">
              Nous sommes une équipe passionnée qui a conçu ce musée virtuel
              pour mettre en avant les talents d'artistes en situation de
              handicap.
            </p>

            <div className="absolute w-full flex justify-center items-center z-10 top-[45%]">
              <Link
                href="/Equipes"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 
    bg-[#1e2127] text-white rounded-[2px] text-[16px] w-fit font-medium 
    border border-[#1e2127] transition 
    hover:bg-transparent hover:text-[#1e2127] hover:underline hover:decoration-[#1e2127] 
    focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 
    focus-visible:bg-transparent focus-visible:text-[#1e2127] focus-visible:underline focus-visible:decoration-[#1e2127]"
                aria-label="Musée virtuel"
                passHref
              >
                Notre équipe
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
