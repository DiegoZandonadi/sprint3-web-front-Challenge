"use client";
import { useState } from "react";
import { FaUserCircle, FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function TopPlayers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const players = [
    { name: "Fernando Araujo", team: "The Angle", points: 120 },
    { name: "Fernando Araujo", team: "The Angle", points: 110 },
    { name: "Fernando Araujo", team: "The Angle", points: 100 },
    { name: "Fernando Araujo", team: "The Angle", points: 97 },
    { name: "Fernando Araujo", team: "The Angle", points: 92 },
    { name: "Fernando Araujo", team: "The Angle", points: 89 },
    { name: "Fernando Araujo", team: "The Angle", points: 88 },
  ];

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      
      <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-purple-950 text-white flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-80' : ''}`}>
    
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <button 
            className="text-xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold">Fernando torres</h1>
          <FaUserCircle size={28} />
        </div>

        
        <div className="px-6 py-6 flex-1">
          <h2 className="font-bold mb-6">Melhores jogadores</h2>

          <div className="space-y-4">
            {players.map((player, index) => (
              <div
                key={index}
                className="flex items-center justify-between  p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FaUserCircle size={30} />
                  <div>
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-green-400 text-sm">Team: {player.team}</p>
                  </div>
                </div>
                <span className="font-bold">{player.points}pts</span>
              </div>
            ))}
          </div>
        </div>

    
      <div className="bg-indigo-950 flex justify-around py-3">
        <Link href="/home" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <FaHome />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/noticias" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <FaUsers />
          <span className="text-xs">Notícias</span>
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
      </div>
    </>
  );
}
