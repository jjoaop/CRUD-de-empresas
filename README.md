# Gerenciamento de Empresas

Este projeto é um sistema de gerenciamento de empresas que permite criar, listar, editar e excluir empresas. Ele foi desenvolvido com foco em boas práticas de desenvolvimento, utilizando as tecnologias modernas do **React.js** e **Node.js**.

---

## Arquitetura do Projeto

A arquitetura do projeto é dividida em duas partes principais:

### 1. Front-end
- **Tecnologias**: React.js, Material-UI, React Toastify.
- **Responsabilidade**: Gerenciamento da interface do usuário (UI).
- **Estrutura de Arquivos**:
  ```
  frontend/
  ├── public/                    # Arquivos estáticos
  │   ├── index.html             # HTML principal
  │   └── favicon.ico            # Ícone da aplicação
  ├── src/                       # Código fonte do front-end
  │   ├── components/            # Componentes reutilizáveis
  │   │   ├── EmpresaForm.jsx    # Formulário para criar/editar empresas
  │   │   └── EmpresaList.jsx    # Lista e busca de empresas
  │   ├── App.jsx                # Componente principal
  │   ├── App.css                # Estilização base
  │   └── index.jsx              # Ponto de entrada do React
  └── package.json               # Configurações e dependências do projeto
  ```

### 2. Back-end
- **Tecnologias**: Node.js, Express.js, SQLite.
- **Responsabilidade**: API RESTful para gerenciar empresas.
- **Estrutura de Arquivos**:
  ```
  backend/
  ├── server.js                  # Ponto de entrada do servidor
  ├── routes/                    # Rotas para a API
  │   └── empresas.js            # Rotas relacionadas às empresas
  ├── controllers/               # Controladores das rotas
  │   └── empresasController.js  # Lógica para gerenciar empresas
  ├── models/                    # Modelos para o banco de dados
  │   └── Empresa.js             # Modelo para a tabela de empresas
  ├── db/                        # Configuração do banco de dados
  │   └── database.js            # Conexão com o SQLite
  └── package.json               # Configurações e dependências do servidor
  ```

---

## Funcionalidades

### 1. Front-end
- **Criar Empresa**: Preencha os campos para criar uma nova empresa.
- **Buscar Empresas**: Utilize o campo de busca para localizar empresas pelo nome.
- **Excluir Empresa**: Remova empresas diretamente da lista.
- **Paginação**: Divida a lista de empresas em páginas para uma navegação mais fácil.

### 2. Back-end
- **Endpoints**:
  - `GET /empresas`: Retorna todas as empresas.
  - `POST /empresas`: Cria uma nova empresa.
  - `PUT /empresas/:id`: Atualiza uma empresa existente.
  - `DELETE /empresas/:id`: Exclui uma empresa.

---

## Comandos para Rodar o Projeto

### Pré-requisitos
- Node.js instalado ([download](https://nodejs.org/)).
- Gerenciador de pacotes (npm ou yarn).

### 1. Clonar o Repositório
```bash
git clone https://github.com/jjoaop/CRUD-de-empresas.git
cd CRUD-de-empresas
```

### 2. Configuração do Back-end
```bash
cd backend
npm install                # Instalação das dependências
npm run dev                # Inicia o servidor na porta 5000
```

### 3. Configuração do Front-end
```bash
cd frontend
npm install                # Instalação das dependências
npm start                  # Inicia o servidor de desenvolvimento na porta 3000
```

### 4. Acessar o Projeto
- **Front-end**: [http://localhost:3000](http://localhost:3000)
- **Back-end**: [http://localhost:5000/api](http://localhost:5000/api)

---

## Tecnologias Utilizadas

### Front-end
- **React.js**: Biblioteca para construção de interfaces.
- **Material-UI**: Framework para design moderno e responsivo.
- **React Toastify**: Biblioteca para notificações.

### Back-end
- **Node.js**: Ambiente de execução para o JavaScript.
- **Express.js**: Framework para criação de APIs RESTful.
- **SQLite**: Banco de dados leve e embutido.

---


