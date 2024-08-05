import Collections from "@/components/Collections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#ada1a1] overflow-x-hidden"> {/* Prevent horizontal overflow */}

      <div className="relative py-10 mb-32 md:mb-0">

        <div className="w-screen">
          <Image src="/landingpagebanner.png" width={2000} height={1000} className="w-full md:w-screen" alt="banner"/>
        </div>

        <div className="absolute top-[10%] left-[10%] max-w-full">

          <div className="text-xl md:text-6xl text-green-900 font-mono font-extrabold">
            Shopping And <br/> <h1 className="mt-1 md:mt-4">Department Store.</h1>
          </div>

          <div className="mt-14 w-[90%] md:w-[500px] text-zinc-900 font-sans text-xl md:text-3xl font-semibold"> {/* Fixed typo in text size */}
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </div>

          <div className="mt-14 md:mt-14 mb-8 bg-green-900 hover:bg-black rounded-3xl px-4 py-2 text-white w-[150px] text-lg">
            keep visiting
          </div>
        
        </div>
      </div>

      <div className="mt-4"><Collections/></div>
    </div>
  );
}
