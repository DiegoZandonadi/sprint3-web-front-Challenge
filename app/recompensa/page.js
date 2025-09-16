"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function RewardsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      
      <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-80' : ''}`}>

        <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <button 
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold">Fernando torres</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </header>

        
        <div className="relative w-full h-60 mb-6">
          <Image
            src="/images/banner.png"
            alt="Recompensas"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="text-xl font-bold">Resgate suas recompensas</h2>
          </div>
        </div>

      
        <main className="flex-1 px-4 py-6 space-y-4">
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image src="/images/corinthians.png" alt="Corinthians" width={40} height={40} />
              <div>
                <p>Corinthians x Flamengo</p>
                <span className="text-sm text-gray-300">20/06/2023</span>
              </div>
            </div>
            <p className="font-bold">120 coins</p>
          </div>

          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image src="/images/adidas.png" alt="Adidas" width={40} height={40} />
              <div>
                <p>Cashback 10% Adidas</p>
              </div>
            </div>
            <p className="font-bold">120 coins</p>
          </div>

          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image src="/images/corinthians.png" alt="Corinthians" width={40} height={40} />
              <div>
                <p>Corinthians x Palmeiras</p>
                <span className="text-sm text-gray-300">20/06/2023</span>
              </div>
            </div>
            <p className="font-bold">120 coins</p>
          </div>

          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Passa Bola" width={40} height={40} />
              <div>
                <p>Camisa Passa Bola</p>
              </div>
            </div>
            <p className="font-bold">120 coins</p>
          </div>
        </main>


        <footer className="flex justify-around items-center bg-gray-800 py-3 border-t border-gray-700">
          <Link href="/home" className="flex flex-col items-center text-green-400 font-bold text-sm">
            <FaHome className="text-xl" />
            Menu
          </Link>
          <Link href="/noticias" className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors">
            <FaUsers className="text-xl" />
            Notícias
          </Link>
          <Link href="/teams" className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors">
            <FaUsers className="text-xl" />
            Team
          </Link>
          <Link href="/cartola" className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors">
            <FaIdCard className="text-xl" />
            Cartola
          </Link>
          <Link href="/recompensa" className="flex flex-col items-center text-green-400 font-bold text-sm">
            <FaGift className="text-xl" />
            Recompensas
          </Link>
        </footer>
      </div>
    </>
  );
}
