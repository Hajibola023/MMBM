import Link from "next/link";
import { stripe } from "@/lib/stripe";

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
        <h1 className="text-4xl font-black uppercase">
          Order not verified
        </h1>

        <p className="mt-4 text-zinc-600">
          We could not find a Stripe checkout session.
        </p>

        <Link
          href="/cart"
          className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white"
        >
          Return to Cart
        </Link>
      </main>
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
          <h1 className="text-4xl font-black uppercase">
            Payment not confirmed
          </h1>

          <p className="mt-4 text-zinc-600">
            Stripe has not confirmed this payment.
          </p>

          <Link
            href="/cart"
            className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white"
          >
            Return to Cart
          </Link>
        </main>
      );
    }

    const amountPaid = (session.amount_total ?? 0) / 100;

    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
          Order confirmed
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Payment Successful 🎉
        </h1>

        <p className="mt-5 text-lg text-zinc-600">
          Thank you for shopping with MMBM.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-200 px-8 py-6">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Amount paid
          </p>

          <p className="mt-2 text-3xl font-black">
            £{amountPaid.toFixed(2)}
          </p>

          {session.customer_details?.email && (
            <p className="mt-3 text-sm text-zinc-500">
              Confirmation sent to {session.customer_details.email}
            </p>
          )}
        </div>

        <Link
          href="/"
          className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-800"
        >
          Continue Shopping
        </Link>
      </main>
    );
  } catch (error) {
    console.error("Unable to verify Stripe session:", error);

    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-black">
        <h1 className="text-4xl font-black uppercase">
          Verification failed
        </h1>

        <p className="mt-4 text-zinc-600">
          We could not verify this order. Please contact MMBM support.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white"
        >
          Return Home
        </Link>
      </main>
    );
  }
}