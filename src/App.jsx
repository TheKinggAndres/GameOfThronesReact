import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FavoritosProvider } from "./Context/FavoritosContext";

// Importación de tus componentes
import Home from "./Componentes/Home/Home";
import Detalle from "./Componentes/Detalles/Detalle";
import Favoritos from "./Componentes/Favoritos/Favoritos";
import Original from "./Componentes/Original/Original";
import Informatica from "./Componentes/Informativa/Informatica";

import "./App.css";

function App() {
  return (
    <FavoritosProvider>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/detalle">Detalles</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/original">Original</Link>
          <Link to="/informativa">Informativa</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/original" element={<Original />} />
          <Route path="/informativa" element={<Informatica />} />
        </Routes>
      </Router>
    </FavoritosProvider>
  );
}

export default App;
