"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário:", usuario, "Senha:", senha);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-10 00 to-purple-900">
      <div className="w-full max-w-sm rounded-2xl bg-transparent p-6 text-white">
        

        <div className="flex justify-center mb-6">
          <Image src="/images/logo.png" alt="Logo" width={250} height={100} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
 
          <div>
            <label className="block text-lg font-bold">Login</label>
            <input
              type="text"
              placeholder="Usuário"
              className="mt-1 w-full rounded-full bg-white border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

        
          <div>
            <label className="block text-lg font-bold">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="mt-1 w-full rounded-full  bg-white border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <a href="#" className="mt-1 inline-block text-xs text-gray-300 hover:underline">
              Esqueci minha senha
            </a>
          </div>

         
          <button
            type="submit"
            className="w-full rounded-full bg-green-400 py-2 font-semibold text-black transition hover:bg-green-500"
          >
            Login
          </button>
        </form>

     
        <div className="mt-6 space-y-2 text-center text-sm">
          <a href="#" className="block hover:underline">
            Cadastre-se
          </a>
          <a href="#" className="block hover:underline font-bold">
            Passa Bola
          </a>
        </div>
      </div>
    </div>
  );
}
