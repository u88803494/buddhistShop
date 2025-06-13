"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductTabs from "@/components/ProductTabs";
import { ProductCategory } from "@/types/product";
import { products } from "@/mockData/products";

const HotProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.All);

  const filteredProducts =
    activeCategory === ProductCategory.All
      ? products.slice(0, 6)
      : products.filter((product) => product.category.toLowerCase() === activeCategory).slice(0, 6);

  return (
    <>
      {/* 上方灰色區塊 */}
      <div className="w-full h-72 bg-[#F2F2F2] flex flex-col items-center justify-center gap-2">
        <h3 className="mb-8 text-2xl sm:text-[40px] text-[#545454]">跨越時空 在人與人之間蔓延</h3>
        <small className="flex flex-col items-center justify-center text-sm sm:text-xs text-[#939295]">
          <p>「靜思」緣起</p>
          <p>原來，一個心念，有無盡的力量……</p>
        </small>
      </div>

      {/* 下方白色區塊 */}
      <div className="my-20 mx-auto w-full max-w-[1417px] px-5 sm:px-0">
        {/* 上方標題 */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-[#A29380] text-center sm:text-left w-full">熱賣商品</div>
          <ProductTabs onCategoryChange={(category) => setActiveCategory(category)} activeCategory={activeCategory} />
        </div>

        {/* 商品內容 */}
        <div className="flex flex-col sm:flex-row">
          <div className="w-full mb-6 sm:mb-0 sm:mr-6 hidden sm:block">
            <img src="/images/jing_si.png" alt="" className="w-full h-auto sm:w-[456px] sm:h-[884px] object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8 w-full max-w-full sm:max-w-[963px] px-0 sm:px-0 place-items-center">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                specialPrice={product.specialPrice}
                width="296"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProductsSection;
