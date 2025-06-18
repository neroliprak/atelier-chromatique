"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules"; // ← ajout ici
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const images = [
  "/img/salle-blanche-musee.png",
  "/img/salle-verte-musee.png",
  "/img/salle-jaune-musee.png",
  "/img/salle-noire-musee.png",
  "/img/salle-rose-musee.png",
  "/img/salle-bleu.png",
];

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const visibleImages = images.slice(0, 5);

  return (
    <div className="w-full px-4 md:px-[90px] py-[40px] relative">
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-full h-[400px]"
      >
        {visibleImages.map((src, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: "300px" }}
            className="transition-all duration-300"
          >
            <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-xl relative">
              <img
                src={src}
                alt={`Salle ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        <button
          ref={prevRef}
          type="button"
          className="swiper-button-prev w-auto h-auto p-0 left-2 top-1/2 absolute z-10 after:hidden focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Slide précédente"
        >
          <img
            src="/img/slider-left.svg"
            alt="Précédent"
            className="w-[100px] h-[100px]"
          />
        </button>

        <button
          ref={nextRef}
          type="button"
          className="swiper-button-next right-2 top-1/2 absolute z-10 focus:outline-none focus:ring-2 focus:ring-black after:hidden"
          aria-label="Slide suivante"
        >
          <img
            src="/img/slider-right.svg"
            alt="Suivant"
            className="w-[100px] h-[100px]"
          />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;
