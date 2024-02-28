import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Games from "./pages/Games";
import Perfil from "./pages/Perfil";
import Badge from "./pages/Badge";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/games" element={<Games />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/badge" element={<Badge />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

      </BrowserRouter>

    </div >
  )
}
export default App;