"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (
    id: number,
    color: string,
    size: string
  ) => void;
  decreaseQuantity: (
    id: number,
    color: string,
    size: string
  ) => void;
  removeFromCart: (
    id: number,
    color: string,
    size: string
  ) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load the saved cart when the website opens.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error("Could not load the cart:", error);
      localStorage.removeItem("cart");
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Save the cart after the original saved cart has loaded.
  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, hasLoaded]);

  function isSameItem(
    cartItem: CartItem,
    id: number,
    color: string,
    size: string
  ) {
    return (
      cartItem.id === id &&
      cartItem.color === color &&
      cartItem.size === size
    );
  }

  function addToCart(item: CartItem) {
    setCart((previousCart) => {
      const itemAlreadyExists = previousCart.some((cartItem) =>
        isSameItem(
          cartItem,
          item.id,
          item.color,
          item.size
        )
      );

      if (itemAlreadyExists) {
        return previousCart.map((cartItem) =>
          isSameItem(
            cartItem,
            item.id,
            item.color,
            item.size
          )
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...previousCart,
        {
          ...item,
          quantity: item.quantity || 1,
        },
      ];
    });
  }

  function increaseQuantity(
    id: number,
    color: string,
    size: string
  ) {
    setCart((previousCart) =>
      previousCart.map((cartItem) =>
        isSameItem(cartItem, id, color, size)
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    );
  }

  function decreaseQuantity(
    id: number,
    color: string,
    size: string
  ) {
    setCart((previousCart) =>
      previousCart
        .map((cartItem) =>
          isSameItem(cartItem, id, color, size)
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  function removeFromCart(
    id: number,
    color: string,
    size: string
  ) {
    setCart((previousCart) =>
      previousCart.filter(
        (cartItem) =>
          !isSameItem(cartItem, id, color, size)
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}