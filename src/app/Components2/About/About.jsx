import { ArrowUpRight } from "lucide-react";
const About = () => {
  return (
    <>
      <main id="main-content">
        <section
          id=" about"
          className="flex justify-center w-full h-[100vh] text-[#1e2127] py-[30px]"
        >
          <div className="image-about">
            <img
              src="./img/tableau.svg"
              alt=""
              className="display-none-about w-full h-full object-cover "
            />
          </div>
          <div className="custom-padding-lr text-about flex flex-col justify-center relative gap-[40px]">
            <h2 className="font-[AmaticBold] text-[5rem] z-10 leading-[5.5rem] ">
              À propos du musée
            </h2>
            <p className="z-10">
              Un espace unique imaginé par l’association APF France handicap et
              étudiants de Métiers du multimédia et de l'internet pour mettre en
              lumière la créativité de personnes en situation de handicap. À
              travers le thème des couleurs, il vous invite à découvrir des
              œuvres originales, sensibles et puissantes, réalisées par des
              artistes.
            </p>
            {/* <div className="w-full flex justify-start items-center z-10">
              <a
                href="https://neroliprak.fr"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e2127] text-[#FFFDEF] rounded-[2px] text-base w-fit font-medium border-[#1e2127] border-[1px]
    hover:bg-[#FFFDEF] hover:text-[#1e2127]
    focus-visible:bg-[#FFFDEF] focus-visible:text-[#1e2127]
    focus:outline-none focus:underline  transition underline-anim"
                aria-label="Musée virtuel"
              >
                Visionnez le teaser
                <ArrowUpRight size={20} />
              </a>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};
export default About;
