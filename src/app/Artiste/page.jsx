"use client";
import "./artiste.css";

import Navbar from "../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Badge from "../Components/Badge/Badge";
import Footer from "../Components/Footer/Footer";
import { ArrowUpRight } from "lucide-react";
import artistesData from "../data/artistes.json";

const BioArtiste = ({ texte }) => {
  const [voirPlus, setVoirPlus] = useState(false);

  const toggleVoirPlus = () => {
    setVoirPlus(!voirPlus);
  };

  return (
    <div className="relative">
      <p
        className={`transition-all duration-300 ease-in-out ${
          voirPlus ? "line-clamp-none" : "line-clamp-6"
        }`}
      >
        {texte}
      </p>
      <button
        onClick={toggleVoirPlus}
        className="mt-2 text-[#1e2127] underline  cursor-pointer"
      >
        {voirPlus ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
};
const Artiste = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(artistesData);
  }, []);

  const [popupVisible, setPopupVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        popupVisible &&
        (event.key === "Escape" || event.key === "Enter") &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {
        setPopupVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupVisible]);

  const closeModal = () => setModalIndex(null);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-4 resp-py mt-[80px]">
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`border-t-1 p-4 text-black gap-[10px]`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor:
                hoveredIndex === index ? artist.couleurClaire : "transparent",
              transition: "background-color 0.3s ease",
            }}
          >
            <img
              src={artist.images}
              alt=""
              className={`h-[400px] w-full transition-transform duration-300 ease-in-out cursor-pointer ${
                hoveredIndex === index ? "scale-110" : "scale-100"
              }`}
              onClick={() => setModalIndex(index)}
              tabIndex={0}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setModalIndex(index);
                }
              }}
            />

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[5px] my-5">
                <h3 className="font-bold text-lg mt-5">
                  {artist.prenom} {artist.nom}
                </h3>
                {artist.interview && (
                  <div className="flex mt-auto my-[30px]">
                    <a
                      href={artist.interview}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-transparent text-[#1e2127] rounded border border-[#1e2127] text-sm font-medium
                    hover:bg-[#1e2127] hover:text-white transition`}
                      aria-label={`Interview de ${artist.prenom} ${artist.nom}`}
                    >
                      {`Interview ${artist.prenom}`}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                )}
              </div>
              <Badge couleur={artist.couleur} children={artist.couleurName} />
            </div>

            <BioArtiste texte={artist.bio} />
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-4 bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Fermer l'image"
              className="cursor-pointer hover:text-[#ff3344] absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 rounded px-2 focus-visible:ring-2"
            >
              x
            </button>
            <img
              src={artists[modalIndex].images}
              alt={`${artists[modalIndex].prenom} ${artists[modalIndex].nom}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Artiste;
