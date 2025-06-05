const Herosection = () => {
  return (
    <section className="relative text-[#323741] h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}

      {/* Dégradé noir en overlay */}
      <div className="absolute top-[50%] left-1/2 w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 z-[-2]">
        {/* Dégradé au-dessus de la vidéo */}
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

        {/* Vidéo en fond */}
        <video
          className="w-full h-full object-cover"
          src="/video/musee-test-teaser.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Texte */}
      <div className="flex flex-col">
        <h1 className="text-center text-white leading-[1.1] text-[1.5rem] z-10">
          <span className="block font-[Poppins]">Bienvenue au</span>
          <span className="block font-[AmaticBold] text-[8rem] bg-[linear-gradient(to_right,_#8D868E,_#FCE47C,_#F8B8D3,_#95E0FD,_#90F4B5)] bg-clip-text text-transparent">
            musée virtuel
          </span>

          <span className="block font-[Poppins]">de l'APF France Handicap</span>
        </h1>

        <div className="w-full flex justify-center pt-[50px] ">
          <a
            href="https://neroliprak.fr"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-8 inline-block px-6 py-3 bg-transparent text-white rounded-[2px] text-lg w-fit font-medium border-white border-[1px]
             hover:bg-white hover:text-[#1e2127]
             focus-visible:bg-white focus-visible:text-[#1e2127]
             focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1e2127]/50 transition underline-anim"
            aria-label="Accéder au musée virtuel"
          >
            Commencer la visite
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
