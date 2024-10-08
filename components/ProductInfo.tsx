"use client";

import { useState } from "react";

import { MinusCircle, PlusCircle } from "lucide-react";
import HeartFavorite from "./HeartFavorite";
import useCart from "@/lib/hooks/useCart";



const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {

  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );

  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );

  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        <p className="font-medium text-lg text-gray-700">Category:</p>
        <p className="font-bold text-xl">{productInfo.category}</p>
      </div>

      <p className="font-bold text-2xl">$ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-lg text-gray-700">Description:</p>
        <p className="text-sm font-semibold">{productInfo.description}</p>
      </div>

      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-700">Colors:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-lg text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-lg font-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="outline text-xl font-bold py-2 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;