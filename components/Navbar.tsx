"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 md:py-8 py-4 md:px-10 flex gap-10 justify-between items-center bg-[#ada1a1] text-[#141313] text-lg font-bold ">

      <Link href="/">
        {/* <Image src="/path/to/logo.png" alt="logo" width={130} height={100} /> */}
        <h1 className="text-red-700 font-extrabold text-2xl ml-6">Hyper_Cart</h1>
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-500 mx-6  ${pathname === "/" && "text-red-500"}`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-red-500 mx-6 ${pathname === "/wishlist" && "text-red-500"}`}
        >
          Wishlist
        </Link>

        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-500 mx-6 ${pathname === "/orders" && "text-red-500"}`}
        >
          Orders
        </Link>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="mr-5 flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute  w-[300px] top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-[#ada1a1] text-[#141313] text-xl font-extrabold lg:hidden">

            <Link href="/" className=" hover:text-red-500">
              Home
            </Link>

            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-500"
            >
              Wishlist
            </Link>

            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-500"
            >
              Orders
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link>

          </div>
        )}

        <div className="mr-10">
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link  href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
