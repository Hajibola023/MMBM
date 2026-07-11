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
  {
    id: 2,
    slug: "mmbm-tank-top",
    name: "MMBM Tank Top",
    price: 25,
    category: "Tank Tops",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/tank-top/front.jpg",
      "/images/products/tank-top/back.jpg",
      "/images/products/tank-top/full.jpg",
      "/images/products/tank-top/model-white.jpg",
    ],
  },
  {
    id: 3,
    slug: "mmbm-members-only-tees",
    name: "MMBM Members Only Tees",
    price: 40,
    category: "T-Shirts",
    colors: ["Black", "White", "Black Gray", "Stone Wash Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/members-only-tees/front.jpg",
      "/images/products/members-only-tees/back.jpg",
      "/images/products/members-only-tees/full.jpg",
      "/images/products/members-only-tees/model-front.jpg",
    ],
  },
  {
    id: 4,
    slug: "the-mindset-beanie",
    name: "The Mindset Beanie",
    price: 15,
    category: "Accessories",
    colors: ["Black", "Blue", "White"],
    sizes: ["One Size"],
    images: [
      "/images/products/beanie/front.jpg",
      "/images/products/beanie/full.jpg",
      "/images/products/beanie/model-black.jpg",
    ],
  },
  {
    id: 5,
    slug: "mmbm-bomber-jacket",
    name: "MMBM Bomber Jacket",
    price: 55,
    category: "Jackets",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/bomber-jacket/front.jpg",
      "/images/products/bomber-jacket/white-front.jpg",
      "/images/products/bomber-jacket/model-front.jpg",
    ],
  },
  {
    id: 6,
    slug: "the-hustler-hoodie",
    name: "The Hustler Hoodie",
    price: 45,
    category: "Hoodies",
    colors: ["Orange", "Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/hustler-hoodie/front.jpg",
      "/images/products/hustler-hoodie/full.jpg",
      "/images/products/hustler-hoodie/model-front.jpg",
    ],
  },
];