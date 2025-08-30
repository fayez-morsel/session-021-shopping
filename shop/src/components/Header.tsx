import React from "react";
import type { CartItemType } from "../types";

interface HeaderProps {
  cartItems: CartItemType[];
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartToggle }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-bold tracking-wide">Simple Shop</h1>
      <button
        onClick={onCartToggle}
        className="relative bg-white text-violet-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
      >
        🛒 Cart
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {totalItems}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
