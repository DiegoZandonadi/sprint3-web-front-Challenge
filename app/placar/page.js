"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUsers, FaHome, FaIdCard, FaGift, FaChevronLeft, FaChevronDown, FaPlay } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "../../components/sidebar";

export default function Placar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const standings = [
    {
      position: "1°",
      team: "Chelsea Football Club",
      points: "60",
      played: "22",
      wins: "19",
      draws: "03",
      losses: "00",
      goalsFor: "56",
      goalsAgainst: "13",
      goalDiff: "43"
    },
    {
      position: "2°",
      team: "Arsenal Women",
      points: "55",
      played: "22",
      wins: "18",
      draws: "01",
      losses: "03",
      goalsFor: "48",
      goalsAgainst: "18",
      goalDiff: "30"
    },
    {
      position: "3°",
      team: "Manchester City",
      points: "52",
      played: "22",
      wins: "17",
      draws: "01",
      losses: "04",
      goalsFor: "45",
      goalsAgainst: "20",
      goalDiff: "25"
    },
    {
      position: "4°",
      team: "Manchester United",
      points: "49",
      played: "22",
      wins: "16",
      draws: "01",
      losses: "05",
      goalsFor: "42",
      goalsAgainst: "22",
      goalDiff: "20"
    }
  ];

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
            <Link href="/liga-detalhes" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaChevronLeft className="text-white text-sm" />
              </div>
            </Link>
          </div>

          {/* Botão Placar com dropdown */}
          <div className="mb-6">
            <button className="bg-green-400 text-black font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500 transition-colors">
              Placar
              <FaChevronDown className="text-sm" />
            </button>
          </div>

          {/* Liga selecionada */}
          <div className="mb-6 flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/image-removebg-preview (2).png"
                alt="FA Women's Super League"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-white font-medium">FA Women's Super League</span>
          </div>

          {/* Player de vídeo */}
          <div className="mb-6">
            <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center relative">
              <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <FaPlay className="text-white text-2xl ml-1" />
              </div>
            </div>
          </div>

          {/* Tabela de classificação */}
          <div className="mb-6">
            <div className="bg-purple-700 rounded-lg overflow-hidden">
              {/* Cabeçalho da tabela */}
              <div className="bg-purple-600 px-3 py-3 grid grid-cols-10 gap-2 text-xs font-bold">
                <div className="text-center">No</div>
                <div className="text-center col-span-2">Team</div>
                <div className="text-center">Pts</div>
                <div className="text-center">PJ</div>
                <div className="text-center">VIT</div>
                <div className="text-center">E</div>
                <div className="text-center">DER</div>
                <div className="text-center">GM</div>
                <div className="text-center">GC</div>
                <div className="text-center">SG</div>
              </div>
              
              {/* Linhas da tabela */}
              {standings.map((team, index) => (
                <div key={index} className="bg-purple-800 px-3 py-3 grid grid-cols-10 gap-2 text-xs border-t border-purple-600">
                  <div className="text-center font-bold text-sm">{team.position}</div>
                  <div className="text-left col-span-2 truncate text-sm">{team.team}</div>
                  <div className="text-center font-bold text-sm">{team.points}</div>
                  <div className="text-center text-sm">{team.played}</div>
                  <div className="text-center text-sm">{team.wins}</div>
                  <div className="text-center text-sm">{team.draws}</div>
                  <div className="text-center text-sm">{team.losses}</div>
                  <div className="text-center text-sm">{team.goalsFor}</div>
                  <div className="text-center text-sm">{team.goalsAgainst}</div>
                  <div className="text-center text-sm">{team.goalDiff}</div>
                </div>
              ))}
            </div>
            
            {/* Botão ver mais */}
            <div className="text-center mt-2">
              <button className="text-white text-sm hover:text-green-400 transition-colors">
                Ver mais colocações
              </button>
            </div>
          </div>

          {/* Próximos jogos */}
          <div className="mb-6">
            <h3 className="text-green-400 font-bold text-lg mb-4">Próximos jogos</h3>
            
            {/* Card do jogo */}
            <div className="bg-purple-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                {/* Manchester United */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">MU</span>
                  </div>
                  <span className="text-white text-sm">United</span>
                </div>
                
                {/* VS */}
                <div className="text-white text-2xl font-bold">X</div>
                
                {/* Chelsea */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">CFC</span>
                  </div>
                  <span className="text-white text-sm">Chelsea</span>
                </div>
              </div>
              
              {/* Barra de progresso */}
              <div className="flex h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-red-500 flex-1"></div>
                <div className="bg-gray-500 w-4"></div>
                <div className="bg-blue-500 flex-1"></div>
              </div>
            </div>
            
            {/* Botão ver mais jogos */}
            <div className="text-center mt-2">
              <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
                Ver mais jogos
              </button>
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
