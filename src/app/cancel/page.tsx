import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-black mb-6">
        Payment Cancelled
      </h1>

      <p className="text-lg text-zinc-600 mb-8">
        Your order wasn't completed.
      </p>

      <Link
        href="/cart"
        className="rounded-full bg-black px-8 py-4 text-white font-bold hover:bg-zinc-800 transition"
      >
        Return to Cart
      </Link>
    </main>
  );
}