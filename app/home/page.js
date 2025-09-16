"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";
import Sidebar from "../../components/sidebar";
import { getWomenFootballFixtures, getWomenPlayerStats, formatDate, formatTime } from "../../services/api-football";

export default function PlayerProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Carregar dados da API
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [fixturesData, playerData] = await Promise.all([
          getWomenFootballFixtures(),
          getWomenPlayerStats(1) // ID da Alisha Lehmann
        ]);
        
        setFixtures(fixturesData);
        setPlayerStats(playerData[0]);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      
      <div className={`min-h-screen bg-gradient-to-b from-indigo-1000 to-purple-900 text-white flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-80' : ''}`}>
 
        <div className="flex items-center justify-between px-4 py-3 bg-indigo-950">
          <button 
            className="text-xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold">Fernando torres</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-indigo-900 to-purple-1000 p-4 pb-24">
          <h2 className="text-xl font-bold">Alisha Lehmann</h2>

          <div className="flex items-center mt-5 space-x-2 bg-green-500/40 p-2 rounded">
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
          <Link href="/noticias" className="px-3 py-2 font-semibold hover:bg-green-600 transition-colors">
            Notícias
          </Link>
          <Link href="/temporada" className="px-3 py-2 font-semibold border-b-2 border-white">
            Temporada
          </Link>
          <Link href="/cartola" className="px-3 py-2 font-semibold hover:bg-green-600 transition-colors">
            Carreira
          </Link>
        </div>

        <div className="mt-10 m-6 rounded-xl bg-gray-800 p-4 grid grid-cols-2 gap-y-3 text-sm">
          {loading ? (
            <div className="col-span-2 text-center text-gray-400">Carregando estatísticas...</div>
          ) : playerStats ? (
            <>
              <div><span className="font-bold">Age</span><br/>{playerStats.player.age} Years</div>
              <div><span className="font-bold">Country</span><br/>{playerStats.player.nationality}</div>
              <div><span className="font-bold">Position</span><br/>{playerStats.statistics[0]?.games.position || 'Right Wing'}</div>
              <div><span className="font-bold">Jersey Number</span><br/>7</div>
              <div><span className="font-bold">Height</span><br/>{playerStats.player.height}</div>
              <div><span className="font-bold">Weight</span><br/>{playerStats.player.weight}</div>
            </>
          ) : (
            <>
              <div><span className="font-bold">Age</span><br/>26 Years</div>
              <div><span className="font-bold">Country</span><br/>Switzerland</div>
              <div><span className="font-bold">Position</span><br/>Right Wing</div>
              <div><span className="font-bold">Jersey Number</span><br/>7</div>
              <div><span className="font-bold">Height</span><br/>165cm</div>
              <div><span className="font-bold">Weight</span><br/>55kg</div>
            </>
          )}
        </div>

        <div className="mt-10 m-4">
          <h3 className="font-bold mb-2">Teams</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                <Image 
                  src="/images/juventus.png" 
                  alt="Juventus" 
                  width={20} 
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm">Juventus</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                <Image 
                  src="/images/suica.png" 
                  alt="Suiça" 
                  width={20} 
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm">Suiça</span>
            </div>
          </div>
        </div>

        <div className="m-4 flex-1">
          <h3 className="font-bold mb-2">Próximos jogos</h3>
          <div className="space-y-2">
            {loading ? (
              <div className="text-center text-gray-400 py-4">Carregando jogos...</div>
            ) : fixtures.length > 0 ? (
              fixtures.slice(0, 4).map((fixture, index) => (
                <div key={fixture.fixture.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-2">
                    {/* Time da casa */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src={fixture.teams.home.logo || '/images/juventus.png'} 
                          alt={fixture.teams.home.name} 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = '/images/juventus.png';
                          }}
                        />
                      </div>
                      <span className="text-sm truncate">{fixture.teams.home.name}</span>
                    </div>

                    {/* Horário e data */}
                    <div className="text-center flex-shrink-0 px-2">
                      <div className="text-xs text-gray-400">
                        {formatDate(fixture.fixture.date)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {formatTime(fixture.fixture.date)}
                      </div>
                      {fixture.goals.home !== null && (
                        <div className="text-sm font-bold text-green-400 mt-1">
                          {fixture.goals.home} - {fixture.goals.away}
                        </div>
                      )}
                    </div>

                    {/* Time visitante */}
                    <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                      <span className="text-sm truncate text-right">{fixture.teams.away.name}</span>
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src={fixture.teams.away.logo || '/images/barcelona.png'} 
                          alt={fixture.teams.away.name} 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = '/images/barcelona.png';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="space-y-2">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src="/images/juventus.png" 
                          alt="Juventus" 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm truncate">Juventus</span>
                    </div>
                    <div className="text-center flex-shrink-0 px-2">
                      <div className="text-xs text-gray-400">20/09/2024</div>
                      <div className="text-xs text-gray-400">15:00</div>
                    </div>
                    <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                      <span className="text-sm truncate text-right">Barcelona</span>
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src="/images/barcelona.png" 
                          alt="Barcelona" 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src="/images/corinthians.png" 
                          alt="Corinthians" 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm truncate">Corinthians</span>
                    </div>
                    <div className="text-center flex-shrink-0 px-2">
                      <div className="text-xs text-gray-400">22/09/2024</div>
                      <div className="text-xs text-gray-400">14:00</div>
                    </div>
                    <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                      <span className="text-sm truncate text-right">Flamengo</span>
                      <div className="w-6 h-6 flex-shrink-0 bg-gray-700 rounded flex items-center justify-center">
                        <Image 
                          src="/images/juventus.png" 
                          alt="Flamengo" 
                          width={20} 
                          height={20}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
      </div>
    </>
  );
}
