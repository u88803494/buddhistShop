# Buddhist Project 佛教專案
說明文區分中英文版本。

## 專案需求

### 背景
本專案基於 Figma 設計稿實作響應式網站，著重於創建能夠在不同螢幕尺寸下良好運作的自適應介面。

### 需求
根據 Figma 設計稿實作響應式設計
為不同螢幕尺寸創建自適應介面
專注於桌面版和手機版佈局

### 瀏覽器支援
桌面版 Chrome（最新版）
手機版 Safari（最新版）
手機版 Chrome（最新版）

### 實作決策

#### 斷點選擇
桌面版：1024px 以上
原因：桌面顯示器常見的最小寬度
實作：完整導航選單，4列網格佈局

手機版：1023px 以下
原因：適合大多數手機裝置
實作：漢堡選單，單列佈局

#### 設計方法
以桌面版為優先，並進行手機版適配
在不同螢幕尺寸下保持視覺層級
為手機用戶優化觸控目標
確保所有裝置上的內容可讀性

## 專案結構

```
src/
├── app/                    # Next.js 應用目錄
│   ├── layout.tsx         # 根佈局組件
│   ├── globals.css        # 全局樣式
│   ├── page.tsx           # 首頁
│   └── productList/       # 商品列表頁面
├── components/            # 可重用組件
│   ├── Nav.tsx           # 導航組件
│   ├── Footer.tsx        # 頁尾組件
│   ├── ProductCard.tsx   # 商品卡片組件
│   ├── ProductTabs.tsx   # 商品標籤組件
│   └── bases/            # 基礎組件
├── types/                # TypeScript 類型定義
├── mockData/            # 開發用模擬數據
└── lib/                 # 工具函數和庫
```

## 響應式設計

### 桌面版 (1024px 以上)

#### 核心功能
帶有懸停下拉選單的導航欄
商品分類標籤與篩選功能
4列商品網格佈局
商品 hover 時，會顯示額外選項。

#### 視覺優化
固定導航欄
頂部社群媒體連結
互動元素懸停效果
較大字體和間距
最大內容寬度 1440px

### 手機版 (1023px 以下)

#### 核心功能
漢堡選單導航
商品瀏覽左右滑動功能
商品分類標籤
單列商品佈局

#### 視覺優化
優化觸控目標（最小 44px）
簡化佈局
減小字體大小
全寬內容
垂直堆疊頁尾

## 開始使用

首先，運行開發伺服器：

```bash
pnpm dev
```

使用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

---

## Project Requirements

### Background
This project is a responsive website implementation based on a Figma design, focusing on creating an adaptive interface that works well across different screen sizes.

### Requirements
Implement responsive design based on Figma mockup
Create adaptive interface for different screen sizes
Focus on desktop and mobile layouts

### Browser Support
Desktop Chrome (Latest)
Mobile Safari (Latest)
Mobile Chrome (Latest)

### Implementation Decisions

#### Breakpoint Selection
Desktop: 1024px and above
Reason: Common minimum width for desktop displays
Implementation: Full navigation menu, 4-column grid layout

Mobile: 1023px and below
Reason: Optimal for most mobile devices
Implementation: Hamburger menu, single column layout

#### Design Approach
Desktop-first approach with mobile adaptations
Maintain visual hierarchy across screen sizes
Optimize touch targets for mobile users
Ensure content readability on all devices

## Project Structure

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
│   └── bases/            # Base components
├── types/                # TypeScript type definitions
├── mockData/            # Mock data for development
└── lib/                 # Utility functions and libraries
```

## Responsive Design

### Desktop (1024px and above)

#### Core Features
Navigation bar with hover dropdown menu
Product category tabs with filtering
4-column product grid layout

#### Visual Enhancements
Sticky navigation bar
Social media links in top bar
Hover effects on interactive elements
Larger font sizes and spacing
Maximum content width of 1440px

### Mobile (1023px and below)

#### Core Features
Hamburger menu navigation
Horizontal swipe for product browsing
Product category tabs
Single column product layout

#### Visual Optimizations
Optimized touch targets (44px minimum)
Simplified layouts
Reduced font sizes
Full-width content
Vertical footer stack

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
