"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

type ProductOptionsProps = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  genders: string[];
};

export default function ProductOptions({
  id,
  slug,
  name,
  price,
  image,
  colors,
  sizes,
  genders,
}: ProductOptionsProps) {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const readyToAdd =
    selectedColor !== "" &&
    selectedSize !== "" &&
    selectedGender !== "";

  useEffect(() => {
    if (!showAddedMessage) return;

    const timer = window.setTimeout(() => {
      setShowAddedMessage(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [showAddedMessage]);

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
      gender: selectedGender,
      quantity: 1,
    });

    setShowAddedMessage(true);
  }

  return (
    <>
      {showAddedMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-zinc-700 bg-black p-5 text-white shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Added to cart
              </p>

              <p className="mt-2 text-lg font-black">
                {name}
              </p>

              <p className="mt-1 text-sm text-zinc-300">
                {selectedGender} · {selectedColor} · {selectedSize}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAddedMessage(false)}
              className="text-xl leading-none text-zinc-400 transition hover:text-white"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>

          <Link
            href="/cart"
            className="mt-5 block rounded-full bg-white px-5 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-zinc-200"
          >
            View Cart
          </Link>
        </div>
      )}

      <div className="mt-10">
        <h2 className="mb-4 text-sm font-black uppercase tracking-widest">
          Gender
        </h2>

        <div className="flex flex-wrap gap-3">
          {genders.map((gender) => (
            <button
              key={gender}
              type="button"
              onClick={() => setSelectedGender(gender)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedGender === gender
                  ? "border-black bg-black text-white"
                  : "border-zinc-300 bg-white text-black hover:border-black"
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

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
        {readyToAdd
          ? "Add to Cart"
          : "Choose Gender, Colour and Size"}
      </button>
    </>
  );
}