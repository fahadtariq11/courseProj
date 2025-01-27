import React, { createContext, useContext, useState, useEffect } from "react";

// Create CartContext to hold cart data
const CartContext = createContext();

// CartProvider component to manage cart state and actions
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  // Add an item to the cart or update the quantity if it already exists
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists in cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If item doesn't exist, add it to the cart with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove an item from the cart by its ID
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update quantity of a specific item in the cart
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) } // Ensure quantity is at least 1
          : item
      )
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
