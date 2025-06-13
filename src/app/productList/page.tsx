"use client";

import { products } from "@/mockData/products";
import { useState } from "react";
import CategorySidebar from "./components/CategorySidebar";
import ProductListHeader from "./components/ProductListHeader";
import ProductGrid from "./components/ProductGrid";
import ProductPagination from "./components/ProductPagination";
import clsx from "clsx";

const ProductListPage = () => {
  // 假分頁
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(products.length / pageSize);
  const pagedProducts = products.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className={clsx("flex flex-col lg:flex-row", "min-h-screen")}>
      <CategorySidebar />
      <main className={clsx("mt-4 lg:mt-[86px]", "flex-1", "px-5 lg:px-0")}>
        <ProductListHeader totalProducts={products.length} />
        <ProductGrid products={pagedProducts} />
        <div className="my-20">
          <ProductPagination currentPage={page} totalPages={totalPage} onPageChange={setPage} />
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
