"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const categories = [
  {
    label: "食品 Foods",
    value: "Foods",
    sub: [
      "飯麵湯系列",
      "穀粉系列",
      "休閒系列",
      "餅乾系列",
      "淨斯茶系列",
      "調理系列",
      "菌草系列",
      "本草系列",
      "愛保健系列",
    ],
  },
  {
    label: "書籍 Books",
    value: "Books",
    sub: ["靜思人文", "心靈成長", "文學作品", "教育叢書", "藝術書籍", "生活智慧", "紀實文學"],
  },
  {
    label: "影音 Media",
    value: "Media",
    sub: ["紀錄片", "音樂專輯", "講座錄影", "靜思語音", "教育影片", "藝術表演"],
  },
  {
    label: "百貨 Groceries",
    value: "Groceries",
    sub: ["居家用品", "文創商品", "手工藝品", "環保用品", "禮品套裝", "季節特選", "生活雜貨"],
  },
];

const CategorySidebar = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 手機版選單按鈕 */}
      <div className={clsx("mb-4 mx-5", "sm:hidden")}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx("w-full py-2 px-4", "bg-[#F2F2F2] text-[#545454]", "flex items-center justify-between")}
        >
          <span>商品分類</span>
          <span className={clsx("transition-transform duration-300", isMobileMenuOpen ? "rotate-180" : "")}>▼</span>
        </button>
      </div>

      {/* 側邊欄 */}
      <aside
        className={clsx(
          // 手機版顯示邏輯
          isMobileMenuOpen ? "block" : "hidden",
          "sm:block",
          // 寬度
          "w-full",
          "sm:w-56",
          // 背景和高度
          "bg-white h-fit select-none",
          // 間距
          "mx-5 sm:mx-0 sm:mt-8 sm:mr-20"
        )}
      >
        {/* 麵包屑 */}
        <div className="mb-8">
          <span className="text-[#A29380]">
            <span className="text-[#787777]">首頁 ｜</span>
            <span>產品</span>
          </span>
        </div>
        {/* 分類列表 */}
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={cat.value}>
              <button
                className={clsx(
                  "flex items-center",
                  "w-full text-left",
                  "py-1.5 px-0",
                  "border-0 bg-transparent",
                  "text-[#A48F6B] font-medium text-[17px]",
                  "mb-1",
                  { "opacity-70": openIdx !== idx }
                )}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                type="button"
              >
                <span>{cat.label}</span>
                {cat.sub.length > 0 && (
                  <Image
                    src="/images/icons/up_arrow.png"
                    alt="展開/收合箭頭"
                    width={16}
                    height={16}
                    className={clsx("ml-2 transition-transform duration-300", {
                      "rotate-0": openIdx === idx,
                      "rotate-180": openIdx !== idx,
                    })}
                  />
                )}
              </button>

              {/* 分隔線 */}
              <div className="border-b border-[#F2F2F2] mb-1" />
              {/* 子分類 */}
              {cat.sub.length > 0 && openIdx === idx && (
                <ul className="pl-2 my-2 space-y-2">
                  {cat.sub.map((sub, subIdx) => (
                    <li key={subIdx} className="py-2 text-[#545454] cursor-pointer hover:text-[#A48F6B]">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default CategorySidebar;
