"use client";
import Image from "next/image";

export default function PlayerProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-1000 to-purple-900 text-white">
 
      <div className="flex items-center justify-between px-4 py-3 bg-indigo-950">
        <h1 className="font-bold">Fernando torres</h1>
        <button className="text-xl">☰</button>
      </div>


<div className="relative bg-gradient-to-r from-indigo-900 to-purple-1000 p-4 pb-24">
  <h2 className="text-xl font-bold">Alisha Lehmann</h2>

  <div className="flex items-center mt-5 space-x-2 bg-green-500/40" >
    <Image src="/images/juventus.png" alt="Juventus" width={40} height={40} />
    <span className="text-lg">Juventus</span>
  </div>

  
  <div className="absolute right-2 bottom-0">
    <Image
      src="/images/jogadora.png"
      alt="Player"
      width={140}
      height={160}
      className="object-contain"
    />
  </div>
</div>

      <div className="flex justify-around mt-10 bg-green-500 py-2">
        <button className="px-3 py-2 font-semibold">Notícias</button>
        <button className="px-3 py-2 font-semibold border-b-2 ">
          Temporada
        </button>
        <button className="px-3 py-2 font-semibold">Carreira</button>
      </div>

      <div className=" mt-10 m-6 rounded-xl bg-gray-800 p-4 grid grid-cols-2 gap-y-3 text-sm">
        <div><span className="font-bold">Age</span><br/>26 Years</div>
        <div><span className="font-bold">Country</span><br/>Switzerland</div>
        <div><span className="font-bold">Position</span><br/>Right Wing</div>
        <div><span className="font-bold">Jersey Number</span><br/>7</div>
        <div><span className="font-bold">Height</span><br/>165cm</div>
        <div><span className="font-bold">Weight</span><br/>55kg</div>
      </div>

      <div className="mt-10 m-4">
        <h3 className="font-bold mb-2">Teams</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg">
            <Image src="/images/juventus.png" alt="Juventus" width={24} height={24} />
            <span>Juventus</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg">
            <Image src="/images/suica.png" alt="Suiça" width={24} height={24} />
            <span>Suiça</span>
          </div>
        </div>
      </div>

      
      <div className="m-4">
        <h3 className="font-bold mb-2">Upcoming games</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg">
            <Image src="/images/juventus.png" alt="Juventus" width={24} height={24} />
            <span>Juventus</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg">
            <Image src="/images/barcelona.png" alt="Barcelona" width={24} height={24} />
            <span>Barcelona</span>
          </div>
        </div>
      </div>
    </div>
  );
}
