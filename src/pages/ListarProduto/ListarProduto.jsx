import React from 'react';
import Header from '../../layout/Header';
import styles from '../../css/pages/ListarProduto.module.css';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

const ListarProduto = () => {
  const { user } = React.useContext(UserContext);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    setDados(null);
    const produtosFetch = async () => {
      try {
        const response = await fetch('http://192.168.0.100:8888/api/produtos', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          console.log('deu certo', data);
          setDados(data);
        } else {
          console.log('deu errado', data);
          setDados(null);
        }
      } catch (e) {
        console.log('error', e);
        setDados(null);
      }
    };
    produtosFetch();
  }, [user.token]);

  return (
    <>
      <Header />
      <section className={styles.listarProduto}>
        <h1 className={styles.titulo}>Meus Produtos</h1>
        <div className={styles.content}>
          {dados ? (
            dados.map((item) => {
              let nomeArquivo = '';

              if (item.imagem) {
                const partes = item.imagem.replace(/\\/g, '/').split('/');
                nomeArquivo = partes[partes.length - 1];
              }

              return (
                <div
                  key={`${item.id}${item.id_vendedor}`}
                  className={styles.produtos}
                >
                  <p>
                    Nome: <span>{item.nome}</span>
                  </p>
                  {nomeArquivo ? (
                    <img
                      src={`http://127.0.0.1:8888/api/produtos/uploads/${nomeArquivo}`}
                      alt={item.nome}
                    />
                  ) : null}

                  <Link to={`/produto/${item.id}`}>Ver detalhes</Link>
                  <button className={styles.venda}>Realizar venda</button>
                </div>
              );
            })
          ) : (
            <p className={styles.error}>Nenhum Produto Cadastrado</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ListarProduto;
