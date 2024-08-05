import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-[#ada1a1]">

      <div className="relative">

        <div >
          <Image src="/landingpagebanner.png" width={2000} height={1000} className="w-screen" alt="banner"/>
        </div>

        <div className="absolute top-[10%] left-[10%] ">

          <div className="text-6xl  text-green-900 font-mono font-extrabold">
            Shopping And <br/>  <h1 className="mt-4">Department Store.</h1>
          </div>

          <div className= "mt-14 w-[500px] text-zinc-900 font-sans  text-2xl">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </div>

          <div className= " mt-14 bg-green-900 hover:bg-black rounded-3xl px-4 py-2 text-white w-[150px] text-lg  "> keep visiting  </div>
        
        </div>


      </div>


    </div>
  );
}



