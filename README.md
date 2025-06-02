# Market Management Front

Interface web para gerenciamento de mercados, desenvolvida como parte de um projeto acadêmico. Esta aplicação permite o controle de produtos, categorias e vendas, oferecendo uma experiência moderna e responsiva.

⚠️ **Atenção:** Este projeto consome dados de uma **API backend**. Para o funcionamento completo da aplicação, é necessário que o backend esteja em execução. O backend está disponível neste repositório:  
👉 [Henrique762/ms-market-management](https://github.com/Henrique762/ms-market-management)

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos modernos.
- **ESLint**: Ferramenta de análise de código para manter a qualidade e consistência.
- **JavaScript (ES6+)**: Linguagem de programação utilizada no desenvolvimento.
  
---

## 📁 Estrutura do Projeto

```
market-management-front/
├── public/
│   └── index.html
├── src/
│   └── [componentes e páginas da aplicação]
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/glsanto-s/market-management-front.git
   cd market-management-front
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o ambiente:**

   Crie um arquivo `.env` na raiz do projeto com a URL da API backend, por exemplo:

   ```
   VITE_API_URL=http://localhost:3000/
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**

   Abra o navegador e vá para `http://localhost:5173`.

## 📌 Funcionalidades

- Cadastro, edição e exclusão de produtos.
- Gerenciamento de categorias.
- Visualização de vendas e relatórios.
- Interface responsiva e amigável.
- Comunicação com a API backend para persistência de dados.

---

## 🔗 Repositório do Backend

- [Backend - Market Management API](https://github.com/Henrique762/ms-market-management)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

