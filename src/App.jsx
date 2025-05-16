import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from './UserContext';
import "./App.css";
import CadastroVendedor from "./pages/cadastro";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path="/cadastrar" element={<CadastroVendedor />} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
