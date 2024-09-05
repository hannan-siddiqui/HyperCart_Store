import BGGRADIENT from "@/components/BGGRADIENT";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/action/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="bg-neutral-950 px-10  py-5 flex flex-col items-center gap-8">
      
      <div className="relative w-full">
        
        <div className="z-10 absolute w-full h-full opacity-40  rounded-xl flex justify-center items-center ">
          <div className=" bg-black text-white rounded-lg p-3 text-xl md:text-7xl font-extrabold ">
            {collectionDetails?.title}
          </div>
        </div>

        <Image
          src={collectionDetails?.image}
          width={1500}
          height={1000}
          alt="collection"
          className="w-full  object-cover rounded-xl"
        />

      </div>

     <div className= "flex justify-center items-center flex-col gap-y-10">

     <p className=" text-5xl font-extrabold ">{collectionDetails?.title}</p>
      <p className="font-bold text-2xl text-neutral-600 rounded-lg text-center max-w-[1100px]">
        {collectionDetails?.description}
      </p>

      <div className="bg-gradient-to-r from-neutral-900 to-stone-300 md:w-[1300px] rounded-lg py-10 md:px-6 flex flex-wrap gap-16 justify-center">
       
        {collectionDetails.products?.map((product: ProductType) => (
          <ProductCard  key={product._id} product={product} />
        ))}
      </div>

     </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
