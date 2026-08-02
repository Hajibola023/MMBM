"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function handleCheckout() {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            slug: item.slug,
            color: item.color,
            size: item.size,
            gender: item.gender,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.2em]"
        >
          ← Continue Shopping
        </Link>

        <div className="mt-8 flex items-end justify-between gap-6">
          <h1 className="text-4xl font-black uppercase sm:text-5xl">
            Shopping Cart
          </h1>

          {cart.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-xs font-bold uppercase tracking-[0.15em] underline"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="mt-12 border-t pt-10">
            <p className="text-zinc-500">Your cart is empty.</p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-black px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-10">
              {cart.map((item) => {
                const lineTotal = item.price * item.quantity;

                return (
                  <div
                    key={`${item.slug}-${item.color}-${item.size}-${item.gender}`}
                    className="grid gap-6 border-b py-7 sm:grid-cols-[120px_1fr_auto] sm:items-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="h-28 w-28 rounded-lg object-contain"
                    />

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-zinc-500">
                        Colour: {item.color}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Size: {item.size}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Gender: {item.gender}
                      </p>

                      <p className="mt-3 font-bold">
                        £{item.price}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item.id,
                            item.color,
                            item.size,
                            item.gender
                          )
                        }
                        className="mt-4 text-xs font-bold uppercase tracking-[0.15em] underline"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-8 sm:flex-col sm:items-end">
                      <div className="flex items-center rounded-full border border-zinc-300">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id,
                              item.color,
                              item.size,
                              item.gender
                            )
                          }
                          className="px-4 py-2 text-lg font-bold"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.color,
                              item.size,
                              item.gender
                            )
                          }
                          className="px-4 py-2 text-lg font-bold"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <p className="text-xl font-black">
                        £{lineTotal}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 ml-auto max-w-md border-t pt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black uppercase">
                  Total
                </h2>

                <p className="text-3xl font-black">
                  £{total}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-8 w-full rounded-full bg-black px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
              >
                Checkout
              </button>

              <p className="mt-4 text-center text-xs text-zinc-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}