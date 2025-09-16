"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: "Noticias", path: "/noticias" },
    { name: "Temporada", path: "/temporada" }, 
    { name: "Carreira", path: "/cartola" },
    { name: "Time", path: "/teams" },
    { name: "Arcadeball", path: "/" },
    { name: "Recompensas", path: "/recompensa" },
    { name: "TopGlobal", path: "/topglobal" },
    { name: "Configuração", path: "/" }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaYoutube />, name: "Youtube" },
    { icon: <FaFacebook />, name: "Facebook" }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-indigo-900 z-[70] transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-400">
          <h2 className="text-white font-bold text-lg">Navegue por:</h2>
          <button 
            onClick={onClose}
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            aria-label="Fechar menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6 border-b border-green-400">
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block text-white font-bold underline hover:text-gray-300 transition-colors text-lg"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="p-6">
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-3 text-white font-bold underline hover:text-gray-300 transition-colors text-lg"
                onClick={onClose}
              >
                <span className="text-xl">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
