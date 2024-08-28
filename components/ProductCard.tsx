"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[240px] flex flex-col gap-2  bg-white text-black border border-neutral-600 rounded-lg "
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div className="ml-2">
        <p className="text-xl font-bold">{product.title}</p>
        <p className="text-sm font-bold ">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl ml-2  font-bold">${product.price}</p>
        <div className="mr-2"><HeartFavorite  product={product} updateSignedInUser={updateSignedInUser} /></div>
      </div>
    </Link>
  );
};

export default ProductCard;