"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHome, FaUsers, FaIdCard, FaGift } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../../components/sidebar";

export default function RewardsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const rewards = [
    {
      id: 1,
      img: "/images/corinthians.png",
      titulo: "Corinthians x Flamengo",
      data: "20/06/2023",
      valor: "120 coins",
      descricao: "Ingresso VIP para o jogo do Corinthians contra o Flamengo!",
    },
    {
      id: 2,
      img: "/images/adidas.png",
      titulo: "Cashback 10% Adidas",
      valor: "120 coins",
      descricao: "Receba 10% de cashback nas compras no site da Adidas.",
    },
    {
      id: 3,
      img: "/images/corinthians.png",
      titulo: "Corinthians x Palmeiras",
      data: "20/06/2023",
      valor: "120 coins",
      descricao: "Entrada gratuita no clássico Corinthians x Palmeiras!",
    },
    {
      id: 4,
      img: "/images/logo.png",
      titulo: "Camisa Passa Bola",
      valor: "120 coins",
      descricao: "Ganhe uma camisa exclusiva do Passa Bola!",
    },
  ];

  const handleRewardClick = (reward) => {
    setSelectedReward(reward);
  };

  const handleConfirm = () => {
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
      setSelectedReward(null);
    }, 2000);
  };

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />

      <div
        className={`min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform -translate-x-80" : ""
        }`}
      >
   
        <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <button
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold">Fernando Torres</h1>
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

       
        {showCongrats && (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
            <h2 className="text-3xl font-bold mb-3 text-green-400"> Parabéns!</h2>
            <p className="text-lg text-gray-200">
              Você resgatou sua recompensa com sucesso!
            </p>
          </div>
        )}

   
        {!showCongrats && !selectedReward && (
          <main className="flex-1 px-4 py-6 space-y-4">
            {rewards.map((item) => (
              <div
                key={item.id}
                onClick={() => handleRewardClick(item)}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <p>{item.titulo}</p>
                    {item.data && (
                      <span className="text-sm text-gray-300">{item.data}</span>
                    )}
                  </div>
                </div>
                <p className="font-bold text-purple-300">{item.valor}</p>
              </div>
            ))}
          </main>
        )}

   
        {!showCongrats && selectedReward && (
          <main className="flex-1 px-4 py-6 flex flex-col items-center text-center animate-fadeIn">
            <Image
              src={selectedReward.img}
              alt={selectedReward.titulo}
              width={100}
              height={100}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedReward.titulo}</h2>
            <p className="text-gray-300 mb-4 max-w-md">{selectedReward.descricao}</p>
            <p className="font-bold text-purple-300 mb-6">{selectedReward.valor}</p>

            <button
              onClick={handleConfirm}
              className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-bold text-white transition-all"
            >
              Confirmar Resgate
            </button>

            <button
              onClick={() => setSelectedReward(null)}
              className="mt-3 text-sm text-gray-300 hover:text-gray-100"
            >
              Voltar
            </button>
          </main>
        )}

        <footer className="flex justify-around items-center bg-gray-800 py-3 border-t border-gray-700">
          <Link
            href="/home"
            className="flex flex-col items-center text-green-400 font-bold text-sm"
          >
            <FaHome className="text-xl" />
            Menu
          </Link>
          <Link
            href="/noticias"
            className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors"
          >
            <FaUsers className="text-xl" />
            Notícias
          </Link>
          <Link
            href="/teams"
            className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors"
          >
            <FaUsers className="text-xl" />
            Team
          </Link>
          <Link
            href="/cartola"
            className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors"
          >
            <FaIdCard className="text-xl" />
            Cartola
          </Link>
          <Link
            href="/recompensa"
            className="flex flex-col items-center text-green-400 font-bold text-sm"
          >
            <FaGift className="text-xl" />
            Recompensas
          </Link>
        </footer>
      </div>

   
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
