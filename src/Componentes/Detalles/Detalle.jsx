// src/Componentes/Detalles/Detalle.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritosContext } from "../../Context/FavoritosContext";
import "./Detalle.css";

function Detalle() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);

  // 👉 Si no hay id, mostramos el mensaje
  if (!id) {
    return (
      <div className="detalle-container">
        <h2>Selecciona un personaje desde el Home para ver sus detalles</h2>
      </div>
    );
  }

  // Si hay id, cargamos el personaje
  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonaje(data))
      .catch((error) => console.error("Error al cargar personaje:", error));
  }, [id]);

  if (!personaje) return <p>Cargando detalle...</p>;

  const esFavorito = favoritos.some((p) => p.id === personaje.id);

  return (
    <div className="detalle-container">
      <img src={personaje.imageUrl} alt={personaje.fullName} />
      <h2>{personaje.fullName}</h2>
      <p><strong>Familia:</strong> {personaje.family}</p>
      <p><strong>Título:</strong> {personaje.title}</p>
      <button onClick={() => toggleFavorito(personaje)}>
        {esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
    </div>
  );
}

export default Detalle;
