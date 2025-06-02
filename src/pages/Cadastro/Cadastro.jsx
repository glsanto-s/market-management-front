import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from '../../css/pages/CadastroVendedor.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Imagem from '../../assets/cadastro.png';
import validateVendedor from './validateForm.js';

const CadastroVendedor = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    celular: '',
    senha: '',
    cnpj: '',
  });
  const [errors, setErrors] = React.useState({});
  const [sucess, setSucess] = React.useState('');

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const login = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateVendedor(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch("http://127.0.0.1:8888/api/sellers", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      
      console.log(data)

      if (data.status_code != 200) {
        window.alert(`Erro: ${data.message}`);
        console.error("Erro na resposta:", data.message);
        return;
      }

      console.log('Cliente cadastrado com sucesso:', data);

      setErrors({});
      setSucess('Cliente cadastrado com sucesso!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <>
      <div className={styles.containerCadastro}>
        <div
          className={styles.side_1}
          style={{
            backgroundImage: `url(${Imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className={styles.side_2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              id="nome"
              label="Nome"
              required
              type="text"
              onChange={handleChange}
            />
            {errors.nome && <p className={styles.error}>{errors.nome}</p>}
            <Input
              id="email"
              label="Email"
              required
              type="email"
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <Input
              id="celular"
              label="Celular"
              required
              type="tel"
              onChange={handleChange}
            />
            {errors.celular && <p className={styles.error}>{errors.celular}</p>}
            <Input
              id="cnpj"
              label="Cnpj"
              required
              type="num"
              onChange={handleChange}
            />
            {errors.cnpj && <p className={styles.error}>{errors.cnpj}</p>}
            <Input
              id="senha"
              label="Senha"
              required
              type="password"
              onChange={handleChange}
            />
            {errors.senha && <p className={styles.error}>{errors.senha}</p>}

            <Button texto="Cadastrar" />
            <p>
              Já possui uma conta?{' '}
              <a
                onClick={login}
                style={{ cursor: 'pointer', color: '#b51f21' }}
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
