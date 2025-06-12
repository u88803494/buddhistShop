import { ProductCategory } from "@/types/product";
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "【新品上市】以愛織夢─靜思閱讀書軒的美與善與智慧之光",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/001.png",
    category: ProductCategory.Books,
  },
  {
    id: 2,
    name: "【熱銷推薦】靜思人文─心靈的滋養與生命的深層啟迪",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/books/002.png",
    category: ProductCategory.Books,
  },
  {
    id: 3,
    name: "【限量發售】靜思茶道精選禮盒─傳統與自然的完美結合",
    price: "$450",
    specialPrice: "HK$360",
    image: "/images/grocery/001.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 4,
    name: "【經典收藏】靜思詩詞全集─文化遺產的詩意傳承",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/003.png",
    category: ProductCategory.Books,
  },
  {
    id: 5,
    name: "【自然養生】靜思草本飲品─健康與自然的和諧享受",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/grocery/002.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 6,
    name: "【智慧之書】靜思哲學導讀─心靈覺醒的深度探索",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/004.png",
    category: ProductCategory.Books,
  },
  {
    id: 7,
    name: "【手工珍品】靜思陶瓷杯組",
    price: "$320",
    specialPrice: "HK$256",
    image: "/images/grocery/003.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 8,
    name: "【心靈旅程】靜思旅行筆記與圖畫",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/books/001.png",
    category: ProductCategory.Books,
  },
  {
    id: 9,
    name: "【特產禮品】靜思海鹽與手工包裝",
    price: "$250",
    specialPrice: "HK$200",
    image: "/images/grocery/004.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 10,
    name: "【文化瑰寶】靜思繪本故事集",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/002.png",
    category: ProductCategory.Books,
  },
  {
    id: 11,
    name: "【健康選擇】靜思蜂蜜罐",
    price: "$280",
    specialPrice: "HK$224",
    image: "/images/grocery/001.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 12,
    name: "【啟迪讀本】靜思自然科學導論",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/books/003.png",
    category: ProductCategory.Books,
  },
  {
    id: 13,
    name: "【純手工】靜思手工皂禮盒",
    price: "$220",
    specialPrice: "HK$176",
    image: "/images/grocery/002.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 14,
    name: "【靜思經典】心靈詩選集",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/004.png",
    category: ProductCategory.Books,
  },
  {
    id: 15,
    name: "【自然滋補】靜思草藥禮包",
    price: "$300",
    specialPrice: "HK$240",
    image: "/images/grocery/003.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 16,
    name: "【智慧導引】靜思哲思錄",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/books/001.png",
    category: ProductCategory.Books,
  },
  {
    id: 17,
    name: "【限時優惠】靜思茶葉罐",
    price: "$350",
    specialPrice: "HK$280",
    image: "/images/grocery/004.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 18,
    name: "【人文之旅】靜思旅行日記",
    price: "$420",
    specialPrice: "HK$336",
    image: "/images/books/002.png",
    category: ProductCategory.Books,
  },
  {
    id: 19,
    name: "【健康禮品】靜思養生套裝",
    price: "$400",
    specialPrice: "HK$320",
    image: "/images/grocery/001.png",
    category: ProductCategory.Grocery,
  },
  {
    id: 20,
    name: "【靜思珍藏】自然文學",
    price: "$378",
    specialPrice: "HK$302",
    image: "/images/books/003.png",
    category: ProductCategory.Books,
  },
  ...Array.from({ length: 100 }, (_, i) => {
    const categories = [
      ProductCategory.Books,
      ProductCategory.Grocery,
      ProductCategory.Books,
      ProductCategory.Grocery
    ];

    const bookNames = [
      "靜思人文探索",
      "心靈成長之旅",
      "智慧之光",
      "生命的意義",
      "文學與哲學",
      "教育的力量",
      "藝術與心靈",
      "生活智慧錄",
      "紀實文學選",
      "靈性成長指南"
    ];

    const groceryNames = [
      "手工藝品精選",
      "環保生活用品",
      "文創商品系列",
      "季節特選禮盒",
      "居家生活雜貨",
      "健康養生套裝",
      "手工皂禮盒",
      "茶葉精選",
      "天然調味品",
      "生活美學用品"
    ];

    const category = categories[i % 4];
    const basePrice = Math.floor(Math.random() * 300) + 200;
    const specialDiscount = Math.floor(basePrice * 0.8);

    const bookImages = [
      "/images/books/001.png",
      "/images/books/002.png", 
      "/images/books/003.png", 
      "/images/books/004.png"
    ];

    const groceryImages = [
      "/images/grocery/001.png",
      "/images/grocery/002.png", 
      "/images/grocery/003.png", 
      "/images/grocery/004.png",
      "/images/grocery/005.png"
    ];

    return {
      id: i + 21,
      name: category === ProductCategory.Books 
        ? `【靜思文集】${bookNames[i % bookNames.length]}` 
        : `【生活選品】${groceryNames[i % groceryNames.length]}`,
      price: `$${basePrice}`,
      specialPrice: `HK$${specialDiscount}`,
      image: category === ProductCategory.Books 
        ? bookImages[i % bookImages.length]
        : groceryImages[i % groceryImages.length],
      category: category
    };
  })
];
