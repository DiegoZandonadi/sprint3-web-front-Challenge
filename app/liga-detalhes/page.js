"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUsers, FaHome, FaIdCard, FaGift, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "../../components/sidebar";

export default function LigaDetalhes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      
      <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-indigo-950 text-white flex flex-col transition-transform duration-300 ease-in-out relative ${isMenuOpen ? 'transform -translate-x-80' : ''}`} style={{
        backgroundImage: `linear-gradient(to bottom, #111827, #312e81), repeating-linear-gradient(
          45deg,
          transparent,
          transparent 15px,
          rgba(255,255,255,0.02) 15px,
          rgba(255,255,255,0.02) 30px
        )`
      }}>

        <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <button 
            aria-label="Abrir menu" 
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold text-lg">Fernando torres</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </header>

        <div className="flex-1 px-4 py-6 relative z-10">
          {/* Botão de voltar */}
          <div className="mb-6">
            <Link href="/liga-internacional" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaChevronLeft className="text-white text-sm" />
              </div>
            </Link>
          </div>

          {/* Liga selecionada centralizada */}
          <div className="flex justify-center mb-8">
            <button className="bg-purple-800 rounded-2xl p-4 flex items-center justify-between hover:bg-purple-700 transition-colors w-80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/image-removebg-preview (2).png"
                    alt="FA Women's Super League"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-base font-bold">FA Women's Super League</span>
              </div>
              <FaChevronRight className="text-white text-sm" />
            </button>
          </div>

          {/* Botões verdes centralizados */}
          <div className="flex-1 flex items-start justify-center px-4 pt-20">
            <div className="space-y-10">
              {/* Placar */}
              <Link href="/placar" className="bg-green-500 rounded-2xl p-3 flex items-center justify-between hover:bg-green-600 transition-colors w-48">
                <span className="text-black text-base font-medium">Placar</span>
                <FaChevronRight className="text-black text-sm" />
              </Link>

              {/* Carreira */}
              <Link href="/carreira" className="bg-green-500 rounded-2xl p-3 flex items-center justify-between hover:bg-green-600 transition-colors w-48">
                <span className="text-black text-base font-medium">Carreira</span>
                <FaChevronRight className="text-black text-sm" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navegação Inferior */}
        <div className="bg-indigo-950 flex justify-around py-3">
          <Link href="/home" className="flex flex-col items-center text-green-400 font-bold">
            <FaHome />
            <span className="text-xs">Menu</span>
          </Link>
          <Link href="/teams" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaUsers />
            <span className="text-xs">Team</span>
          </Link>
          <Link href="/cartola" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaIdCard />
            <span className="text-xs">Cartola</span>
          </Link>
          <Link href="/recompensa" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaGift />
            <span className="text-xs">Recompensas</span>
          </Link>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-green-400 rounded-full opacity-60 z-0 shadow-lg shadow-green-400/50"></div>
        <div className="absolute left-0 top-3/4 w-28 h-28 bg-green-300 rounded-full opacity-55 z-0 shadow-lg shadow-green-300/50"></div>
        <div className="absolute right-1/4 top-1/2 w-24 h-24 bg-green-400 rounded-full opacity-40 z-0 shadow-lg shadow-green-400/30"></div>
        <div className="absolute left-1/3 bottom-1/3 w-20 h-20 bg-green-300 rounded-full opacity-50 z-0 shadow-lg shadow-green-300/40"></div>
      </div>
    </>
  );
}
