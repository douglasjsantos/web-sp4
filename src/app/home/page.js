"use client";
import React, { useState } from "react";

const HomePage = () => {
  const [solicitacoes, setSolicitacoes] = useState([
    { id: 1, placa: "AAAAAAA" },
    { id: 2, placa: "BBBBBBB" },
    { id: 3, placa: "CCCCCCC" },
    { id: 4, placa: "DDDDDDD" },
    { id: 5, placa: "EEEEEEE" },
    { id: 6, placa: "FFFFFFF" },
  ]);

  const [solicitacaoSelecionada, setSolicitacaoSelecionada] = useState(null);

  const handleSelecionarSolicitacao = (id) => {
    setSolicitacaoSelecionada(id);
  };

  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">AutoHelp</h1>
      </div>

      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Selecione o seu veículo
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {solicitacoes.map((solicitacao) => (
          <div
            key={solicitacao.id}
            className={`mb-4 p-4 border cursor-pointer ${
              solicitacaoSelecionada === solicitacao.id ? "bg-blue-100" : ""
            } h-32 w-40`}
            onClick={() => handleSelecionarSolicitacao(solicitacao.id)}
          >
            <span role="img" aria-label="truck" className="text-3xl">
              🚚
            </span>
            <span className="ml-2">Placa: {solicitacao.placa}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button
          className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${
            solicitacoes.length % 2 !== 0 ? "ml-4" : ""
          }`}
          onClick={() => {
            window.location.href = "/problema";
          }}
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
};

export default HomePage;
