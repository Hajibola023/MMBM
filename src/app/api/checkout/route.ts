import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { products } from "@/data/products";

type CheckoutItem = {
  slug: string;
  color: string;
  size: string;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      items?: CheckoutItem[];
    };

    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const lineItems = body.items.map((cartItem) => {
      const product = products.find(
        (item) => item.slug === cartItem.slug
      );

      if (!product) {
        throw new Error(`Product not found: ${cartItem.slug}`);
      }

      const quantity = Math.max(
        1,
        Math.min(10, Math.floor(cartItem.quantity))
      );

      return {
        price_data: {
          currency: "gbp",
          product_data: {
            name: product.name,
            description: `Colour: ${cartItem.color} | Size: ${cartItem.size}`,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity,
      };
    });

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      
      line_items: lineItems,
      billing_address_collection: "required",

shipping_address_collection: {
  allowed_countries: [
    "GB",
    "CA",
    "US",
    "NG",
  ],
},

phone_number_collection: {
  enabled: true,
},
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}