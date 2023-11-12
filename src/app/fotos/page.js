"use client";
import React, { useState } from "react";

const FotosPage = () => {
  const [fotoFrontal, setFotoFrontal] = useState(null);
  const [fotoLateral, setFotoLateral] = useState(null);
  const [fotoTraseira, setFotoTraseira] = useState(null);

  const handleFileChange = (event, setFotoCallback) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoCallback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnviar = () => {
    window.location.href = "/localizacao";
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Selecione Fotos do seu Veículo:
      </h2>

      <div className="mb-4">
        <label htmlFor="fotoFrontal" className="mb-2 block">
          Foto Frontal:
        </label>
        <input
          type="file"
          accept="image/*"
          id="fotoFrontal"
          onChange={(event) => handleFileChange(event, setFotoFrontal)}
        />
        {fotoFrontal && (
          <img src={fotoFrontal} alt="Foto Frontal" className="mt-2" />
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="fotoLateral" className="mb-2 block">
          Foto Lateral:
        </label>
        <input
          type="file"
          accept="image/*"
          id="fotoLateral"
          onChange={(event) => handleFileChange(event, setFotoLateral)}
        />
        {fotoLateral && (
          <img src={fotoLateral} alt="Foto Lateral" className="mt-2" />
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="fotoTraseira" className="mb-2 block">
          Foto Traseira:
        </label>
        <input
          type="file"
          accept="image/*"
          id="fotoTraseira"
          onChange={(event) => handleFileChange(event, setFotoTraseira)}
        />
        {fotoTraseira && (
          <img src={fotoTraseira} alt="Foto Traseira" className="mt-2" />
        )}
      </div>

      <button
        onClick={handleEnviar}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        disabled={!fotoFrontal || !fotoLateral || !fotoTraseira}
      >
        Enviar Fotos
      </button>
    </div>
  );
};

export default FotosPage;
