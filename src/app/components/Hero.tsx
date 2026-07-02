export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.45em] text-zinc-400">
          Discipline • Patience • Consistency
        </p>

        <h1 className="text-6xl font-black uppercase tracking-tight md:text-8xl">
          Money Must Be Made
        </h1>

        <p className="mt-6 max-w-xl text-base text-zinc-300 md:text-lg">
          Premium streetwear built for dream chasers, creators,
          entrepreneurs, and anyone committed to the mindset.
        </p>

        <button className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-zinc-300">
          Shop Collection
        </button>
      </section>
    </main>
  );
}