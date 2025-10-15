import React from "react";
import "./Informativa.css";

function Informativa() {
  return (
    <div className="info-container">
      <div className="info-card">
        <h1>THRONES API</h1>
        <p className="autor">Andres Puentes</p>

        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
          alt="Game of Thrones"
          className="info-logo"
        />

        <p className="descripcion">
          API con información de personajes, familias y casas del universo de Game of Thrones.
        </p>


        <p className="descripcion">
          github.com/TheKinggAndres
        </p>


        <a
          href="https://thronesapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          thronesapi.com
        </a>

        <p className="version">v 2.0</p>
      </div>
    </div>
  );
}

export default Informativa;
