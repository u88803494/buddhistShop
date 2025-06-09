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
    <section className="relative w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[480px] flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[180px] sm:h-[260px] md:h-[340px] lg:h-[480px]">
              <Image
                src={banner?.image ?? ""}
                alt={banner?.image ?? ""}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel; 