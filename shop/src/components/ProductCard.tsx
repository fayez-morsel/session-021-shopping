import React from "react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-2xl shadow-lg p-4 flex flex-col bg-white hover:shadow-2xl transition duration-300 hover:-translate-y-1">
      <div className="w-full aspect-[4/3] mb-4 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-clip"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2 mb-2">Price: ${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-gradient-to-r from-violet-600 to-violet-500 text-white py-2 rounded-lg shadow-md hover:from-violet-700 hover:to-violet-600 transition mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
