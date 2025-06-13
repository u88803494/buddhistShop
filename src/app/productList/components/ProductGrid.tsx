"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import clsx from "clsx";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={clsx("grid grid-cols-1 lg:grid-cols-4", "gap-4 lg:gap-6")}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          price={product.price}
          specialPrice={product.specialPrice}
          title={product.name}
          width="220"
        />
      ))}
    </div>
  );
};

export default ProductGrid;
