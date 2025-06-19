"use client";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Badge from "../Badge/Badge";
import artistesData from "../../data/artistes.json";

const ArtistCards2 = () => {
  const [popupImage, setPopupImage] = useState(null);
  const popupRef = useRef(null);
  const lastFocusedImageRef = useRef(null);

  const [artists, setArtists] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    setArtists(artistesData);
  }, []);

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
        {artists.slice(0, 3).map((artist, idx) => {
          if (!imageRefs.current[idx]) {
            imageRefs.current[idx] = React.createRef();
          }

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
              <div className="w-[600px] h-[400px] relative overflow-hidden flex items-center justify-center">
                <img
                  ref={imageRefs.current[idx]}
                  src={`/${artist.images[0]}`}
                  alt={`${artist.prenom} ${artist.nom}`}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:rotate-2 focus-visible:brightness-80 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    openPopup(
                      `/${artist.images[0]}`,
                      imageRefs.current[idx].current
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPopup(
                        `/${artist.images[0]}`,
                        imageRefs.current[idx].current
                      );
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

                <p className="text-[14px] mb-4 mt-4 ">{artist.bio}</p>

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
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-default "
          onClick={(e) => {
            if (e.target === e.currentTarget || e.key === "Enter") {
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
              className="cursor-pointer hover:text-[#ff3344] absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 rounded px-2 focus-visible:ring-2 "
            >
              ×
            </button>
            <img
              src={popupImage}
              alt="Image agrandie d’une œuvre d’art"
              className="max-w-full max-h-full w-[700px] h-[700px] object-contain"
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
