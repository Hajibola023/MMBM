"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-zinc-900/70 bg-black/90 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>

          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-black tracking-[0.28em] md:text-2xl"
            aria-label="MMBM home"
          >
            MMBM
          </Link>

          <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
            <li>
              <Link href="/" className="transition hover:text-zinc-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/#shop" className="transition hover:text-zinc-400">
                Shop
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-zinc-400">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-zinc-400">
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                className="relative flex items-center gap-2 transition hover:text-zinc-400"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingCart size={18} />
                <span>Cart</span>

                {cartCount > 0 && (
                  <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-black text-black">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <Link
            href="/cart"
            className="relative flex items-center md:hidden"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-black text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-black text-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-zinc-800 px-6">
          <span className="text-xl font-black tracking-[0.28em]">
            MMBM
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex min-h-[calc(100vh-5rem)] flex-col justify-between px-6 py-8">
          <nav className="mt-2">
            <ul className="space-y-6 text-2xl font-black uppercase tracking-[0.02em]">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block transition hover:text-zinc-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#shop"
                  onClick={closeMenu}
                  className="block transition hover:text-zinc-400"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block transition hover:text-zinc-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block transition hover:text-zinc-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="flex items-center gap-3 transition hover:text-zinc-400"
                >
                  Cart

                  {cartCount > 0 && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-black">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="border-t border-zinc-800 pt-5">
            <p className="text-[10px] uppercase leading-5 tracking-[0.24em] text-zinc-500">
              Discipline • Patience • Consistency
            </p>
          </div>
        </div>
      </div>
    </>
  );
}