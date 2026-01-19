# 📘 API BLOG – Tech Challenge FIAP (Fase 2)

## 📌 Visão Geral
Esta aplicação é uma **API REST para gerenciamento de posts de um blog**, desenvolvida como parte do **Tech Challenge – Fase 2 da FIAP**.

O projeto foi construído utilizando **Node.js, Express e MongoDB**, com suporte a **Docker**, **testes automatizados** e **pipeline de CI com GitHub Actions**, seguindo boas práticas de desenvolvimento backend.

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose
- Jest
- Supertest
- MongoDB Memory Server
- GitHub Actions
- Postman

---

## 📂 Estrutura do Projeto
```bash
blog-api/
│
├── __tests__/
│   └── posts.test.js        # Testes automatizados da API
│
├── node_modules/            # Dependências do projeto
│
├── server.js                # Arquivo principal da aplicação
├── package.json             # Configurações e dependências
├── package-lock.json        # Controle de versões das dependências
├── docker-compose.yml       # Orquestração Docker
├── Dockerfile               # Imagem Docker da aplicação
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Documentação do projeto

### 📁 Descrição dos Arquivos e Pastas

- **node_modules/**  
  Pasta gerada automaticamente pelo Node.js, contendo todas as dependências instaladas do projeto, como Express e Mongoose.  
  Não deve ser editada manualmente.

- **server.js**  
  Arquivo principal da aplicação.  
  É responsável por:
  - Inicializar o servidor Express
  - Configurar o middleware para leitura de JSON
  - Estabelecer a conexão com o banco de dados MongoDB
  - Definir o modelo de dados (Post)
  - Implementar todas as rotas da API (CRUD)
  - Iniciar o servidor na porta configurada

- **package.json**  
  Arquivo de configuração do projeto Node.js.  
  Contém informações como:
  - Nome e versão do projeto
  - Dependências utilizadas
  - Scripts de execução

- **package-lock.json**  
  Arquivo gerado automaticamente pelo npm que garante a instalação exata das versões das dependências utilizadas no projeto.

- **README.md**  
  Documento de documentação do projeto.  
  Descreve:
  - Objetivo da aplicação
  - Tecnologias utilizadas
  - Estrutura do projeto
  - Instruções para execução
  - Endpoints disponíveis da API

---

## ⚙️ Configuração do Ambiente

### 📌 Pré-requisitos
- Node.js instalado
- MongoDB instalado e em execução
- Postman para testes da API

### ▶️ Executando projeto localmente
- mongodb://127.0.0.1:27017/blogdb
- node server.js
- MongoDB conectado 🟢
Servidor rodando na porta 3000 🚀

### 🐳 Executando Docker
- docker compose up --build (Após isso a API fica disponível no http://localhost:3000)

### 🔁 Executando Github Actions
- O projeto utiliza GitHub Actions para executar automaticamente os testes a cada push ou pull request.

## 📄 Estrutura do Banco de dados para "NPM TEST"
{
  "titulo": "String",
  "conteudo": "String",
  "autor": "String",
  "curso": "String",
  "criadoEm": "Date"
}

## 🔗 Endpoints utilizados
{
  GET /
Rota de teste para verificar se a API está em execução.

POST /posts
Criação de um novo post.

GET /posts
Listagem de todos os posts cadastrados.

GET /posts/:id
Busca de um post específico pelo ID.

PUT /posts/:id
Atualização de um post existente.

DELETE /posts/:id
Exclusão de um post.
}