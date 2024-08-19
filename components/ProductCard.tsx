"use client";

import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// interface ProductCardProps {
//   product: ProductType;
//   updateSignedInUser?: (updatedUser: UserType) => void;
// }

const ProductCard = ({ product }: { product: ProductType }) => {

  const router = useRouter();

  const user = useUser();

  const [loading, setloading] = useState(false);
  const [SignedInUser, setsignedInuUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setloading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setsignedInuUser(data);
      setIsLiked(data.wishlist.includes(product._id));
      setloading(false);
    } catch (err) {
      console.log("error get user");
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setIsLiked(updatedUser.wishlist.includes(product._id));
        // updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.log("[wishlist_POST]", err);
    }
  };

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
        
        <button onClick={handleLike}>
          <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>

      </div>
    </Link>
  );
};

export default ProductCard;
