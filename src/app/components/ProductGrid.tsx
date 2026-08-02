import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";

export default function ProductGrid() {
  return (
    <section
      id="shop"
      className="bg-white px-5 py-16 text-black sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
            Built for the mindset
          </p>

          <h2 className="text-3xl font-black uppercase tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Shop Collection
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-5 md:p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-zinc-400">
                  {product.category}
                </p>

                <div className="flex items-start justify-between gap-5">
                  <h3 className="max-w-[70%] text-lg font-black uppercase leading-tight tracking-[-0.02em] sm:text-lg md:text-xl">
                    {product.name}
                  </h3>

                  <p className="shrink-0 text-base font-black md:text-lg">
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(product.price)}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 group-hover:gap-4 group-hover:text-black">
                  <span>View Product</span>
                  <ArrowRight size={16} strokeWidth={2.2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}