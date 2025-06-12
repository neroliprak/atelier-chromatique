import { ArrowUpRight } from "lucide-react";

const Herosection = () => {
  return (
    <section
      id="musee"
      className="relative text-[#323741] h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-[50%] left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black/80 to-transparent z-10" />

        <video
          className="w-full h-[100vh] object-cover "
          src="/video/musee-test-teaser.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="flex flex-col z-10 relative bottom-[50px] ">
        <h1 className=" text-center text-white leading-[1.1] text-[1.2rem]">
          <span className="block font-[Poppins] mb-[5px]">BIENVENUE AU </span>
          <span className="block text-[4.7rem] tracking-[-6px] bg-[linear-gradient(to_right,_#8D868E,_#FCE47C,_#F8B8D3,_#95E0FD,_#90F4B5)] bg-clip-text text-transparent">
            MUSÉE VIRTUEL
          </span>
          <span className="block font-[Poppins] mt-[5px]">
            DE l'APF FRANCE HANDICAP
          </span>
        </h1>

        <div className="w-full flex relative btn-top-herosection top-[250px] justify-center items-center z-10">
          <a
            href="https://neroliprak.fr"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-[2px] text-base w-fit font-medium border-white border-[1px]
       hover:bg-white hover:text-[#1e2127]
       focus-visible:bg-white focus-visible:text-[#1e2127]
       focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1e2127]/50 transition underline-anim focus:underline"
            aria-label="Musée virtuel"
          >
            Téléchargez notre exposition
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
