import { ArrowUpRight } from "lucide-react";
const About = () => {
  return (
    <>
      <section className="flex text-[#1e2127]">
        {" "}
        <div className="w-[45%]">
          <img
            src="./img/tableau.svg"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="px-[90px] w-[50%] flex flex-col justify-center relative">
          {/* <img
            src="./img/verte.png"
            alt=""
            aria-hidden="true"
            className="absolute top-[-60px] left-[500px] w-[40%]  object-contain "
          /> */}
          <h2 className="font-[AmaticBold] text-[5rem] z-10">
            À propos du musée
          </h2>
          <p className="z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            porta ante. Cras vehicula eu eros ac sollicitudin. Duis aliquam
            tellus nisi, eu dictum est facilisis vel. Pellentesque pretium enim
            sit amet gravida finibus. Suspendisse mattis tristique erat et
            gravida. Mauris efficitur, ligula sit amet sagittis scelerisque,
            urna metus pharetra massa, id efficitur velit lorem ac neque. Ut
            rhoncus tincidunt elit, sed imperdiet sem mattis non. Proin sit amet
            venenatis ligula. Proin rutrum neque vitae commodo aliquet.
            Pellentesque eget molestie dui. Sed non finibus ligula. Sed
            convallis risus velit, non vehicula magna volutpat id.
          </p>
          <div className="w-full flex justify-start items-center z-10">
            <a
              href="https://neroliprak.fr"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#1e2127] rounded-[2px] text-lg w-fit font-medium border-[#1e2127] border-[1px]
       hover:bg-[#1e2127] hover:text-[#FFFDEF]
       focus-visible:bg-[#1e2127] focus-visible:text-[#FFFDEF]
       focus:outline-none focus:underline focus-visible:ring-4 focus-visible:ring-[#FFFDEF]/50 transition underline-anim"
              aria-label="Musée virtuel"
            >
              Voir le teaser
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
