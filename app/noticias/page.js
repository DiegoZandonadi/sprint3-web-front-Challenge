"use client";
import { useState, useEffect } from "react";
import {
  FaUsers,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaHome,
  FaIdCard,
  FaGift
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function Noticias() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const allNews = [
    {
      src: "/images/vista-da-jogadora-de-futebol-feminina-pronta-para-partida.jpg",
      alt: "Equipe de futebol feminino pronta para partida",
      title: "Equipe avança para a final do campeonato regional após vitória marcante por 3 a 1.",
      isMain: true
    },
    {
      src: "/images/pexels-laura-rincon-318039951-15825070.jpg",
      alt: "Jogadora de futebol",
      title: "Conheça as estrelas da liga mais prestigiada do futebol mundial – talento, garra e paixão em cada jogo!",
      isMain: false
    },
    {
      src: "/images/pexels-jonathanborba-18026363.jpg",
      alt: "Equipe unida de futebol feminino",
      title: "Unidas pela paixão e pela força do coletivo, jogadoras se preparam para mais um desafio em campo.",
      isMain: false
    },
    {
      src: "/images/pexels-avillalonv-32366610.jpg",
      alt: "Jogadora em ação",
      title: "Técnica apurada e determinação em campo: jogadoras mostram que o futebol feminino está em constante evolução.",
      isMain: false
    },
    {
      src: "/images/pexels-anastasia-shuraeva-9519542.jpg",
      alt: "Jogadora concentrada",
      title: "Concentração e foco total: atletas se dedicam ao máximo para alcançar seus objetivos no esporte.",
      isMain: false
    }
  ];

  const currentNews = allNews[currentNewsIndex];
  const secondaryNews = allNews.filter((_, index) => index !== currentNewsIndex);

  const goToPreviousNews = () => {
    setCurrentNewsIndex((prev) => (prev === 0 ? allNews.length - 1 : prev - 1));
  };

  const goToNextNews = () => {
    setCurrentNewsIndex((prev) => (prev === allNews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev === allNews.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [allNews.length]);

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
      
      <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-indigo-950 text-white relative transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-80' : ''}`}>

        <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <button 
            aria-label="Abrir menu" 
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold text-lg">Fernando Torres</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </header>

        <div className="flex justify-center px-3 py-8">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full px-3 py-2 pr-10 bg-gray-200 text-gray-800 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm" />
          </div>
        </div>

        <section className="px-4 pb-6 relative z-10">
          
          <div className="relative rounded-lg overflow-hidden mb-4">
            <Image
              src={currentNews.src}
              alt={currentNews.alt}
              width={400}
              height={250}
              className="w-full h-64 object-cover"
              priority
            />
            
            <button
              aria-label="Notícia anterior"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={goToPreviousNews}
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              aria-label="Próxima notícia"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              onClick={goToNextNews}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>

          <div className="bg-purple-800 rounded-lg p-4">
            <h2 className="text-white text-lg font-semibold leading-tight">
              {currentNews.title}
            </h2>
            
            <div className="flex justify-center mt-3 space-x-2">
              {allNews.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentNewsIndex 
                      ? 'bg-white' 
                      : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8 mt-8">
            {secondaryNews.map((noticia, index) => (
              <div key={index} className="bg-purple-700 rounded-lg overflow-hidden flex">
                <div className="w-32 h-24 flex-shrink-0">
                  <Image
                    src={noticia.src}
                    alt={noticia.alt}
                    width={128}
                    height={96}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 p-4">
                  <p className="text-white text-sm leading-relaxed">{noticia.title}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        <div className="flex justify-center mt-10 mb-6 px-4 relative z-20">
          <button className="flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors bg-transparent">
            Veja mais
            <FaChevronDown className="text-xs" />
          </button>
        </div>

        <div className="bg-indigo-950 flex justify-around py-3 mt-6">
          <Link href="/home" className="flex flex-col items-center text-green-400 font-bold">
            <FaHome />
            <span className="text-xs">Menu</span>
          </Link>
          <Link href="/noticias" className="flex flex-col items-center text-green-400 font-bold">
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

        <div className="absolute left-0 top-1/3 w-24 h-24 bg-green-400 rounded-full opacity-60 z-0 shadow-lg shadow-green-400/50"></div>
        <div className="absolute left-2 top-2/3 w-20 h-20 bg-green-300 rounded-full opacity-55 z-0 shadow-lg shadow-green-300/50"></div>
        <div className="absolute right-0 top-1/4 w-28 h-28 bg-green-400 rounded-full opacity-60 z-0 shadow-lg shadow-green-400/50"></div>
        <div className="absolute right-2 top-3/4 w-[5.5rem] h-[5.5rem] bg-green-300 rounded-full opacity-55 z-0 shadow-lg shadow-green-300/50"></div>
      </div>
    </>
  );
}
