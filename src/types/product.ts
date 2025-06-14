export enum ProductCategory {
  All = "all",
  Books = "books",
  Grocery = "grocery",
  Media = "media",
}

export const ProductCategoryLabels: Record<ProductCategory, string> = {
  [ProductCategory.All]: "全部",
  [ProductCategory.Books]: "書籍",
  [ProductCategory.Grocery]: "百貨",
  [ProductCategory.Media]: "影音",
};

export interface Product {
  id: number;
  name: string;
  price: string;
  specialPrice: string;
  image: string;
  category: string;
}
