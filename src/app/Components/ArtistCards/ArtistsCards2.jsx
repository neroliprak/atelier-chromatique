"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useState } from "react";
import Badge from "../Badge/Badge";

const artists = [
  {
    nom: "Bari",
    prenom: "Abderhaman",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id porta ante...",
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
    interview: "https://lien-vers-interview.com",
  },
  {
    nom: "Mayolle",
    prenom: "Alexandra",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#8D868E",
    couleurName: "Salle Noire",
    couleurClaire: "#F2EEF3",
    tache: "img/noire.png",
    images: ["img/Compressed_Salle noire/Alexandra-Mayolle-Salle-noir-(3).jpg"],
    interview: "https://lien-vers-interview.com",
  },
  {
    nom: "Layet",
    prenom: "Bénédicte",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#6CE297",
    couleurName: "Salle Vert",
    couleurClaire: "#DAFFE8",
    tache: "img/verte.png",
    images: ["img/Compressed_Salle verte/Bénédicte-Layet-Salle-verte.jpg"],
    interview: null,
  },
  {
    nom: "Piquard",
    prenom: "Brigitte",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#7FD7F9",
    couleurName: "Salle Bleu",
    couleurClaire: "#DEF6FF",
    tache: "img/bleu.png",
    images: ["img/Compressed_Salle bleue/Brigitte-Piquard-Salle-bleue.jpg"],
    interview: "https://lien-vers-interview.com",
  },
  {
    nom: "Semon",
    prenom: "Catherine",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#7FD7F9",
    couleurName: "Salle Bleu",
    couleurClaire: "#DEF6FF",
    tache: "img/bleu2.png",
    images: ["img/Compressed_Salle bleue/Catherine-Semon-Salle-bleue.jpg"],
    interview: "https://lien-vers-interview.com",
  },
  {
    nom: "Lecam",
    prenom: "Dominique",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#F8B8D3",
    couleurName: "Salle Rose",
    couleurClaire: "#FFE7F1",
    tache: "img/rose.png",
    images: ["img/Compressed_Salle rose/Dominique-Lecam-Salle-rose.jpg"],
    interview: null,
  },
  {
    nom: "Marchand",
    prenom: "Éric",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#EED464",
    couleurName: "Salle Jaune",
    couleurClaire: "#FFF5CA",
    tache: "img/jaune.png",
    images: ["img/Compressed_Salle jaune/Eric-Marchand-Salle-jaune.jpg"],
    interview: null,
  },
  {
    nom: "Caldaru",
    prenom: "Ionut",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#8D868E",
    couleurName: "Salle Noire",
    couleurClaire: "#F2EEF3",
    tache: "img/noire2.png",
    images: ["img/Compressed_Salle noire/Ionut-Caldaru-Salle-noir.jpg"],
    interview: null,
  },
  {
    nom: "Pichery",
    prenom: "Jean-Daniel",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#8D868E",
    couleurClaire: "#F2EEF3",
    couleurName: "Salle Noire",
    tache: "img/noire.png",
    images: ["img/Compressed_Salle noire/Jean-Daniel-PICHERY-Salle-noir.jpg"],
    interview: null,
  },
  {
    nom: "Capdevielle",
    prenom: "Julie",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#F0EBCD",
    couleurClaire: "#FFFDF3",
    couleurName: "Salle Blanc",
    tache: "img/blanc.png",
    images: ["img/Compressed_Salle blanche/Julie-Capdevielle-Salle-banche.jpg"],
    interview: null,
  },
  {
    nom: "Campet",
    prenom: "Kévin",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#6CE297",
    couleurClaire: "#DAFFE8",
    couleurName: "Vert",
    tache: "img/verte2.png",
    images: ["img/Compressed_Salle verte/Kévin-Campet-Salle-verte.jpg"],
    interview: null,
  },
  {
    nom: "Kammerer",
    prenom: "Olivier",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#F8B8D3",
    couleurClaire: "#FFE7F1",
    couleurName: "Rose",
    tache: "img/rose2.png",
    images: ["img/Compressed_Salle rose/Olivier-Kammerer-Salle-rose.jpg"],
    interview: "https://lien-vers-interview.com",
  },
  {
    nom: "Fleury",
    prenom: "Thomas",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#8D868E",
    couleurClaire: "#F2EEF3",
    couleurName: "Noire",
    tache: "img/noire2.png",
    images: ["img/Compressed_Salle noire/Thomas Fleury - Salle noir 3.jpg"],
    interview: null,
  },
  {
    nom: "Bourdon",
    prenom: "Yves",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#7FD7F9",
    couleurClaire: "#DEF6FF",
    couleurName: "Bleu",
    tache: "img/bleu2.png",
    images: ["img/Compressed_Salle bleue/Yves-Bourdon-Salle-bleue-(2).jpg"],
    interview: null,
  },
];
const ArtistCards2 = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (src) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  return (
    <div className="relative z-[10]">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-4 md:px-16 py-10">
        {artists.slice(0, 3).map((artist, idx) => (
          <div
            key={idx}
            className="group flex border-t-[2px] border-b-[2px] bg-transparent transition-colors duration-300 overflow-hidden"
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
              <div className="flex justify-between items-center">
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
        <a
          href="https://neroliprak.fr"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1e2127] text-white rounded-[2px] text-[16px] w-fit font-medium border-[#1e2127] border-[1px]
       hover:bg-transparent hover:text-[#1e2127]
       focus-visible:bg-[#1e2127] focus-visible:text-transparent
       focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 transition underline-anim focus:underline"
          aria-label="Musée virtuel"
        >
          En savoir plus
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ArtistCards2;
