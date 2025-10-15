// src/pages/Menu/Menu.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Menu() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [familia, setFamilia] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data);
        setCargando(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const familiasUnicas = [...new Set(personajes.map((p) => p.family).filter(Boolean))];

  const filtrados = personajes.filter((p) => {
    const coincideNombre = p.fullName.toLowerCase().includes(busqueda.toLowerCase());
    const coincideFamilia = familia === "" || p.family === familia;
    return coincideNombre && coincideFamilia;
  });

  if (cargando) return <p>Cargando personajes...</p>;

  return (
    <div className="menu-container">
      <h1>Personajes de Game of Thrones</h1>

      <div className="buscador-filtro">
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={familia} onChange={(e) => setFamilia(e.target.value)}>
          <option value="">Todas las familias</option>
          {familiasUnicas.map((f, i) => (
            <option key={i} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="lista-personajes">
        {filtrados.map((p) => (
          <div key={p.id} className="card-personaje">
            <Link to={`/detalle/${p.id}`}>
              <img src={p.imageUrl} alt={p.fullName} />
              <h3>{p.fullName}</h3>
              <p>{p.family}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
