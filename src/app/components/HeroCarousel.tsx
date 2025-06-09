"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    image: "/2025_03_01-05_15.png",
  },
  {  
    image: "/2025_03_01-05_15.png",
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[340px] md:h-[480px] flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[340px] md:h-[480px]">
              <Image
                src={banner?.image ?? ""}
                alt={banner?.image ?? ""}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-[#2d3756] mb-2 drop-shadow-lg">{banner.title}</h1>
                <h2 className="text-2xl md:text-3xl text-[#2d3756] mb-4 drop-shadow-lg">{banner.subtitle}</h2>
                <div className="text-base md:text-lg text-[#2d3756] font-medium drop-shadow-lg">
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel; 