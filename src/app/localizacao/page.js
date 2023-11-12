"use client";

import React from "react";

const LocalizacaoPage = () => {
  const mapaImageUrl =
    "https://s2-g1.glbimg.com/wcy0Mpdo1NZpo0HibSS1qH9wuow=/0x0:445x569/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/o/X/Jlf0RqTsmrcHU6ZBRkqA/teste-99.png"; // Substitua com a URL da sua imagem estática

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        O Motorista está indo até você.
      </h2>
      <h3 className="text-2xl font-bold mb-4">Por favor, aguarde.</h3>

      <div className="mb-4 mx-auto" style={{ maxWidth: "300px" }}>
        <img
          src={mapaImageUrl}
          alt="Localização Estática"
          className="mt-2 rounded-lg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">Placa do motorista: XXXXXXX</h3>
    </div>
  );
};

export default LocalizacaoPage;
