import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/pages/detalhesProduto.css";
import Button from "../../components/button";
import Header from "../../layout/Header";
import { UserContext } from "../../UserContext";

const DetalhesProduto = () => {
  const [dados, setDados] = useState(null);
  const { produto_id } = useParams();
  const { user } = React.useContext(UserContext);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8888/api/produtos/${produto_id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.log(data.message);
        } else {
          console.log(data);
          setDados(data);
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }

    fetchProduto();
  }, [produto_id]);

  if (!dados) {
    return (
      <>
        <Header />
        <p style={{ padding: "2rem" }}>Produto não encontrado!</p>
      </>
    );
  }

  const partes = dados.imagem.replace(/\\/g, "/").split("/");
  const nomeArquivo = partes[partes.length - 1];

  return (
    <>
      <Header />
      <div className="product-container" style={{ marginTop: "24px" }}>
        <div className="product-content">
          <div className="product-image-area">
            <img
              src={`http://127.0.0.1:8888/api/produtos/uploads/${nomeArquivo}`}
              alt={dados.nome}
              className="product-image"
            />
          </div>
          <div className="product-info-area">
            <h2 className="product-title">{dados.nome}</h2>
            <p className="product-description">
              Qtd disponíveis: {dados.quantidade}
            </p>
            <p className="product-description">Status: {dados.status}</p>
            <p className="product-price">
              R$ {dados.preco ? dados.preco.toFixed(2) : "0.00"}
            </p>
            <Link to={`/produto/editar/${dados.id}`}>
              <Button texto="Editar" />
            </Link>

            <Link to="/" className="back-link">
              ← Voltar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesProduto;
