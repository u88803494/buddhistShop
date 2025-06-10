import clsx from 'clsx';
import { ProductCategory, ProductCategoryLabels } from '@/types/product';

interface ProductTabsProps {
  onCategoryChange: (category: ProductCategory) => void;
  activeCategory?: ProductCategory;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ 
  onCategoryChange, 
  activeCategory = ProductCategory.All 
}) => {
  const categories = Object.values(ProductCategory);

  return (
    <div className="flex space-x-8">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onCategoryChange(category)}
          className={clsx(
            'pb-2 cursor-pointer text-[#787777]',
            {
              'text-[#A29380] border-b-1 border-[#A29380]': activeCategory === category,
            }
          )}
        >
          {ProductCategoryLabels[category]}
        </div>
      ))}
    </div>
  );
};

export default ProductTabs; 