"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const teamScores = [
    { name: "Fernando Araujo", team: "The Angle", points: 120 },
    { name: "Fernando Araujo", team: "The Angle", points: 110 },
    { name: "Fernando Araujo", team: "The Angle", points: 100 },
    { name: "Fernando Araujo", team: "The Angle", points: 120 },
    { name: "Fernando Araujo", team: "The Angle", points: 120 },
    { name: "Fernando Araujo", team: "The Angle", points: 110 },
    { name: "Fernando Araujo", team: "The Angle", points: 100 },
    { name: "Fernando Araujo", team: "The Angle", points: 120 },
    { name: "Você", team: "The Angle", points: 100 },
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

        <div className="flex flex-col items-center py-6 bg-gradient-to-r from-gray-900 to-purple-1000">
          <FaUserCircle size={70} className="mb-5" />
        

          <div className="grid grid-cols-2 gap-4 w-4/5 mb-4">
            <div className=" bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm">PassCoin</p>
              <p className="text-xl font-bold">188pts</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm">Pontuação nessa temporada</p>
              <p className="text-xl font-bold">100pts</p>
            </div>
          </div>
          <div className="bg-gray-800 px-6 py-3 rounded-lg text-center">
            <p className="text-sm">Top Global</p>
            <p className="text-lg font-bold">112º posição</p>
          </div>
        </div>

      
        <div className="px-6 py-6 flex-1 ">
          <h2 className="font-bold mb-4">
            Pontuação de sua equipe <span className="text-green-400">1000pts</span>
          </h2>

          <div className="space-y-4">
            {teamScores.map((player, index) => (
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
        <Link href="/home" className="flex flex-col items-center text-green-400 font-bold">
          <FaHome />
          <span className="text-xs">Menu</span>
        </Link>
        <Link href="/noticias" className="flex flex-col items-center hover:text-gray-300 transition-colors">
          <FaUsers />
          <span className="text-xs">Notícias</span>
        </Link>
        <Link href="/teams" className="flex flex-col items-center text-green-400 font-bold">
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
