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
      <nav className="sticky top-0 z-50 border-b border-zinc-900/70 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-black tracking-[0.35em] md:text-2xl"
          >
            MMBM
          </Link>

          {/* Desktop Menu */}
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

          {/* Mobile Cart */}
          <Link
            href="/cart"
            className="relative flex items-center md:hidden"
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

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-6">
          <span className="text-xl font-black tracking-[0.35em]">
            MMBM
          </span>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex h-[calc(100%-88px)] flex-col justify-between px-6 py-10">

          <ul className="space-y-7 text-3xl font-black uppercase tracking-[-0.03em]">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/#shop" onClick={closeMenu}>
                Shop
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                Cart

                {cartCount > 0 && (
                  <span className="rounded-full bg-white px-3 py-1 text-sm text-black">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="border-t border-zinc-800 pt-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Discipline • Patience • Consistency
            </p>
          </div>
        </div>
      </div>
    </>
  );
}