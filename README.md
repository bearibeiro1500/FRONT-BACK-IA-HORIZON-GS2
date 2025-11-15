# AI Horizon: The Future of Human-Intelligent Collaboration (GS2)

Este é o repositório principal do projeto "AI Horizon", uma solução full-stack desenvolvida para a Global Solution 2 do curso de Engenharia Mecatrônica. O projeto demonstra a colaboração entre humanos e sistemas de IA no gerenciamento de tarefas mecatrônicas.

Ele é composto por dois subprojetos:
* **`/back`**: A API REST (Backend) desenvolvida com Java e Spring Boot.
* **`/front`**: O aplicativo móvel (Frontend) desenvolvido com React Native e Expo.

---

### Estrutura do Projeto (mais informações no README de cada parte
|
    |-- /back/
    |   |-- ... (código-fonte, pom.xml, etc.)
    |   `-- README.md (README específico do Backend)
    |
    |-- /front/
    |   |-- ... (código-fonte, package.json, etc.)
    |   `-- README.md (README específico do Frontend)
    |
    `-- README.md (Este arquivo principal)
### Tecnologias Utilizadas

| Área | Tecnologia |
| :--- | :--- |
| **Backend** | Java 17 |
| | Spring Boot 3.2.0 |
| | Spring Data JPA |
| | H2 Database (Em arquivo) |
| | Maven |
| **Frontend** | React Native 0.73.2 |
| | Expo ~50.0.0 |
| | React Navigation |

---

### Como Executar a Aplicação Completa

Para executar o projeto, você precisará de **dois terminais** abertos: um para o backend e outro para o frontend.

#### Passo 1: Executar o Backend (Servidor API)

1.  Abra seu terminal e navegue até a pasta do backend:
    ```bash
    cd back
    ```
2.  Execute o projeto usando o Maven Wrapper (recomendado):
    ```bash
    # No Windows
    ./mvnw.cmd spring-boot:run
    
    # No Mac/Linux
    ./mvnw spring-boot:run
    ```
3.  O servidor será iniciado e estará rodando na porta `8080`.
    * **API:** `http://localhost:8080`
    * **Console do Banco (H2):** `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:file:./data/aihorizon`, User: `sa`, Pass: [em branco])

#### Passo 2: Executar o Frontend (Aplicativo Móvel)

1.  Abra um **segundo terminal** e navegue até a pasta do frontend:
    ```bash
    cd front
    ```
2.  Instale as dependências (faça isso apenas na primeira vez):
    ```bash
    npm install
    ```
3.  **IMPORTANTE: Configurar a URL da API**
    * Abra o arquivo `front/src/services/api.js` no seu editor de código.
    * Ajuste a constante `API_BASE_URL` para apontar para o seu backend, dependendo de como você está testando:
        * **Para iOS Simulator:** `const API_BASE_URL = 'http://localhost:8080/api';`
        * **Para Android Emulator:** `const API_BASE_URL = 'http://10.0.2.2:8080/api';`
        * **Para Dispositivo Físico (Expo Go):** Use o IP da sua máquina na rede local (Ex: `http://192.168.1.100:8080/api`).

4.  Inicie o servidor do Expo:
    ```bash
    npm start
    ```
5.  Escaneie o QR code com o aplicativo **Expo Go** no seu celular, ou pressione `a` para Android Emulator / `i` para iOS Simulator.

---

### Para Mais Detalhes

Cada parte do projeto tem seu próprio `README.md` com instruções detalhadas sobre endpoints, estrutura de pastas, e solução de problemas.

* **Para detalhes do Backend:** [./back/README.md](./back/README.md)
* **Para detalhes do Frontend:** [./front/README.md](./front/README.md)
