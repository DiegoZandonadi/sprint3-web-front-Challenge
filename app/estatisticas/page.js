"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaUsers,
  FaHome,
  FaIdCard,
  FaGift,
  FaChartLine,
  FaClock,
  FaUserPlus,
  FaFire,
  FaChevronLeft
} from "react-icons/fa";
import Sidebar from "../../components/sidebar";

export default function Estatisticas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const overviewCards = [
    {
      title: "Usuários ativos",
      value: "18.245",
      variation: "+12%",
      description: "vs. semana anterior",
      icon: <FaUsers />
    },
    {
      title: "Tempo médio",
      value: "12m 48s",
      variation: "+8%",
      description: "Sessões por usuário",
      icon: <FaClock />
    },
    {
      title: "Novos cadastros",
      value: "1.426",
      variation: "+19%",
      description: "Últimos 7 dias",
      icon: <FaUserPlus />
    },
    {
      title: "Sessões por dia",
      value: "34.910",
      variation: "+5%",
      description: "Tendência de crescimento",
      icon: <FaFire />
    }
  ];

  const activityData = [
    { label: "Seg", activeUsers: 2400, avgTime: 10.2 },
    { label: "Ter", activeUsers: 2600, avgTime: 11.4 },
    { label: "Qua", activeUsers: 2750, avgTime: 12.6 },
    { label: "Qui", activeUsers: 3100, avgTime: 13.1 },
    { label: "Sex", activeUsers: 3300, avgTime: 13.8 },
    { label: "Sáb", activeUsers: 2950, avgTime: 12.9 },
    { label: "Dom", activeUsers: 2800, avgTime: 11.7 }
  ];

  const retentionData = [
    { cohort: "Semana 1", percent: 78 },
    { cohort: "Semana 2", percent: 72 },
    { cohort: "Semana 3", percent: 65 },
    { cohort: "Semana 4", percent: 61 },
    { cohort: "Semana 5", percent: 54 }
  ];

  const maxActiveUsers = useMemo(
    () => Math.max(...activityData.map((item) => item.activeUsers)),
    [activityData]
  );

  const maxRetention = useMemo(
    () => Math.max(...retentionData.map((item) => item.percent)),
    [retentionData]
  );

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />

      <div
        className={`min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950 text-white flex flex-col transition-transform duration-300 ease-in-out relative ${
          isMenuOpen ? "transform -translate-x-80" : ""
        }`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.95), rgba(49,46,129,0.85)), radial-gradient(circle at top right, rgba(16,185,129,0.18), transparent 60%)`
        }}
      >
        <header className="flex items-center justify-between px-4 py-3 bg-gray-900/70 backdrop-blur">
          <button
            aria-label="Abrir menu"
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <h1 className="font-bold text-lg flex items-center gap-2">
            Painel de Estatísticas
            <FaChartLine className="text-green-400 text-base" />
          </h1>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
            <FaUsers />
          </div>
        </header>

        <div className="flex-1 px-4 py-6 relative z-10 overflow-hidden">
          <div className="mb-6">
            <Link
              href="/home"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaChevronLeft className="text-white text-sm" />
              </div>
              Voltar para o início
            </Link>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {overviewCards.map((card, index) => (
              <div
                key={card.title}
                className="bg-gradient-to-br from-purple-800/70 to-indigo-900/60 border border-purple-700/40 rounded-2xl p-4 relative overflow-hidden shadow-lg shadow-purple-900/40"
              >
                <div className="absolute -top-10 -right-4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl"></div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm uppercase tracking-wide text-gray-300">
                    {card.title}
                  </span>
                  <div className="w-10 h-10 bg-green-500/20 text-green-300 rounded-full flex items-center justify-center text-lg">
                    {card.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white">{card.value}</div>
                <div className="mt-2 text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-green-400 font-semibold">
                    {card.variation}
                  </span>
                  {card.description}
                </div>
              </div>
            ))}
          </section>

          <section className="bg-purple-800/40 border border-purple-700/40 rounded-2xl p-5 mb-8 shadow-lg shadow-purple-900/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-green-400">
                Atividade semanal
              </h2>
              <div className="text-sm text-gray-300">
                Usuários ativos & tempo médio
              </div>
            </div>
            <div className="grid grid-cols-7 gap-3">
              {activityData.map((day) => {
                const heightPercentage = (day.activeUsers / maxActiveUsers) * 100;

                return (
                  <div key={day.label} className="flex flex-col items-center gap-2">
                    <div className="relative w-full h-40 bg-indigo-950/60 rounded-lg overflow-hidden border border-indigo-800/60">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500/80 via-green-400/70 to-green-400/40 transition-all duration-500"
                        style={{ height: `${heightPercentage}%` }}
                      ></div>
                      <div className="absolute top-2 right-2 text-xs text-gray-200 font-semibold">
                        {Math.round(day.avgTime)}m
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-300">
                      {day.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-indigo-900/50 border border-indigo-800/50 rounded-2xl p-5 shadow-lg shadow-purple-900/40">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <h2 className="text-lg font-bold text-green-400">
                Retenção por semana
              </h2>
              <span className="text-sm text-gray-300">
                Percentual de usuários que retornam após o cadastro
              </span>
            </div>
            <div className="space-y-4">
              {retentionData.map((item) => (
                <div key={item.cohort}>
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                    <span>{item.cohort}</span>
                    <span className="text-green-400 font-semibold">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="h-3 bg-indigo-950/70 rounded-full overflow-hidden border border-indigo-800/50">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 transition-all duration-500"
                      style={{ width: `${(item.percent / maxRetention) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-indigo-950 flex justify-around py-3 relative z-10">
          <Link
            href="/home"
            className="flex flex-col items-center hover:text-gray-300 transition-colors"
          >
            <FaHome />
            <span className="text-xs">Menu</span>
          </Link>
          <Link
            href="/teams"
            className="flex flex-col items-center hover:text-gray-300 transition-colors"
          >
            <FaUsers />
            <span className="text-xs">Time</span>
          </Link>
          <Link
            href="/cartola"
            className="flex flex-col items-center hover:text-gray-300 transition-colors"
          >
            <FaIdCard />
            <span className="text-xs">Cartola</span>
          </Link>
          <Link
            href="/recompensa"
            className="flex flex-col items-center hover:text-gray-300 transition-colors"
          >
            <FaGift />
            <span className="text-xs">Recompensas</span>
          </Link>
        </div>

        <div className="absolute right-0 top-1/4 w-32 h-32 bg-green-400 rounded-full opacity-40 blur-2xl z-0"></div>
        <div className="absolute left-0 top-3/4 w-28 h-28 bg-green-300 rounded-full opacity-35 blur-2xl z-0"></div>
        <div className="absolute right-1/4 top-1/2 w-24 h-24 bg-green-400 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute left-1/3 bottom-1/3 w-20 h-20 bg-green-300 rounded-full opacity-30 blur-2xl z-0"></div>
      </div>
    </>
  );
}

