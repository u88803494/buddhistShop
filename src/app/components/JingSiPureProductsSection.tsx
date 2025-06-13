"use client";

import { products } from "@/mockData/products";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/bases/Button";
import { useRouter } from "next/navigation";

const JingSiProductsSection = () => {
  const router = useRouter();

  return (
    <>
      {/* 上方灰色區塊 */}
      <div className="relative w-full h-auto min-h-[500px] sm:h-[350px] bg-[#F2F2F2] flex items-center justify-center overflow-hidden py-8 sm:py-0">
        {/* 左上圓形裝飾 - 只在桌面版顯示 */}
        <img
          src="/images/jing_si_prue_cycle_left.png"
          alt="circle left"
          className="hidden sm:block absolute left-0 top-0 z-10"
        />
        {/* 左側半圓裝飾 - 只在桌面版顯示 */}
        <img
          src="/images/jing_si_prue_left.png"
          alt="left decoration"
          className="hidden sm:block absolute left-0 top-[70px] z-10"
        />
        {/* 右上圓形裝飾 - 只在桌面版顯示 */}
        <img
          src="/images/jing_si_prue_cycle_right.png"
          alt="circle right"
          className="hidden sm:block absolute right-0 bottom-0 z-10"
        />
        {/* 右側半圓裝飾 - 只在桌面版顯示 */}
        <img
          src="/images/jing_si_prue_right.png"
          alt="right decoration"
          className="hidden sm:block absolute right-0 top-0 z-10"
        />

        {/* 主內容 */}
        <div className="max-w-[1417px] w-full flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8 px-4 sm:px-0">
          <div className="w-[280px] sm:w-[350px] h-[182px] sm:h-[228px] shadow-lg border border-white rounded-md overflow-hidden">
            <img src="/images/jing_si_prue_image.png" alt="Jing Si Pure" className="w-full h-full object-cover" />
          </div>
          {/* 右側文字內容 */}
          <div className="flex flex-col justify-center text-left max-w-[900px]">
            <div className="text-xl sm:text-2xl font-bold text-[#545454] mb-4 sm:mb-4 text-center sm:text-left">
              淨斯人間
            </div>
            <div className="text-[#939295] text-sm sm:text-base leading-6 sm:leading-7 space-y-3 sm:space-y-2">
              <p className="text-center sm:text-left">
                祝福力量大，對水說好話，會展現美麗的結晶，對米貼「謝謝」兩字，會散發出糯香味；
              </p>
              <p className="text-center sm:text-left">
                靜思書軒，薏仁粉、薏豆粉、二十二味五穀粉…每一顆豆子，都是在佛號聲中歷練，那是來自靜思精舍師父們的祝福。
              </p>
              <p className="text-center sm:text-left">
                靜思茶，新鮮茶葉切製，冷熱皆宜，從種茶的那一刻起，都是最虔誠的付出，那是來自大地的祝福。
              </p>
              <p className="text-center sm:text-left">信念孕育生力量，我們相信每一人、事、物，都應該受到祝福。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 下方白色區塊 */}
      <div className="my-20 mx-auto max-w-[1417px] w-full">
        {/* 上方標題 */}
        <div className="mb-8 flex items-center">
          <div className="text-2xl font-bold text-[#A29380]">淨斯商品</div>
        </div>

        {/* 商品內容 */}
        <div className="mb-10 grid grid-cols-4 gap-x-6 gap-y-8">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              title={p.name}
              price={p.price}
              specialPrice={p.specialPrice}
              width="336"
            />
          ))}
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
