import { Landmark, Palette, Gamepad } from "lucide-react";
import Slider from "../Slider/Slider";

const Concept = () => {
  return (
    <>
      <section className="flex text-[#1e2127] px-[90px] gap-[60px] items-center">
        <div className=" w-[60%] flex flex-col justify-start relative">
          {/* <img
            src="./img/bleu.png"
            alt=""
            aria-hidden="true"
            className="absolute top-[-80px] left-[-150px] w-[40%]  object-contain "
          /> */}
          <h2 className="font-[AmaticBold] text-[5rem] z-10 m-0 p-0">
            Le concept
          </h2>
          <p className="z-10">
            LLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            id porta ante. Cras vehicula eu eros ac sollicitudin. Duis aliquam
            tellus nisi, eu dictum est facilisis vel. Pellentesque pretium enim
            sit amet gravida finibus.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[20px] w-fit">
          <div className="p-[20px] border border-transparent rounded-[20px] bg-[#FBF7E0]">
            <div className="flex items-center gap-[8px]">
              <Landmark size={20} />
              <h3 className="font-[AmaticBold] text-[2rem]">6 salles</h3>
            </div>
            <p>Des univers et couleurs différents</p>
          </div>

          <div className="p-[20px] border border-transparent rounded-[20px] bg-[#FBF7E0]">
            <div className="flex items-center gap-[8px]">
              <Palette size={20} />
              <h3 className="font-[AmaticBold] text-[2rem]">6 artistes</h3>
            </div>
            <p>Des univers et couleurs différents</p>
          </div>

          <div className="col-span-2 p-[20px] border border-transparent rounded-[20px] bg-[#FBF7E0]">
            <div className="flex items-center gap-[8px]">
              <Gamepad size={20} />
              <h3 className="font-[AmaticBold] text-[2rem]">6 mini-jeux</h3>
            </div>
            <p>Des univers et couleurs différents</p>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default Concept;
