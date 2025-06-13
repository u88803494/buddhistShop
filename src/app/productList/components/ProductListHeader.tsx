"use client";
import { useState } from "react";
import clsx from "clsx";

const filterOptions = [
  { label: "精選商品", value: "featured" },
  { label: "最新上架", value: "newest" },
  { label: "熱銷排行", value: "bestseller" },
  { label: "優惠商品", value: "discount" },
  { label: "限量商品", value: "limited" },
];

interface ProductListHeaderProps {
  totalProducts: number;
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({ totalProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row",
        "items-start lg:items-center",
        "justify-between",
        "mb-6 relative text-sm"
      )}
    >
      {/* 總商品數量計算 */}
      <span className={clsx("text-[#545454]", "mb-2 lg:mb-0")}>共 {totalProducts} 項商品</span>

      {/* 下拉選單 */}
      <div className="relative inline-block w-[108px]">
        <div
          className={clsx("flex items-center justify-between", "border border-[#B7AFA3]", "px-3 py-2 cursor-pointer")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#545454]">{selectedFilter.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A48F6B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={clsx("transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        {isOpen && (
          <ul className={clsx("absolute z-10 w-full", "border border-[#B7AFA3]", "mt-1 bg-white shadow-lg")}>
            {filterOptions.map((option) => (
              <li
                key={option.value}
                className={clsx("px-3 py-2", "hover:bg-[#F5F5F5]", "cursor-pointer text-[#545454]")}
                onClick={() => {
                  setSelectedFilter(option);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductListHeader;
