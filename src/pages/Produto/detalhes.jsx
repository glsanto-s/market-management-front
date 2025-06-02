import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/pages/detalhesProduto.css";
import Button from "../../components/button";
import Input from "../../components/input";
import Header from "../../layout/Header";

const DetalhesProduto = () => {
  const [dados, setDados] = useState(null);
  const { produto_id } = useParams();

  useEffect(() => {
    console.log(produto_id);
    
    fetch(`http://127.0.0.1:8888/api/produtos/${produto_id}`)
      .then(response => response.json())
      .then(data => {
        setDados(data);
        console.log("Dados recebidos:", data);
      })
      .catch(error => {
        console.error("Erro ao buscar API:", error);
      });
  }, [produto_id]);

  if (!dados) {
    return (
      <>
        <Header />
        <p style={{ padding: "2rem" }}>Carregando produto...</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="product-container" style={{ marginTop: '24px' }}>
        <div className="product-content">
          <div className="product-image-area">
            <img
              src={dados.imagem}
              alt={dados.nome}
              className="product-image"
            />
          </div>
          <div className="product-info-area">
            <h2 className="product-title">{dados.nome}</h2>
            <p className="product-description">
              Disponíveis: {dados.quantidade}
            </p>
            <Input id="qtd" label="Qtd" type="number" />
            <p className="product-price">
              R$ {dados.preco ? dados.preco.toFixed(2) : "0.00"}
            </p>
            <Button texto="Comprar" />
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
