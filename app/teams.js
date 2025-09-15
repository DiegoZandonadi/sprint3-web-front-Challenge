"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";

export default function Dashboard() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-950 text-white flex flex-col">
  
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
        <button className="text-xl">☰</button>
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
        <button className="flex flex-col items-center">
          <FaHome />
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center">
          <FaUsers />
          <span className="text-xs">Team</span>
        </button>
        <button className="flex flex-col items-center">
          <FaIdCard />
          <span className="text-xs">Cartola</span>
        </button>
        <button className="flex flex-col items-center">
          <FaGift />
          <span className="text-xs">Recompensas</span>
        </button>
      </div>
    </div>
  );
}
