import { ArrowRight } from "lucide-react";

const Herosection = () => {
  return (
    <section
      id="musee"
      className="relative text-[#323741] h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-full h-full z-10 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.6)_100%)]" />

        <video
          loading="lazy"
          aria-hidden="true"
          className="w-full h-full object-cover"
          src="/video/musee-virtuel-atelierchromatique.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="flex flex-col z-20 relative bottom-[50px] text-center">
        <h1 className="text-white leading-[1.1] text-[1.2rem]">
          <span className="block font-[Poppins] mb-[5px] uppercase">
            Bienvenue au
          </span>
          <span className="block text-[5rem] tracking-[-6px] bg-[linear-gradient(to_right,_#8D868E,_#FCE47C,_#F8B8D3,_#95E0FD,_#90F4B5)] bg-clip-text text-transparent uppercase">
            Musée virtuel
          </span>
          <span className="block font-[Poppins] mt-[5px] uppercase">
            De l'APF France handicap
          </span>
        </h1>

        <div className="w-full flex top-[250px] justify-center items-center z-20 relative btn-top-herosection">
          <a
            href="hhttps://drive.google.com/file/d/1uPG5rhstFw-6gpADsYpCJAv-nsDfAD_z/view?usp=sharing"
            className="group mt-8 inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-[2px] text-base w-fit font-medium border-white border-[1px]
    hover:bg-white hover:text-[#1e2127]
    focus-visible:bg-white focus-visible:text-[#1e2127]
    focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1e2127]/50 transition underline-anim focus:underline"
            aria-label="Musée virtuel"
          >
            Téléchargez notre exposition
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:[transform:rotate(-50deg)]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
