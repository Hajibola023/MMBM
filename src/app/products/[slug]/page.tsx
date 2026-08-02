import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import ProductOptions from "../../components/ProductOptions";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black"
        >
          ← Back to Collection
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100"
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              {product.category}
            </p>

            <h1 className="text-5xl font-black uppercase">
              {product.name}
            </h1>

            <p className="mt-6 text-3xl font-bold">
              £{product.price}
            </p>

            <ProductOptions
             id={product.id}
             slug={product.slug}
             name={product.name}
             price={product.price}
             image={product.images[0]}
             colors={product.colors}
             sizes={product.sizes}
             genders={product.genders}
            />

            <div className="mt-8 border-t pt-8 text-zinc-600 leading-7">
              Premium MMBM streetwear built for dream chasers,
              entrepreneurs, creators and everyone committed to the
              Money Must Be Made mindset.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}