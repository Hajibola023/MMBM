"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

type ProductOptionsProps = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
};

export default function ProductOptions({
  id,
  slug,
  name,
  price,
  image,
  colors,
  sizes,
}: ProductOptionsProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const readyToAdd = selectedColor !== "" && selectedSize !== "";

 function handleAddToCart() {
  if (!readyToAdd) return;

  addToCart({
    id,
    slug,
    name,
    price,
    image,
    color: selectedColor,
    size: selectedSize,
    quantity: 1,
  });

  alert(`${name} added to cart!`);
}

  return (
    <>
      <div className="mt-10">
        <h2 className="mb-4 text-sm font-black uppercase tracking-widest">
          Colours
        </h2>

        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedColor === color
                  ? "border-black bg-black text-white"
                  : "border-zinc-300 bg-white text-black hover:border-black"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-sm font-black uppercase tracking-widest">
          Sizes
        </h2>

        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`min-w-12 rounded-lg border px-4 py-3 text-sm font-bold transition ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-zinc-300 bg-white text-black hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={!readyToAdd}
        onClick={handleAddToCart}
        className={`mt-12 w-full rounded-full px-8 py-5 text-sm font-black uppercase tracking-[0.2em] transition ${
          readyToAdd
            ? "bg-black text-white hover:bg-zinc-800"
            : "cursor-not-allowed bg-zinc-300 text-zinc-500"
        }`}
      >
        {readyToAdd ? "Add to Cart" : "Choose Colour and Size"}
      </button>
    </>
  );
}