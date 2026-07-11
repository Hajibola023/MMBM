import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

export default function ProductGrid() {
  return (
    <section id="shop" className="bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
            Built for the mindset
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            Shop Collection
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {product.category}
                </p>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black uppercase leading-tight">
                    {product.name}
                  </h3>

                  <p className="shrink-0 text-lg font-bold">
                    £{product.price}
                  </p>
                </div>

                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 transition group-hover:text-black">
                  View product →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}