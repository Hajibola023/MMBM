import { ShieldCheck, Truck, Star } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row">

        <div className="flex items-center gap-3">
          <ShieldCheck className="h-7 w-7" />
          <div>
            <h3 className="font-bold">Secure Checkout</h3>
            <p className="text-sm text-zinc-500">
              Safe payments powered by Stripe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Truck className="h-7 w-7" />
          <div>
            <h3 className="font-bold">Worldwide Shipping</h3>
            <p className="text-sm text-zinc-500">
              Fast delivery across the globe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Star className="h-7 w-7" />
          <div>
            <h3 className="font-bold">Premium Quality</h3>
            <p className="text-sm text-zinc-500">
              Designed for creators and hustlers
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}