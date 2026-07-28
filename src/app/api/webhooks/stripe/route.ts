import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is missing");

    return new Response("Webhook secret is not configured", {
      status: 500,
    });
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", {
      status: 400,
    });
  }

  try {
    const rawBody = await request.text();

    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("checkout.session.completed received:", {
        sessionId: session.id,
        paymentStatus: session.payment_status,
        amountTotal: session.amount_total,
        customerEmail: session.customer_details?.email,
      });
    }

    return new Response("Webhook received", {
      status: 200,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown webhook error";

    console.error("Webhook error:", message);

    return new Response(`Webhook Error: ${message}`, {
      status: 400,
    });
  }
}