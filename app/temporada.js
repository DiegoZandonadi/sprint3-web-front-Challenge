"use client";
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

export default function Temporada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-950 text-white relative">
      <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
        <button aria-label="Abrir menu" className="text-2xl">☰</button>
        <h1 className="font-bold text-lg">Fernando Torres</h1>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <FaUsers />
        </div>
      </header>
    </div>
  );
}