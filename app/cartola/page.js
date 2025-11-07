"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  FaUserCircle, FaBars, FaHome, FaUsers, FaClipboardList, FaGift, 
  FaFutbol, FaShieldAlt, FaTshirt, FaCrosshairs 
} from "react-icons/fa";
import Sidebar from "../../components/sidebar";

export default function Cartola() {
  const [orcamento, setOrcamento] = useState(500);
  const [gasto, setGasto] = useState(0);
  const [time, setTime] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const jogadoras = [
    { nome: "Bárbara", posicao: "Goleira", preco: 15, media: 7.8, icone: <FaShieldAlt size={20}/> },
    { nome: "Rafaelle", posicao: "Zagueira", preco: 18, media: 9.2, icone: <FaShieldAlt size={20}/> },
    { nome: "Tamires", posicao: "Lateral", preco: 16, media: 8.5, icone: <FaTshirt size={20}/> },
    { nome: "Formiga", posicao: "Meio-campo", preco: 22, media: 10.4, icone: <FaFutbol size={20}/> },
    { nome: "Marta", posicao: "Meio-campo", preco: 25, media: 11.1, icone: <FaFutbol size={20}/> },
    { nome: "Bia Zaneratto", posicao: "Atacante", preco: 28, media: 12.7, icone: <FaCrosshairs size={20}/> },
    { nome: "Debinha", posicao: "Atacante", preco: 30, media: 13.4, icone: <FaCrosshairs size={20}/> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const escalarJogadora = (jogadora) => {

    if (time.find((j) => j.nome === jogadora.nome)) {
      setMensagem(`⚠️ ${jogadora.nome} já está escalada!`);
      return;
    }


    if (gasto + jogadora.preco > orcamento) {
      setMensagem(`💰 Você não tem orçamento suficiente para comprar ${jogadora.nome}!`);
      return;
    }

   
    setTime([...time, jogadora]);
    setGasto(gasto + jogadora.preco);
    setMensagem(`✅ ${jogadora.nome} escalada com sucesso!`);
  };

  const removerJogadora = (jogadora) => {
    setTime(time.filter((j) => j.nome !== jogadora.nome));
    setGasto(gasto - jogadora.preco);
    setMensagem(`❌ ${jogadora.nome} removida do time.`);
  };
  const posicoes = ["Goleira", "Zagueira", "Lateral", "Meio-campo", "Atacante"];

  return (
    <>
      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />

      <div className={`min-h-screen bg-gradient-to-b from-[#1a1832] to-[#0f0e1c] text-white pb-20 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform -translate-x-80" : ""}`}>

        <header className="flex items-center justify-between bg-gray-800 text-white p-4">
          <FaBars
            size={24}
            className="hover:text-gray-300 transition-colors cursor-pointer"
            onClick={toggleMenu}
          />
          <h1 className="font-bold">Fernando Torres</h1>
          <FaUserCircle size={24} />
        </header>


        <div className="bg-green-700 rounded-lg w-[90%] mx-auto h-[400px] flex flex-col items-center justify-start mt-4 mb-6 p-4">
          <h2 className="text-lg font-bold mb-2">Seu Time</h2>
          {posicoes.map((posicao) => (
            <div key={posicao} className="w-full mb-2">
              <p className="font-semibold text-sm text-gray-200 underline">{posicao}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {time.filter((j) => j.posicao === posicao).length === 0 ? (
                  <span className="text-gray-400 text-xs">Nenhuma escalada</span>
                ) : (
                  time
                    .filter((j) => j.posicao === posicao)
                    .map((j) => (
                      <div key={j.nome} className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-lg text-sm">
                        {j.icone}
                        <span>{j.nome}</span>
                        <button
                          onClick={() => removerJogadora(j)}
                          className="text-red-400 hover:text-red-300 ml-1"
                        >
                          X
                        </button>
                      </div>
                    ))
                )}
              </div>
            </div>
          ))}
        </div>


        {mensagem && (
          <div className="mx-4 bg-gray-800 text-center p-3 rounded-lg text-sm text-yellow-300 mb-4">
            {mensagem}
          </div>
        )}

  
        <div className="grid grid-cols-2 gap-4 px-4 mt-4">
          {jogadoras.map((jogadora, index) => {
            const jaEscalada = time.find((j) => j.nome === jogadora.nome);
            return (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1">
                  {jogadora.icone}
                  <h3 className="font-bold">{jogadora.nome}</h3>
                </div>
                <p className="text-sm text-gray-300">{jogadora.posicao}</p>
                <p>Preço: {jogadora.preco} coin</p>
                <p>Média: {jogadora.media} pts</p>
                <button
                  className={`mt-2 w-full font-bold py-2 px-4 rounded-lg ${
                    jaEscalada
                      ? "bg-gray-600 cursor-not-allowed text-gray-300"
                      : "bg-green-500 text-black hover:bg-green-400"
                  }`}
                  disabled={jaEscalada}
                  onClick={() => escalarJogadora(jogadora)}
                >
                  {jaEscalada ? "Escalada" : "Escalar"}
                </button>
              </div>
            );
          })}
        </div>


        <div className="bg-gray-800 p-4 rounded-lg mt-6 mx-4">
          <h3 className="font-bold text-lg">Orçamento</h3>
          <p>Total: {orcamento} coin</p>
          <p>Gasto: {gasto} coin</p>
          <p>Restante: {orcamento - gasto} coin</p>
          <div className="w-full bg-gray-600 h-2 rounded mt-2">
            <div
              className="bg-green-500 h-2 rounded"
              style={{ width: `${(gasto / orcamento) * 100}%` }}
            ></div>
          </div>
        </div>


        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around p-3">
          <Link href="/home" className="flex flex-col items-center text-green-400 font-bold">
            <FaHome />
            <span className="text-xs">Menu</span>
          </Link>
          <Link href="/noticias" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaUsers />
            <span className="text-xs">Notícias</span>
          </Link>
          <Link href="/teams" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaUsers />
            <span className="text-xs">Team</span>
          </Link>
          <Link href="/cartola" className="flex flex-col items-center text-green-400 font-bold">
            <FaClipboardList />
            <span className="text-xs">Cartola</span>
          </Link>
          <Link href="/recompensa" className="flex flex-col items-center hover:text-gray-300 transition-colors">
            <FaGift />
            <span className="text-xs">Recompensas</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
