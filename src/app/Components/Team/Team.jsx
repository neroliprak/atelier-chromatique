"use client";
import { ArrowRight } from "lucide-react";
import "./../../Artiste/artiste.css";
import "../Navbar/navbar.css";
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
          <div className="flex justify-center">
            <h2 className="font-[AmaticBold] text-[5rem] leading-20 text-center">
              Qui sommes-nous ?
            </h2>
          </div>

          <p className="text-lg text-center py-[20px]">
            Nous sommes une équipe passionnée qui a conçu ce musée virtuel pour
            mettre en avant les talents d'artistes en situation de handicap.
          </p>
          <div className="flex flex-wrap justify-center gap-4 my-[30px]">
            <img
              src="./img/equipe/group1-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/equipe/group2-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/equipe/group3-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
            <img
              src="./img/equipe/group4-polaroid.png"
              className="w-[250px]"
              alt="Membre 4"
            />
          </div>
          <div className="flex justify-center z-10 ">
            <a
              href="/Equipe"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1e2127] text-[#FFFDEF] rounded-[2px] text-base w-fit font-medium border-[#1e2127] border-[1px]
                hover:bg-[#FFFDEF] hover:text-[#1e2127]
                focus-visible:bg-[#FFFDEF] focus-visible:text-[#1e2127]
                focus:underline transition"
            >
              Notre équipe
              <ArrowRight
                size={20}
                className="transition-transform duration-300  group-hover:[transform:rotate(-50deg)]"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <h2 className="leading-20 relative font-[AmaticBold] text-[5rem]  z-[10] text-center top-[350px] flex-wrap display-team-big">
          Qui sommes-nous ?
        </h2>
        <div className="relative w-full h-full display-team-big">
          <div
            className="absolute left-[-10%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-10deg)" }}
          >
            <img
              src="./img/equipe/group1-polaroid.png"
              className="w-[300px]"
              alt="Membre 1"
            />
          </div>
          <div
            className="absolute left-[-8%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-30deg)" }}
          >
            <img
              src="./img/equipe/group2-polaroid.png"
              className="w-[300px]"
              alt="Andréa"
            />
          </div>
          <div
            className="absolute right-[-10%] top-[40%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(8deg)" }}
          >
            <img
              src="./img/equipe/group3-polaroid.png"
              className="w-[300px]"
              alt="Hugo"
            />
          </div>
          <div
            className="absolute right-[-8%] top-[70%] -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(20deg)" }}
          >
            <img
              src="./img/equipe/group4-polaroid.png"
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

            <div className="absolute w-full flex justify-center items-center z-10 top-[50%]">
              <a
                href="/Equipe"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1e2127] text-[#FFFDEF] rounded-[2px] text-base w-fit font-medium border-[#1e2127] border-[1px]
                hover:bg-[#FFFDEF] hover:text-[#1e2127]
                focus-visible:bg-[#FFFDEF] focus-visible:text-[#1e2127]
                focus:underline transition underline-anim"
              >
                Notre équipe
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300  group-hover:[transform:rotate(-50deg)]"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
