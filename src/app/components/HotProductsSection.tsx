import ProductCard from "@/components/ProductCard"
import { products } from "@/mockData/products"

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
        <div className="flex">
          <div className="mr-6" style={{ width: '456px', height: '884px' }}>
            <img src="/images/jing_si.png" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-8 max-w-[963px]">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                specialPrice={product.specialPrice}
                width="296"
                height="420"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HotProductsSection