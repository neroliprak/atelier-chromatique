import "./../../Artiste/artiste.css";
import { Landmark, Palette, Gamepad } from "lucide-react";
import Slider from "../Slider/Slider";

const Concept = () => {
  return (
    <>
      <section
        id="concept"
        className="bg-[#EFEBD9] py-[60px] text-[#1e2127] custom-padding-lr px-[90px] gap-[60px] items-center"
      >
        <div className=" w-[100%] flex flex-col justify-start relative gap-[20px] custom-padding-lr2">
          <h2 className="font-[AmaticBold] text-[5rem] text-center z-10 m-0 p-0">
            Le concept
          </h2>
          <p className="z-10">
            Découvrez une expérience immersive qui vous propose deux façons de
            parcourir les œuvres : – un parcours interactif et ludique, guidé et
            dynamique, – un parcours libre pour explorer à votre rythme. Le
            musée se compose de six salles, chacune avec son atmosphère unique :
            jaune, verte, bleue, rose, noire et blanche. Chaque espace vous
            invite à une découverte différente, entre surprise, contemplation et
            imagination.
          </p>
        </div>
        <div className=" w-full flex justify-center pt-[40px] gap-[90px] ">
          <div className="flex flex-col items-center text-center">
            <div className="w-fit p-[20px] rounded-[20px] bg-[#FFFADF]">
              <Landmark size={28} />
            </div>
            <p className="text-[1rem] mt-2">6 SALLES</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-fit p-[20px] rounded-[20px] bg-[#FFFADF]">
              <Palette size={28} />
            </div>
            <p className="text-[1rem] mt-2">16 ARTISTES</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-fit p-[20px] rounded-[20px] bg-[#FFFADF]">
              <Gamepad size={28} />
            </div>
            <p className="text-[1rem] mt-2">6 MINI-JEUX</p>
          </div>
        </div>
        <Slider />
      </section>
    </>
  );
};

export default Concept;
