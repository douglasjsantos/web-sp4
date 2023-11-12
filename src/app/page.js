"use client";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex justify-center items-center mb-8">
          <a
            href="#"
            className="text-2xl font-bold text-blue-500 hover:text-blue-600"
          >
            AutoHelp
          </a>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "/home";
          }}
        >
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
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?
              <Link href="/register">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Criar Conta
                </button>
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
