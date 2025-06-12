"use client";

import ProductTabs from "@/components/ProductTabs";
import { useState } from "react";
import { ProductCategory } from "@/types/product";
import { products } from "@/mockData/products";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/bases/Button";
import { useRouter } from "next/navigation";

const JingSiProductsSection = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.All);

  const filteredProducts =
    activeCategory === ProductCategory.All
      ? products.slice(0, 4)
      : products.filter((product) => product.category.toLowerCase() === activeCategory).slice(0, 4);
  return (
    <>
      {/* 上方灰色區塊 */}
      <div className="relative w-full h-[310px] bg-[#F2F2F2] flex flex-col items-center justify-center gap-2">
        {/* 左側裝飾圖 */}
        <img 
          src="/images/jing_si_clip_left.png" 
          alt="Left Decoration" 
          className="absolute left-0 top-0 h-full object-contain"
        />
        
        {/* 右側裝飾圖 */}
        <img 
          src="/images/jing_si_clip_right.png" 
          alt="Right Decoration" 
          className="absolute right-0 top-0 h-full object-contain"
        />

        <h3 className="mb-8 text-2xl text-[#545454] z-10">「靜思」緣起</h3>
        <div className="flex flex-col items-center justify-center text-sm text-[#939295] z-10">
          <p className="max-w-[968px]">
            原來，一個心念，有無盡的力量……證嚴法師出家前自號「靜思」，乃為提醒自己，時時刻刻靜心思考人生方向，蘊育了慈濟的根本思想、靜思文化的由來。
          </p>
          <p className="max-w-[968px]">
            在靜思書軒，所有的心靈觸動，都訴說著一個真實的信念， 一個不變的堅持，那是來自證嚴法師的一念初心。
          </p>
        </div>
      </div>

      {/* 下方白色區塊 */}
      <div className=" my-20 mx-auto max-w-[1417px] w-full">
        {/* 上方標題 */}
        <div className="mb-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#A29380]">靜思產品</div>
          <ProductTabs onCategoryChange={(category) => setActiveCategory(category)} activeCategory={activeCategory} />
        </div>

        {/* 商品內容 */}
        <div className="flex mb-15">
          <div className="min-h-[472px] grid grid-cols-4 gap-x-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                specialPrice={product.specialPrice}
                width="336"
              />
            ))}
          </div>
        </div>

        {/* 更多商品按鈕 */}
        <div className="flex justify-center">
          <Button onClick={() => router.push('/productList')}>更多商品</Button>
        </div>
      </div>
    </>
  );
};

export default JingSiProductsSection;
