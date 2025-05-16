import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import "../css/pages/cadastroVendedor.css";
import { useNavigate } from "react-router-dom";
import Imagem from "../assets/cadastro.png";

const CadastroVendedor = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    celular: "",
    senha: "",
    cnpj: "",
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const login = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/sellers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.status_code != 200) {
        console.error(response.message);
      }

      console.log("Cliente cadastrado com sucesso:", data);

      setError("");
      setSucess("Cliente cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <>
      <div className="container-cadastro">
      <div className="side_1"
        style={{
            backgroundImage: `url(${Imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}></div>
        <div className="side_2">
          <form onSubmit={handleSubmit}>
            <Input
              id="nome"
              label="Nome"
              required
              type="nome"
              onChange={handleChange}
            />
            <Input
              id="email"
              label="Email"
              required
              type="email"
              onChange={handleChange}
            />
            <Input
              id="celular"
              label="Celular"
              required
              type="tel"
              onChange={handleChange}
            />
            <Input
              id="cnpj"
              label="Cnpj"
              required
              type="num"
              onChange={handleChange}
            />
            <Input
              id="senha"
              label="Senha"
              required
              type="password"
              onChange={handleChange}
            />

            <Button texto="Cadastrar"/>
            <p>
              Já possui uma conta?{" "}
              <a
                onClick={login}
                style={{ cursor: "pointer", color: "#b51f21" }}
              >
                Logar
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastroVendedor;
