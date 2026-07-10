export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  colors: string[];
  sizes: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "mmbm-statement-tees",
    name: "MMBM Statement Tees",
    price: 35,
    category: "T-Shirts",
    colors: ["Black", "White", "Black Gray", "Stone Wash Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/statement-tees/front.jpg",
      "/images/products/statement-tees/back.jpg",
      "/images/products/statement-tees/full.jpg",
      "/images/products/statement-tees/model-front.jpg",
      "/images/products/statement-tees/model-back.jpg",
    ],
  },
];