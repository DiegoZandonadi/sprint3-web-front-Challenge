"use client";
import { useState } from "react";
import Image from "next/image";

export default function Settings() {
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900 text-white px-6 py-8">
   
      <div className="flex items-center justify-between mb-12">
        <button className="text-2xl">☰</button>
        <h1 className="font-bold">Fernando torres</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <Image src="/images/Customer.png" alt="icone" width={40} height={40} />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-lg font-bold mb-10">Configurações</h2>

      {/* Perfil */}
      <div className="flex items-center gap-4 mb-20">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
     <Image src="/images/Customer.png" alt="icone" width={60} height={50} />
        </div>
        <div>
          <p className="font-bold">Fernando torres</p>
          <p className="text-green-400 text-sm">Team: The Angle</p>
        </div>
      </div>

      {/* Conta */}
      <div className="mb-12">
        <h3 className="font-bold mb-3">Sua Conta</h3>
        <button className="block mb-5 text-left">Mudar nome do Time</button>
        <button className="block text-left">Mudar nome de usuário</button>
      </div>

      {/* Notificação */}
      <div className="mb-12">
        <h3 className="font-bold mb-3">Notificação</h3>
        <div className="flex items-center justify-between  p-3 rounded-lg">
          <p className="text-m max-w-xs">
            Ao ligar essa opção você receberá notificações em tempo real de todos os jogos desejados.
          </p>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-25 h-6 rounded-full p-1 transition-colors duration-300 ${
              notifications ? "bg-green-400" : "bg-gray-700"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="flex justify-center">
        <button className="bg-green-500 text-black font-bold w-40 py-3 rounded-full">
          Logout
        </button>
      </div>
    </div>
  );
}
