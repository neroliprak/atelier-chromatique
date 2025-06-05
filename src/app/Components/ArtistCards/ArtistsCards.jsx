"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useState } from "react";

const artists = [
  {
    nom: "Bari",
    prenom: "Abderhaman",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id porta ante...",
    couleur: "#F8B8D3",
    couleurClaire: "#FFE7F1",
    tache: "img/rose.png",
    images: ["img/Compressed_Salle rose/Abderhaman-Bari-Salle-rose.jpg"],
    interview: null,
  },
  {
    nom: "Roynette",
    prenom: "Adrien",
    bio: "Duis aliquam tellus nisi, eu dictum est facilisis vel...",
    couleur: "#F8B8D3",
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
    tache: "img/bleu2.png",
    images: ["img/Compressed_Salle bleue/Yves-Bourdon-Salle-bleue-(2).jpg"],
    interview: null,
  },
];
const ArtistCards = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (src) => setPopupImage(src);
  const closePopup = () => setPopupImage(null);

  return (
    <div className="relative">
      <div className="flex flex-col gap-6 px-4 md:px-16 py-10">
        {artists.map((artist, idx) => (
          <div
            key={idx}
            className="group flex flex-col md:flex-row items-center border-t border-b border-black bg-transparent transition-colors duration-300"
            style={{
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = artist.couleurClaire)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <div className="w-full md:w-1/3 h-[300px] md:h-[250px] relative cursor-pointer flex items-center justify-center">
              <img
                src={`/${artist.images[0]}`}
                alt={`${artist.prenom} ${artist.nom}`}
                className="w-[90%] h-[90%] object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => openPopup(`/${artist.images[0]}`)}
              />
            </div>

            <div className="w-full md:w-2/3 p-6 pl-[100px] flex flex-col justify-center">
              <h2 className="text-[3rem] font-semibold mb-2 font-[AmaticBold]">
                {artist.prenom} {artist.nom}
              </h2>
              <p className="text-sm md:text-base mb-4">{artist.bio}</p>

              {artist.interview && (
                <div className="w-full flex  pt-[50px] items-center z-10">
                  <a
                    href="https://neroliprak.fr"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#1e2127] rounded-[2px] text-lg w-fit font-medium border-[#1e2127] border-[1px]
       hover:bg-[#1e2127] hover:text-[#FFFDEF]
       focus-visible:bg-[#1e2127] focus-visible:text-[#FFFDEF]
       focus:outline-none focus:underline focus-visible:ring-4 focus-visible:ring-[#FFFDEF]/50 transition underline-anim"
                    aria-label="Musée virtuel`}
                  >
                    {`L'interview ${artist.prenom} ${artist.nom}`}
                    <ArrowUpRight size={20} />
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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out"
        >
          <img
            src={popupImage}
            alt="Popup"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ArtistCards;
