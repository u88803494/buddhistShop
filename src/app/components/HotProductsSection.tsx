
const HotProductsSection = () => {
  return (
    <>
      {/* 上方灰色區塊 */}
      <div className="w-full h-72 bg-[#F2F2F2] flex flex-col items-center justify-center gap-2">
        <h3 className="mb-8 text-2xl font-bold text-[#545454]">
          跨越時空 在人與人之間蔓延
        </h3>
        <small className="flex flex-col items-center justify-center text-sm text-[#939295]">
          <p>「靜思」緣起</p>
          <p>原來，一個心念，有無盡的力量……</p>
        </small>
      </div>

      {/* 下方白色區塊 */}
      <div className=" my-20 mx-auto max-w-[1417px] w-full">
        {/* 上方標題 */}
        <div className="mb-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#A29380]">
          熱賣商品
          </div>
          <div>
            tab
          </div>
        </div>

        {/* 商品內容 */}
        <div className="flex justify-between items-center">
          <div className="">
            <img src="/images/jing_si.png" alt="" />
          </div>
          <div>
            產品系列
          </div>
        </div>
        123
      </div>
    </>
  )
}

export default HotProductsSection