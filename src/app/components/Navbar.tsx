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
      <nav className="relative z-50 flex items-center justify-between bg-black px-6 py-6 text-white md:px-10">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={26} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-widest"
          aria-label="MMBM home"
        >
          MMBM
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 text-sm uppercase tracking-wider md:flex">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-gray-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/#shop"
              className="transition-colors hover:text-gray-400"
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-gray-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-colors hover:text-gray-400"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 transition-colors hover:text-gray-400"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-black text-black">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile cart */}
        <Link
          href="/cart"
          className="relative flex items-center md:hidden"
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <ShoppingCart size={24} />

          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[10px] font-black text-black">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black text-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-2xl font-black tracking-widest">
            MMBM
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex min-h-[calc(100vh-88px)] flex-col justify-between px-6 pb-10">
          <nav className="mt-10">
            <ul className="space-y-8 text-4xl font-black uppercase tracking-tight">
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
          </nav>

          <div className="border-t border-zinc-800 pt-6 text-sm uppercase tracking-[0.2em] text-zinc-400">
            <p>Discipline · Patience · Consistency</p>
          </div>
        </div>
      </div>
    </>
  );
}