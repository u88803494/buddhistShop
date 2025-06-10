import React from "react";

const footerLinks = [
  {
    title: "連結",
    items: [
      { label: "靜思人文（理念）", href: "#" },
      { label: "靜思書軒（商舖）", href: "#" },
      { label: "智慧廚房／食譜", href: "#" },
      { label: "臉書 Facebook", href: "#" },
      { label: "海外購物網", href: "#" },
    ],
  },
  {
    title: "會員",
    items: [
      { label: "會員專區／加入會員", href: "#" },
      { label: "會員權益／購物流程", href: "#" },
      { label: "取貨/退貨須知", href: "#" },
      { label: "資安密語", href: "#" },
    ],
  },
  {
    title: "諮詢",
    items: [
      { label: "聯絡我們", href: "#" },
      { label: "大宗採購", href: "#" },
      { label: "精選書刊•愛灑座", href: "#" },
      { label: "隱私權政策", href: "#" },
      { label: "WhatsApp 9140 3055", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#a89e8a] pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 pb-6">
        {/* LOGO 與公司名稱 */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
          <img src="images/logo_footer.png" alt="logo" className="h-16 mb-2" />
          <div className="text-white text-lg font-semibold tracking-wide">靜思人文股份有限公司</div>
        </div>
        {/* 連結區塊 */}
        <div className="flex flex-1 w-full md:w-2/3 justify-between gap-8">
          {footerLinks.map((col) => (
            <div key={col.title} className="min-w-[120px]">
              <div className="text-white text-base font-bold mb-3 border-b border-white/30 pb-1">{col.title}</div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white/90 hover:text-white text-sm transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* 底部深色區塊 */}
      <div className="w-full bg-[#595652] text-white text-xs text-center py-4 px-2">
        慈濟文化志業慈善香港有限公司 TZU CHI CULTURAL MISSION HONG KONG Ltd.<br />
        香港靜思小築線上購物平台，有權決定商品、核售、修改或暫停活動，亦有相關活動事項做出最終解釋
      </div>
    </footer>
  );
};

export default Footer; 