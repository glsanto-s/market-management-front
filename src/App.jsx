import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalContext } from './UserContext';
import './App.css';
import CadastroVendedor from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<CadastroVendedor />} />
          <Route path="/cadastrar-produto" element={<CadastroProduto />} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
