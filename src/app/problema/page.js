"use client";
import React, { useState } from "react";

const ProblemaPage = () => {
  const [problema, setProblema] = useState("");
  const [tiposProblema, setTiposProblema] = useState([]);

  const handleTipoProblema = (tipo) => {
    if (tiposProblema.includes(tipo)) {
      setTiposProblema(tiposProblema.filter((item) => item !== tipo));
    } else {
      setTiposProblema([...tiposProblema, tipo]);
    }
  };

  const handleSubmit = () => {
    window.location.href = "/fotos";
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Descreva o seu Problema:</h2>

      <textarea
        className="p-4 w-full border mb-4"
        placeholder="Digite o seu problema aqui..."
        value={problema}
        onChange={(e) => setProblema(e.target.value)}
      />

      <div className="flex flex-wrap justify-center mb-4">
        <button
          className={`mr-4 mb-4 p-2 rounded ${
            tiposProblema.includes("Mecânico")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTipoProblema("Mecânico")}
        >
          Mecânico
        </button>
        <button
          className={`mr-4 mb-4 p-2 rounded ${
            tiposProblema.includes("Elétrico")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTipoProblema("Elétrico")}
        >
          Elétrico
        </button>
        <button
          className={`mr-4 mb-4 p-2 rounded ${
            tiposProblema.includes("Pneu Furou")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTipoProblema("Pneu Furou")}
        >
          Pneu Furou
        </button>
        <button
          className={`mr-4 mb-4 p-2 rounded ${
            tiposProblema.includes("Acidente")
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleTipoProblema("Acidente")}
        >
          Acidente
        </button>
      </div>

      <button
        className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600`}
        onClick={handleSubmit}
        disabled={!problema || tiposProblema.length === 0}
      >
        Enviar Problema
      </button>
    </div>
  );
};

export default ProblemaPage;
