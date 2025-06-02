import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from './UserContext';
import "./App.css";
import CadastroVendedor from "./pages/Cadastro/Cadastro";
import DetalhesProduto from "./pages/Produto/detalhes";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path="/cadastrar" element={<CadastroVendedor />} />
          <Route path="/produto/:produto_id" element={<DetalhesProduto />} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
