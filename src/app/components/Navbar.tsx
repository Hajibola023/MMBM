import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-6 py-6 text-white md:px-10">
      <Link
        href="/"
        className="text-2xl font-black tracking-widest"
        aria-label="MMBM home"
      >
        MMBM
      </Link>

      <ul className="flex items-center gap-4 text-xs uppercase tracking-wider sm:gap-6 md:gap-8 md:text-sm">
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
            className="transition-colors hover:text-gray-400"
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}