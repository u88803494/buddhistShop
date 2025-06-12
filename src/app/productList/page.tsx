"use client";

import { products } from "@/mockData/products";
import { useState } from "react";
import CategorySidebar from "./components/CategorySidebar";
import ProductListHeader from "./components/ProductListHeader";
import ProductGrid from "./components/ProductGrid";
import ProductPagination from "./components/ProductPagination";
import clsx from "clsx";

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
    <div className={clsx(
      "flex flex-col sm:flex-row",
      "min-h-screen"
    )}>
      <CategorySidebar />
      <main className={clsx(
        "mt-4 sm:mt-[86px]",
        "flex-1",
        "px-5 sm:px-0"
      )}>
        <ProductListHeader totalProducts={filteredProducts.length} />
        <ProductGrid products={pagedProducts} />
        <div className="my-20">
          <ProductPagination currentPage={page} totalPages={totalPage} onPageChange={setPage} />
        </div>
      </main>
    </div>
  );
};

export default productListPage;
