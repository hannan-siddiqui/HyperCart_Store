"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="font-bold text-black text-2xl">{product.title}</p>
        <p className=" font-semibold text-neutral-500">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl text-black">${product.price}</p>
        <Heart className="text-red-400"  />
      </div>
    </Link>
  );
};

export default ProductCard;