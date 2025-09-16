"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserCircle, FaBars, FaHome, FaUsers, FaClipboardList, FaGift } from "react-icons/fa";
import Sidebar from "../../components/sidebar";

export default function Cartola() {
  const [orcamento, setOrcamento] = useState(100);
  const [gasto, setGasto] = useState(80);
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
      
      <div className={`min-h-screen bg-gradient-to-b from-[#1a1832] to-[#0f0e1c] text-white pb-20 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-80' : ''}`}>
 
        <header className="flex items-center justify-between bg-gray-800 text-white p-4">
          <FaBars 
            size={24} 
            className="hover:text-gray-300 transition-colors cursor-pointer"
            onClick={toggleMenu}
          />
          <h1 className="font-bold">Fernando Torres</h1>
          <FaUserCircle size={24} />
        </header>


        <div className="bg-green-700 rounded-lg w-[90%] mx-auto h-[450px] flex items-center justify-center mt-4 mb-6">
          <span className="text-lg">Campo com jogadoras</span>
        </div>

         
        <div className="grid grid-cols-2 gap-4 px-4 mt-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold">Marta</h3>
            <p>Preço: 20coin</p>
            <p>Pontos: 12pts</p>
            <p>Média: 10.5pts</p>
            <button className="mt-2 w-full bg-green-500 text-black font-bold py-2 px-4 rounded-lg">
              Escalar
            </button>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold">Any Borges</h3>
            <p>Preço: 20coin</p>
            <p>Pontos: 12pts</p>
            <p>Média: 10.5pts</p>
            <button className="mt-2 w-full bg-green-500 text-black font-bold py-2 px-4 rounded-lg">
              Escalar
            </button>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold">Marta</h3>
            <p>Preço: 20coin</p>
            <p>Pontos: 12pts</p>
            <p>Média: 10.5pts</p>
            <button className="mt-2 w-full bg-green-500 text-black font-bold py-2 px-4 rounded-lg">
              Escalar
            </button>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold">Marta</h3>
            <p>Preço: 20coin</p>
            <p>Pontos: 12pts</p>
            <p>Média: 10.5pts</p>
            <button className="mt-2 w-full bg-green-500 text-black font-bold py-2 px-4 rounded-lg">
              Escalar
            </button>
          </div>
        </div>
          

        
        <div className="bg-gray-800 p-4 rounded-lg mt-6 mx-4">
          <h3 className="font-bold text-lg">Orçamento</h3>
          <p>Total: {orcamento}pts</p>
          <p>Gasto: {gasto}pts</p>
          <p>Restante: {orcamento - gasto}pts</p>
          <div className="w-full bg-gray-600 h-2 rounded mt-2">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${(gasto / orcamento) * 100}%` }}
            ></div>
          </div>
        </div>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-3">
          <Link href="/noticias" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaHome />
            <span className="text-xs">Menu</span>
          </Link>
          <Link href="/teams" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaUsers />
            <span className="text-xs">Team</span>
          </Link>
          <Link href="/cartola" className="flex flex-col items-center text-green-400 font-bold">
            <FaClipboardList />
            <span className="text-xs">Cartola</span>
          </Link>
          <Link href="/recompensa" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaGift />
            <span className="text-xs">Recompensas</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
