import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="bg-white py-20 text-black"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-black uppercase">
          Shop Collection
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="rounded-xl border p-5 shadow-sm transition hover:shadow-xl"
            >

              <img
                src={product.images[0]}
                alt={product.name}
                className="mb-4 h-96 w-full rounded-lg object-cover"
              />

              <h3 className="text-2xl font-bold">
                {product.name}
              </h3>

              <p className="mt-2 text-zinc-600">
                £{product.price}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}