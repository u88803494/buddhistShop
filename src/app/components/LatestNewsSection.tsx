

const Items = [
  { id: 1, name: '易購', icon: '/images/icons/praise.png' },
  { id: 2, name: '食品', icon: '/images/icons/ForkKnife.png' },
  { id: 3, name: '百貨', icon: '/images/icons/storefront.png' },
  { id: 4, name: '書籍', icon: '/images/icons/bookOpenText.png' },
  { id: 5, name: '影音', icon: '/images/icons/monitorPlay.png' },
  { id: 6, name: '電子書', icon: '/images/icons/laptop.png' },
];

const LatestNewsSection = () => {
  return (
    <div className="w-full">
      {/* 上方灰色區塊 */}
      <div className="w-full h-[376px] bg-[#F2F2F2] flex items-center justify-center gap-x-6">
        {Items.map((item) => (
          <div key={item.id} className="w-[216px] h-[216px] flex flex-col items-center justify-center bg-[#D5D5D5]">
            <img src={item.icon} alt={item.name} className="w-20 h-20 mb-4" />
            <span className="text-lg font-bold text-[#787777]">{item.name}</span>
          </div>
        ))}
      </div>

      {/* 下方白色區塊 */}
      <div className=" my-20 mx-auto max-w-[1417px] w-full">
        {/* 上方標題 */}
        <div className="mb-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#A29380]">熱賣商品</div>
          <div>
            左右切按鈕
          </div>
        </div>

        {/* 活動內容 */}
        <div className="flex">
          <div className="mr-6" style={{ width: "456px", height: "884px" }}>
            左邊區塊
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-8 max-w-[963px]">
            活動內容 * 3
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNewsSection