"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-5xl text-red-600 font-extrabold">Payment Successful</p>
      <p className="text-xl font-bold text-neutral-400 ">Thank you for your purchase</p>
      <Link
        href="/"
        className="p-4 border text-3xl text-neutral-300 font-extrabold hover:bg-black hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link>
    </div>
  );
};

export default SuccessfulPayment;