import React from "react";
import type { CartItemType } from "../types";
import CartItem from "./CartItem";

interface CartSummaryProps {
  cartItems: CartItemType[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  cartItems,
  onRemove,
  onUpdateQuantity,
}) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-165 p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 mt-8 text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

          <div className="mt-4 pt-4 border-t flex justify-end text-lg font-bold text-violet-600">
            <span>Total: ${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
