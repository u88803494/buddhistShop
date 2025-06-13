# Buddhist Project 佛教專案

## Project Requirements 專案需求

### Background 背景
This project is a responsive website implementation based on a Figma design, focusing on creating an adaptive interface that works well across different screen sizes.

本專案基於 Figma 設計稿實作響應式網站，著重於創建能夠在不同螢幕尺寸下良好運作的自適應介面。

### Requirements 需求
- Implement responsive design based on Figma mockup
  根據 Figma 設計稿實作響應式設計
- Create adaptive interface for different screen sizes
  為不同螢幕尺寸創建自適應介面
- Focus on desktop and mobile layouts
  專注於桌面版和手機版佈局

### Browser Support 瀏覽器支援
- Desktop Chrome (Latest)
  桌面版 Chrome（最新版）
- Mobile Safari (Latest)
  手機版 Safari（Latest）
- Mobile Chrome (Latest)
  手機版 Chrome（Latest）

### Implementation Decisions 實作決策

#### Breakpoint Selection 斷點選擇
- Desktop: 1024px and above
  桌面版：1024px 以上
  - Reason: Common minimum width for desktop displays
    原因：桌面顯示器常見的最小寬度
  - Implementation: Full navigation menu, 4-column grid layout
    實作：完整導航選單，4列網格佈局

- Mobile: 1023px and below
  手機版：1023px 以下
  - Reason: Optimal for most mobile devices
    原因：適合大多數手機裝置
  - Implementation: Hamburger menu, single column layout
    實作：漢堡選單，單列佈局

#### Design Approach 設計方法
- Desktop-first approach with mobile adaptations
  以桌面版為優先，並進行手機版適配
- Maintain visual hierarchy across screen sizes
  在不同螢幕尺寸下保持視覺層級
- Optimize touch targets for mobile users
  為手機用戶優化觸控目標
- Ensure content readability on all devices
  確保所有裝置上的內容可讀性

## Project Structure 專案結構

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── globals.css        # Global styles
│   ├── page.tsx           # Home page
│   └── productList/       # Product list page
├── components/            # Reusable components
│   ├── Nav.tsx           # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── ProductCard.tsx   # Product card component
│   ├── ProductTabs.tsx   # Product tabs component
│   ├── bases/           # Base components
│   └── ui/              # UI components
├── types/                # TypeScript type definitions
├── mockData/            # Mock data for development
└── lib/                 # Utility functions and libraries
```

## Responsive Design 響應式設計

### Desktop (1024px and above) 桌面版 (1024px 以上)

#### Core Features 核心功能
- Navigation bar with hover dropdown menu
  帶有懸停下拉選單的導航欄
- Product category tabs with filtering
  商品分類標籤與篩選功能
- 4-column product grid layout
  4列商品網格佈局

#### Visual Enhancements 視覺優化
- Sticky navigation bar
  固定導航欄
- Social media links in top bar
  頂部社群媒體連結
- Hover effects on interactive elements
  互動元素懸停效果
- Larger font sizes and spacing
  較大字體和間距
- Maximum content width of 1440px
  最大內容寬度 1440px

### Mobile (1023px and below) 手機版 (1023px 以下)

#### Core Features 核心功能
- Hamburger menu navigation
  漢堡選單導航
- Horizontal swipe for product browsing
  商品瀏覽左右滑動功能
- Product category tabs
  商品分類標籤
- Single column product layout
  單列商品佈局

#### Visual Optimizations 視覺優化
- Optimized touch targets (44px minimum)
  優化觸控目標（最小 44px）
- Simplified layouts
  簡化佈局
- Reduced font sizes
  減小字體大小
- Full-width content
  全寬內容
- Vertical footer stack
  垂直堆疊頁尾

## Getting Started 開始使用

First, run the development server: 首先，運行開發伺服器：

```bash
npm run dev
# or 或
yarn dev
# or 或
pnpm dev
# or 或
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
使用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
