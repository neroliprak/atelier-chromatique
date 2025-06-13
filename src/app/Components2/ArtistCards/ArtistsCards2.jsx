"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useState } from "react";
import Badge from "../Badge/Badge";
import Link from "next/link";

const artists = [
  {
    nom: "Bari",
    prenom: "Abderhaman",
    bio: "Dans cette toile vive et intense, Abderhaman Bari laisse libre cours à son imaginaire. Les couleurs semblent jaillir de la surface : le bleu profond du bas évoque une mer agitée ou un rêve en mouvement, tandis que le rouge et l’orange, en vagues incandescentes, rappellent la chaleur d’un feu ou les battements d’un cœur en pleine effusion.",
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
    bio: "Cette toile offerte au chef d’établissement de la Résidence du Maine incarne la joie et l’espoir d’Adrien Roynette. Aux mille couleurs vives, formes et teintes s’entrelacent pour créer une composition lumineuse. Pour l’artiste, exposer ses œuvres est un témoignage, un message d’espoir pour tous ceux qui traversent des moments difficiles.",
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
    bio: "Peinte à la Résidence du Maine, cette toile est l’expression brute des émotions d’Alexandra Mayolle. Les couleurs s’y mêlent en un ensemble harmonieux et contrasté. Des nuances de bleu décorent les coins en haut à gauche et en bas à droite de la toile, tandis que les deux autres coins opposés sont peints de différentes teintes de jaune.",
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

  const openPopup = (src) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  return (
    <div className="relative z-[10]">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-16 py-10 ">
        {artists.slice(0, 3).map((artist, idx) => (
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
            <div className="w-[600px] h-[300px] relative cursor-pointer overflow-hidden flex items-center justify-center">
              <img
                src={`/${artist.images[0]}`}
                alt={`${artist.prenom} ${artist.nom}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openPopup(`/${artist.images[0]}`)}
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
                    rel="noopener noreferrer"
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
          </div>
        ))}
      </div>
      {popupImage && (
        <div
          onClick={closePopup}
          className="fixed inset-0 z-50 bg-black/80 max-h-full flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={popupImage}
            alt="Popup"
            className="max-w-full max-h-full object-contain justify-center"
          />
        </div>
      )}
      <div className="w-full flex justify-center items-center z-10">
        <Link
          href="/Artiste"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 
    bg-[#1e2127] text-white rounded-[2px] text-[16px] w-fit font-medium 
    border border-[#1e2127] transition 
    hover:bg-transparent hover:text-[#1e2127] hover:underline hover:decoration-[#1e2127] 
    focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 
    focus-visible:bg-transparent focus-visible:text-[#1e2127] focus-visible:underline focus-visible:decoration-[#1e2127]"
          aria-label="Musée virtuel"
        >
          Voir tous les artistes
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ArtistCards2;
