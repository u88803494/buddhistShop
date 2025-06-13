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
      <div className="relative w-full bg-[#F2F2F2] flex flex-col items-center justify-center gap-2 px-5 py-8 lg:h-[310px] lg:px-0">
        {/* 左上裝飾圖 */}
        <img
          src="/images/jing_si_clip_left.png"
          alt="Left Decoration"
          className="absolute -left-6 top-0 h-36 w-36 lg:h-full lg:w-auto object-contain"
        />
        {/* 右下裝飾圖 */}
        <img
          src="/images/jing_si_clip_right.png"
          alt="Right Decoration"
          className="absolute -right-6 bottom-0 h-36 w-36 lg:h-full lg:w-auto object-contain"
        />

        <h3 className="mb-4 text-xl lg:text-2xl text-[#545454] z-10 text-center">「靜思」緣起</h3>
        <div className="flex flex-col items-center justify-center text-sm text-[#939295] z-10 gap-2">
          <p className="max-w-full lg:max-w-[968px] leading-relaxed text-center">
            原來，一個心念，有無盡的力量……證嚴法師出家前自號「靜思」，乃為提醒自己，時時刻刻靜心思考人生方向，蘊育了慈濟的根本思想、靜思文化的由來。
          </p>
          <p className="max-w-full lg:max-w-[968px] leading-relaxed text-center">
            在靜思書軒，所有的心靈觸動，都訴說著一個真實的信念， 一個不變的堅持，那是來自證嚴法師的一念初心。
          </p>
        </div>
      </div>

      {/* 下方白色區塊 */}
      <div className="my-20 mx-auto max-w-[1417px] w-full px-5 lg:px-0">
        {/* 上方標題與 Tabs */}
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-[#A29380] text-center lg:text-left w-full">
            靜思產品
            <br className="lg:hidden" />
          </div>
          <ProductTabs onCategoryChange={(category) => setActiveCategory(category)} activeCategory={activeCategory} />
        </div>

        {/* 商品內容 */}
        {/* 手機版：橫向滑動 */}
        <div className="flex lg:hidden mb-15 w-full overflow-x-auto pb-2">
          <div className="flex flex-row flex-nowrap gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="min-w-[280px]">
                <ProductCard
                  image={product.image}
                  title={product.name}
                  price={product.price}
                  specialPrice={product.specialPrice}
                  width="280"
                />
              </div>
            ))}
          </div>
        </div>
        {/* 桌機版：原本 grid */}
        <div className="hidden lg:flex mb-15">
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
          <Button onClick={() => router.push("/productList")}>更多商品</Button>
        </div>
      </div>
    </>
  );
};

export default JingSiProductsSection;
