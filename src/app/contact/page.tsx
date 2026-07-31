import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400">
          Get in touch
        </p>

        <h1 className="mb-8 text-5xl font-black uppercase md:text-7xl">
          Contact MMBM
        </h1>

        <div className="space-y-8 text-lg leading-8 text-zinc-300">
          <p>
            For order support, shipping enquiries, collaborations and general
            questions, contact the MMBM team using the details below.
          </p>

          <div>
            <h2 className="mb-2 font-black uppercase text-white">Email</h2>
            <a
              href="mailto:mmbmshop01@gmail.com
              className="underline underline-offset-4"
            >
              mmbmshop01@gmail.com
            </a>
          </div>

          <div>
            <h2 className="mb-2 font-black uppercase text-white">Instagram</h2>
            <p>@mmbm_shop</p>
          </div>
          
          <h2 className="font-semibold uppercase tracking-[0.35em] text-zinc-400">
  WHATSAPP
</h2>

<p>
  +44 7376 957309
</p>
          <div>
            <h2 className="mb-2 font-black uppercase text-white">Shipping</h2>
            <p>SHIPPING

Orders are typically processed within 1–3 business days. Shipping times vary depending on your location.</p>
          </div>

          <div>
            <h2 className="mb-2 font-black uppercase text-white">Returns</h2>
            <p>
              RETURNS

Returns are accepted within 14 days of delivery, provided items are unworn, unwashed, and returned in their original condition with all tags attached.
            </p>
          </div>
        </div>

        <Link
          href="/#products"
          className="mt-12 inline-block rounded-full bg-white px-8 py-4 font-bold uppercase tracking-wider text-black transition hover:bg-zinc-200"
        >
          Shop Collection
        </Link>
      </div>
    </main>
  );
}