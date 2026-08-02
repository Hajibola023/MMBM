import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black tracking-widest">
              MMBM
            </h2>

            <p className="mt-4 max-w-sm text-zinc-400">
              Premium streetwear built for dream chasers,
              creators and entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Quick Links
            </h3>

            <div className="space-y-3 text-zinc-400">
              <Link href="/" className="block hover:text-white transition">
                Home
              </Link>

              <Link href="/#shop" className="block hover:text-white transition">
                Shop
              </Link>

              <Link href="/about" className="block hover:text-white transition">
                About
              </Link>

              <Link href="/contact" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Contact
            </h3>

            <div className="space-y-5 text-zinc-400">

              <p className="flex items-center gap-3">
                <Mail size={18} />
                <span>mmbmshop01@gmail.com</span>
              </p>

              <a
                href="https://instagram.com/mmbm_shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Instagram
                  </p>

                  <p>@mmbm_shop</p>
                </div>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          © 2026 MMBM. Built for the mindset.
        </div>
      </div>
    </footer>
  );
}