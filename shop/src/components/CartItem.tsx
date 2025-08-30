import React from "react";
import type { CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className="flex items-center border rounded-xl p-3 shadow-sm hover:shadow-md transition bg-gray-50">
      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mr-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1">Price: ${item.price}</p>
      </div>

      <div className="flex flex-col items-end ml-4 space-y-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="bg-gray-200 px-2 rounded-lg hover:bg-gray-300 transition"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="bg-gray-200 px-2 rounded-lg hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 font-bold hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
