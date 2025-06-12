"use client";

import Image from "next/image";

const CustomerServiceButton = () => {
  // 捲動到頂部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed z-50 right-0 bottom-[560px] flex flex-col items-center bg-[#F5F5F5] border-l border-[#D5D5D5] px-4 py-3 rounded-tl-xl rounded-bl-xl shadow-md" style={{width: 72}}>
      {/* 聯絡客服 直式文字 */}
      <div className="text-[#545454] text-lg leading-tight tracking-widest mb-2 select-none" style={{writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: 2}}>聯絡客服</div>
      {/* whatsapp icon */}
      <Image src="/images/icons/whatsapp.png" alt="whatsapp" width={32} height={32} className="mx-auto my-1" />
      {/* 分隔線 */}
      <div className="w-10 border-t border-[#545454] my-2 mx-auto" />
      {/* 上箭頭icon與TOP */}
      <button onClick={scrollToTop} className="flex flex-col items-center group focus:outline-none">
        <Image src="/images/icons/up_arrow.png" alt="top" width={28} height={28} className="mx-auto group-hover:-translate-y-1 transition-transform duration-150" />
        <span className="text-[#545454] text-lg mt-1 tracking-widest">TOP</span>
      </button>
    </div>
  );
};

export default CustomerServiceButton;
