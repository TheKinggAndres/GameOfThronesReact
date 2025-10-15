// src/pages/Favoritos/Favoritos.jsx
import React, { useContext } from "react";
import { FavoritosContext } from "../../Context/FavoritosContext";
import { Link } from "react-router-dom";
import "./Favoritos.css";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div className="favoritos-container">
      <h1>Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes personajes favoritos aún.</p>
      ) : (
        <div className="favoritos-lista">
          {favoritos.map((p) => (
            <div key={p.id} className="favorito-card">
              <Link to={`/detalle/${p.id}`}>
                <img src={p.imageUrl} alt={p.fullName} />
                <h4>{p.fullName}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
