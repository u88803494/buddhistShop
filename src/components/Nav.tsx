import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const icons = {
  search: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  user: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg>
  ),
  cart: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  ),
  facebook: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ),
};

const menuItems = [
  {
    label: "靜思人文 JingSi Culture",
    links: [
      { label: "理念 Philosophy", href: "#" },
      { label: "活動 Events", href: "#" },
    ],
  },
  {
    label: "產品 Products",
    links: [
      { label: "全部商品 All Products", href: "/products" },
      { label: "新品 New Arrivals", href: "#" },
    ],
  },
  {
    label: "推薦 Suggests",
    links: [
      { label: "熱銷商品 Hot", href: "#" },
      { label: "精選推薦 Picks", href: "#" },
    ],
  },
  {
    label: "緣起 Origin",
    links: [
      { label: "品牌故事 Story", href: "#" },
      { label: "關於我們 About", href: "/about" },
    ],
  },
];

const Nav = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="w-full h-10 bg-[#a89e8a] flex items-center justify-end px-6 text-xs text-white">
        <span className="mr-2">社群Follow：</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
          {icons.facebook}
        </a>
      </div>
      {/* Main Navbar */}
      <nav className="w-full border-b bg-[#e5ded3] sticky top-0 z-50 h-18 flex items-center">
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          {/* LOGO */}
          <div className="flex-1 min-w-[120px] flex items-center">
            <img src="/logo_navbar.png" alt="logo" className="h-10 w-auto" />
          </div>
          {/* Menu */}
          <div className="flex-[2] flex items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="bg-transparent text-base font-medium px-3 py-2">
                      {item.label}
                    </NavigationMenuTrigger>
                    {/* FIXME: 下拉選單位置錯誤 */}
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-2 min-w-[160px] p-2">
                        {item.links.map((link) => (
                          <li key={link.label}>
                            <NavigationMenuLink asChild>
                              <Link href={link.href}>{link.label}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Icons */}
          <div className="flex-1 min-w-[120px] flex items-center justify-end gap-6">
            <button aria-label="search" className="hover:text-primary">{icons.search}</button>
            <button aria-label="user" className="hover:text-primary">{icons.user}</button>
            <button aria-label="cart" className="hover:text-primary">{icons.cart}</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav; 