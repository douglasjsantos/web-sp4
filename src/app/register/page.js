"use client";

import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Sua conta foi criada com sucesso!");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-600"
            >
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="sobrenome"
              className="block text-sm font-medium text-gray-600"
            >
              Sobrenome:
            </label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-600"
            >
              CPF:
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="placa"
              className="block text-sm font-medium text-gray-600"
            >
              Placa do Veículo:
            </label>
            <input
              type="text"
              id="placa"
              name="placa"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
