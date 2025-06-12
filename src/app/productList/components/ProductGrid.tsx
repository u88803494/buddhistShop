"use client";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
