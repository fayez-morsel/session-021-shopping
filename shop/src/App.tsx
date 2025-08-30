import React, { useState } from "react";
import { products } from "./data/products";
import type { Product, CartItemType } from "./types";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setCartOpen(true); 
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, qty: number) => {
    if (qty <= 0) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onCartToggle={() => setCartOpen(!cartOpen)}
      />

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-700 hover:text-gray-900 text-3xl font-bold"
          >
            x
          </button>
        </div>

        <CartSummary
          cartItems={cartItems}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
    </div>
  );
};

export default App;
