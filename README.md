# API - Hair Salon Scheduling System 💈

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

A RESTful API for a hair salon scheduling system. Built with Node.js, Express, and Prisma, it allows users to manage a catalog of services and book appointments.

## ✨ Features

-   **User Authentication & Management:** Full CRUD for user accounts with a secure JWT-based login system.
-   **Service Catalog Management:** Allows administrators to create, update, and list all available services/haircuts offered by the salon.
-   **Appointment Scheduling:** Authenticated users can book an appointment for a specific service.
-   **Secure & Protected Routes:** Core actions like scheduling are protected and require a valid JWT token.
-   **Secure Password Storage:** User passwords are encrypted using `bcryptjs`.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Authentication:** [JSON Web Token (JWT)](https://jwt.io/) & [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## 🚀 Getting Started

To run this project locally, you'll need Node.js, npm, and a running PostgreSQL instance.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/hairday-project.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd hairday-project
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string and JWT secret.
    ```.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    JWT_SECRET="your-super-secret-key"
    ```
    *Replace the values with your PostgreSQL credentials and a secret key of your choice.*

5.  **Run database migrations:**
    This will create the necessary tables in your database.
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3333`.

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > Uma API RESTful para um sistema de agendamento de salão de beleza. Construída com Node.js, Express e Prisma, permite que usuários gerenciem um catálogo de serviços e agendem horários.

  ### ✨ Funcionalidades

  -   **Autenticação e Gerenciamento de Usuários:** CRUD completo para contas de usuário com um sistema de login seguro baseado em JWT.
  -   **Gerenciamento do Catálogo de Serviços:** Permite que administradores criem, atualizem e listem todos os serviços/cortes disponíveis oferecidos pelo salão.
  -   **Agendamento de Horários:** Usuários autenticados podem marcar um horário para um serviço específico.
  -   **Rotas Seguras e Protegidas:** Ações principais, como agendamento, são protegidas e exigem um token JWT válido.
  -   **Armazenamento Seguro de Senhas:** As senhas dos usuários são criptografadas com `bcryptjs`.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js, npm e uma instância do PostgreSQL ativa.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` na raiz e adicione sua string de conexão do banco e um segredo para o JWT.
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3333`.

</details>
