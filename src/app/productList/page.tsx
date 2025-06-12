"use client";

import { products } from "@/mockData/products";
import { useState } from "react";
import CategorySidebar from "./components/CategorySidebar";
import ProductListHeader from "./components/ProductListHeader";
import ProductGrid from "./components/ProductGrid";
import ProductPagination from "./components/ProductPagination";

const productListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 篩選分類
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);

  // 假分頁
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(filteredProducts.length / pageSize);
  const pagedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex min-h-screen">
      {/* 左側分類選單 */}
      <div className="mt-8 mr-20">
        <CategorySidebar />
      </div>

      {/* 右側產品列表區域 */}
      <main className="mt-[86px] flex-1">
        <ProductListHeader totalProducts={filteredProducts.length} />

        {/* 產品格狀列表 */}
          <ProductGrid products={pagedProducts} />

        {/* 分頁 */}
        <div className="my-20">
        <ProductPagination currentPage={page} totalPages={totalPage} onPageChange={setPage} />
        </div>
      </main>
    </div>
  );
};

export default productListPage;
