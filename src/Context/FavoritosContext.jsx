// src/context/FavoritosContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const almacenados = localStorage.getItem("favoritos");
    return almacenados ? JSON.parse(almacenados) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (personaje) => {
    setFavoritos((prev) => {
      const existe = prev.find((p) => p.id === personaje.id);
      if (existe) {
        return prev.filter((p) => p.id !== personaje.id);
      } else {
        return [...prev, personaje];
      }
    });
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
