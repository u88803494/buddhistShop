import React, { useState } from 'react';

export type ProductCategory = 'all' | 'books' | 'goods' | 'media';

interface ProductTabsProps {
  onCategoryChange: (category: ProductCategory) => void;
  activeCategory?: ProductCategory;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ 
  onCategoryChange, 
  activeCategory = 'all' 
}) => {
  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: '全部' },
    { key: 'books', label: '書籍' },
    { key: 'goods', label: '百貨' },
    { key: 'media', label: '影音' }
  ];

  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`
            px-4 py-2 rounded-lg transition-colors duration-300
            ${activeCategory === category.key 
              ? 'bg-[#A29380] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProductTabs; 