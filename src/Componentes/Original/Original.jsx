// src/pages/Original/Original.jsx
import React, { useState } from "react";
import "./Original.css";

function Original() {
  const preguntas = [
    { q: "¿Prefieres el Norte o el Sur?", a1: "Norte", a2: "Sur" },
    { q: "¿Te consideras más noble o ambicioso?", a1: "Noble", a2: "Ambicioso" },
    { q: "¿Qué prefieres?", a1: "Espada", a2: "Dragón" },
  ];

  const [respuestas, setRespuestas] = useState([]);
  const [resultado, setResultado] = useState("");

  const responder = (r) => {
    const nuevas = [...respuestas, r];
    setRespuestas(nuevas);

    if (nuevas.length === preguntas.length) {
      const puntos = nuevas.filter((r) => r === "Norte" || r === "Noble" || r === "Espada").length;
      setResultado(
        puntos >= 2
          ? "Eres como Jon Snow: valiente y leal 🐺"
          : "Eres como Daenerys: poderosa y decidida 🐉"
      );
    }
  };

  return (
    <div className="original-container">
      <h1>¿Qué personaje eres?</h1>

      {resultado ? (
        <h2>{resultado}</h2>
      ) : (
        preguntas.map((p, i) => (
          <div key={i} className="pregunta">
            <p>{p.q}</p>
            <button onClick={() => responder(p.a1)}>{p.a1}</button>
            <button onClick={() => responder(p.a2)}>{p.a2}</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Original;
