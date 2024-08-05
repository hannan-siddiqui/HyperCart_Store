import { getCollection } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collections = async () => {
  const collections = await getCollection();

  return (
    <div className="  flex flex-col gap-10 py-8 pb-20 px-5 bg-[#ded2d2]">
      <p className=" mt-10 mb-6 ml-[13%] text-3xl font-extrabold text-neutral-900">Shop Our Top Categories</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="relative w-[300px] h-[300px] overflow-hidden group">
                <div className="absolute z-10 text-white top-4 left-[50%] translate-x-[-50%] text-lg font-medium">{collection.title}</div>
                <Image
                  key={collection._id}
                  src={collection.image}
                  alt={collection.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg cursor-pointer transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
