"use client";

import clsx from "clsx";
import Image from "next/image";

const CustomerServiceButton = () => {
  // 捲動到頂部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={clsx(
        "fixed z-50 right-0 bottom-[560px]",
        "flex flex-col items-center",
        "bg-[#F2F2F2]",
        "w-14 px-4 py-3",
        "hidden sm:flex"
      )}
    >
      {/* 聯絡客服 直式文字 */}
      <div
        className="text-[#545454] text-lg leading-tight tracking-widest mb-2 select-none"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: 2 }}
      >
        聯絡客服
      </div>
      {/* whatsapp icon */}
      <Image src="/images/icons/whatsapp.png" alt="whatsapp" width={32} height={32} className="mx-auto my-1" />
      {/* 分隔線 */}
      <div className="w-10 border-t border-[#545454] my-2 mx-auto" />
      {/* 上箭頭icon與TOP */}
      <button onClick={scrollToTop} className="flex flex-col items-center group focus:outline-none">
        <Image
          src="/images/icons/back_to_top.png"
          alt="top"
          width={30}
          height={48}
          className="mx-auto group-hover:-translate-y-1 transition-transform duration-150"
        />
      </button>
    </div>
  );
};

export default CustomerServiceButton;
