"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Badge from "../Badge/Badge";

const artists = [
  {
    nom: "Bari",
    prenom: "Abderhaman",
    bio: `Dans cette toile vive et intense, Abderhaman Bari laisse libre cours à son imaginaire. Les couleurs semblent jaillir de la surface : le bleu profond du bas évoque une mer agitée ou un rêve en mouvement, tandis que le rouge et l’orange, en vagues incandescentes, rappellent la chaleur d’un feu ou les battements d’un cœur en pleine effusion.`,
    couleur: "#F8B8D3",
    couleurClaire: "#FFE7F1",
    couleurName: "Salle Rose",
    tache: "img/rose.png",
    images: ["img/Compressed_Salle rose/Abderhaman-Bari-Salle-rose.jpg"],
    interview: null,
  },
  {
    nom: "Roynette",
    prenom: "Adrien",
    bio: `Cette toile offerte au chef d’établissement de la Résidence du Maine incarne la joie et l’espoir d’Adrien Roynette. Aux mille couleurs vives, formes et teintes s’entrelacent pour créer une composition lumineuse. Pour l’artiste, exposer ses œuvres est un témoignage, un message d’espoir pour tous ceux qui traversent des moments difficiles.    `,
    couleur: "#F8B8D3",
    couleurName: "Salle Rose",
    couleurClaire: "#FFE7F1",
    tache: "img/rose2.png",
    images: ["img/Compressed_Salle rose/Adrien-Roynette-Salle-rose.jpg"],
    interview: "https://youtu.be/z2hzT3HkwKw ",
  },
  {
    nom: "Mayolle",
    prenom: "Alexandra",
    bio: `Peinte à la Résidence du Maine, cette toile est l’expression brute des émotions d’Alexandra Mayolle. Les couleurs s’y mêlent en un ensemble harmonieux et contrasté. Des nuances de bleu décorent les coins en haut à gauche et en bas à droite de la toile, tandis que les deux autres coins opposés sont peints de différentes teintes de jaune.`,
    couleur: "#D0D0D0",
    couleurName: "Salle Noire",
    couleurClaire: "#F2EEF3",
    tache: "img/noire.png",
    images: ["img/Compressed_Salle noire/Alexandra-Mayolle-Salle-noir-(3).jpg"],
    interview: "https://youtu.be/qRCVqbjsvlw ",
  },
];

const ArtistCards2 = () => {
  const [popupImage, setPopupImage] = useState(null);
  const popupRef = useRef(null);
  const lastFocusedImageRef = useRef(null);

  const openPopup = (src, imageRef) => {
    lastFocusedImageRef.current = imageRef;
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
    if (lastFocusedImageRef.current) {
      lastFocusedImageRef.current.focus();
    }
  };

  useEffect(() => {
    if (popupImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (popupImage && popupRef.current) {
      popupRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [popupImage]);

  return (
    <div className="relative z-[10]">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-16 py-10 ">
        {artists.map((artist, idx) => {
          const imageRef = useRef(null);

          return (
            <div
              key={idx}
              className="group flex2 border-t-[2px] border-b-[2px] bg-transparent transition-colors duration-300 overflow-hidden"
              style={{
                borderColor: artist.couleur,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = artist.couleurClaire)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <div className="w-[600px] h-[300px] relative overflow-hidden flex items-center justify-center">
                <img
                  ref={imageRef}
                  src={`/${artist.images[0]}`}
                  alt={`${artist.prenom} ${artist.nom}`}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:rotate-2 focus-visible:brightness-80 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    openPopup(`/${artist.images[0]}`, imageRef.current)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPopup(`/${artist.images[0]}`, imageRef.current);
                    }
                  }}
                />
              </div>

              <div className="w-full p-6 flex flex-col min-h-[200px]">
                <div className="flex2 justify-between items-center">
                  <h2 className="text-[2.5rem] font-semibold font-[AmaticBold]">
                    {artist.prenom} {artist.nom}
                  </h2>
                  <Badge couleur={`${artist.couleur}`}>
                    {artist.couleurName}
                  </Badge>
                </div>

                <p className="text-[14px] mb-4 mt-4">{artist.bio}</p>

                {artist.interview && (
                  <div className="flex mt-auto">
                    <a
                      href={artist.interview}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-[#1e2127] rounded border border-[#1e2127] text-sm font-medium hover:bg-[#1e2127] hover:text-white transition"
                      aria-label={`Interview de ${artist.prenom} ${artist.nom}`}
                    >
                      {`Interview ${artist.prenom}`}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {popupImage && (
        <div
          ref={popupRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        >
          <div
            className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              aria-label="Fermer l'image"
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 rounded px-2 focus-visible:ring-2"
            >
              ×
            </button>
            <img
              src={popupImage}
              alt="Image agrandie d’une œuvre d’art"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="w-full flex justify-center items-center z-10">
        <a
          href="/Artiste"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1e2127] text-[#FFFDEF] rounded-[2px] text-base w-fit font-medium border-[#1e2127] border-[1px]
                hover:bg-[#FFFDEF] hover:text-[#1e2127]
                focus-visible:bg-[#FFFDEF] focus-visible:text-[#1e2127]
                focus:underline transition underline-anim"
        >
          Voir tous les artistes
          <ArrowRight
            size={20}
            className="transition-transform duration-300  group-hover:[transform:rotate(-50deg)]"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
};

export default ArtistCards2;
