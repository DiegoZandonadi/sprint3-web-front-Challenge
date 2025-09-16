"use client";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import Sidebar from "../../components/sidebar";

export default function Configuracoes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [teamName, setTeamName] = useState("The Anige");
  const [username, setUsername] = useState("Fernando torres");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLogout = () => {
    // Redirecionar para a página de login
    window.location.href = "/";
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
          <h1 className="font-bold text-lg">{username}</h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </header>

        <div className="flex-1 px-4 py-6">
          <h2 className="text-3xl font-bold mb-8">Configurações</h2>

          {/* Perfil do Usuário */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <FaUsers className="text-4xl text-black" />
            </div>
            <div>
              <h3 className="font-bold text-2xl">{username}</h3>
              <p className="text-green-400 text-base">Team: {teamName}</p>
            </div>
          </div>

          {/* Seção Sua Conta */}
          <div className="mb-10">
            <h3 className="font-bold text-xl mb-6">Sua Conta</h3>
            <div className="space-y-4">
              <button className="w-full text-left text-white hover:text-green-400 transition-colors py-3 text-lg">
                Mudar nome do Time
              </button>
              <button className="w-full text-left text-white hover:text-green-400 transition-colors py-3 text-lg">
                Mudar nome de usuário
              </button>
            </div>
          </div>

          {/* Seção Notificação */}
          <div className="mb-10">
            <h3 className="font-bold text-xl mb-6">Notificação</h3>
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="text-white text-base leading-relaxed">
                  Ao ligar essa opção você recebera notificações em tempo real de todos os jogos desejados.
                </p>
              </div>
              <button
                onClick={toggleNotifications}
                className={`w-14 h-7 rounded-full transition-colors flex-shrink-0 ${
                  notificationsEnabled ? 'bg-green-500' : 'bg-gray-600'
                }`}
              >
                <div className={`w-6 h-6 bg-white rounded-full transition-transform ${
                  notificationsEnabled ? 'translate-x-7' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Botão Logout */}
        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-green-400 text-white font-bold py-4 rounded-xl hover:bg-green-500 transition-colors text-lg"
          >
            Logout
          </button>
        </div>


        {/* Elementos decorativos */}
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-green-400 rounded-full opacity-60 z-0 shadow-lg shadow-green-400/50"></div>
        <div className="absolute left-0 bottom-1/4 w-28 h-28 bg-green-300 rounded-full opacity-55 z-0 shadow-lg shadow-green-300/50"></div>
      </div>
    </>
  );
}
