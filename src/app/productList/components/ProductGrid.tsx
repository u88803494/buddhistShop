"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-between lg:grid lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          price={product.price}
          specialPrice={product.specialPrice}
          title={product.name}
          width={isMobile ? "170" : "375"}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
