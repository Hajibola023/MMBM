import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-black text-white">
      <section className="flex min-h-[82vh] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[88vh] md:px-10">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.38em] text-zinc-400 sm:text-xs">
          Discipline • Patience • Consistency
        </p>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-9xl">
          Money Must Be Made
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
          Premium streetwear for dream chasers, creators, entrepreneurs, and
          everyone committed to the mindset.
        </p>

        <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <Link
            href="/#shop"
            className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200"
          >
            Shop Collection
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Our Story
          </Link>
        </div>

        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
          Scroll to discover
        </p>
      </section>
    </main>
  );
}