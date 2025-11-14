# AI Horizon - Backend

Backend API REST desenvolvido com Spring Boot para o projeto AI Horizon: The Future of Human-Intelligent Collaboration.

## 📋 Descrição

Este backend fornece uma API REST completa para gerenciamento de tarefas mecatrônicas, permitindo a colaboração entre humanos e sistemas de IA. O sistema simula a geração automática de sugestões de IA para cada tarefa, promovendo a automação e o controle em sistemas mecatrônicos.

## 🛠️ Tecnologias

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **H2 Database** (banco em arquivo)
- **Maven**

## 📦 Pré-requisitos

- Java JDK 17 ou superior
- Maven 3.6+ (ou use o Maven Wrapper incluído)

## 🚀 Como Executar

### 1. Clone o repositório e navegue até a pasta do backend

```bash
cd backend
```

### 2. Execute o projeto

**Opção 1: Usando Maven Wrapper (recomendado)**
```bash
./mvnw spring-boot:run
```

**Opção 2: Usando Maven instalado**
```bash
mvn spring-boot:run
```

**Opção 3: Compilar e executar o JAR**
```bash
mvn clean package
java -jar target/backend-1.0.0.jar
```

### 3. Acesse a aplicação

- **API Base URL**: `http://localhost:8080`
- **H2 Console** (para visualizar o banco): `http://localhost:8080/h2-console`
  - JDBC URL: `jdbc:h2:file:./data/aihorizon`
  - Username: `sa`
  - Password: (deixe em branco)

## 📡 Endpoints da API

### Base URL: `http://localhost:8080/api/tarefas`

#### 1. Listar todas as tarefas
```
GET /api/tarefas
```

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Calibração de Sensores Mecatrônicos",
    "descricao": "Realizar calibração dos sensores...",
    "sugestaoIa": "Sugestão IA para: ...",
    "status": "PENDENTE"
  }
]
```

#### 2. Buscar tarefa por ID
```
GET /api/tarefas/{id}
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Calibração de Sensores Mecatrônicos",
  "descricao": "Realizar calibração dos sensores...",
  "sugestaoIa": "Sugestão IA para: ...",
  "status": "PENDENTE"
}
```

#### 3. Criar nova tarefa
```
POST /api/tarefas
Content-Type: application/json
```

**Body:**
```json
{
  "titulo": "Nova Tarefa",
  "descricao": "Descrição da tarefa",
  "status": "PENDENTE"
}
```

**Nota:** A `sugestaoIa` é gerada automaticamente pelo backend se não for fornecida.

#### 4. Atualizar tarefa
```
PUT /api/tarefas/{id}
Content-Type: application/json
```

**Body:**
```json
{
  "titulo": "Título Atualizado",
  "descricao": "Descrição atualizada",
  "sugestaoIa": "Nova sugestão",
  "status": "PENDENTE"
}
```

#### 5. Aceitar sugestão da tarefa
```
PUT /api/tarefas/{id}/aceitar
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Calibração de Sensores Mecatrônicos",
  "descricao": "...",
  "sugestaoIa": "...",
  "status": "ACEITO"
}
```

#### 6. Rejeitar sugestão da tarefa
```
PUT /api/tarefas/{id}/rejeitar
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Calibração de Sensores Mecatrônicos",
  "descricao": "...",
  "sugestaoIa": "...",
  "status": "REJEITADO"
}
```

#### 7. Deletar tarefa
```
DELETE /api/tarefas/{id}
```

## 📊 Modelo de Dados

### Tarefa

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | Long | ID único da tarefa (gerado automaticamente) |
| `titulo` | String | Título da tarefa (obrigatório) |
| `descricao` | String | Descrição detalhada da tarefa |
| `sugestaoIa` | String | Sugestão gerada automaticamente pela IA |
| `status` | Enum | Status da tarefa: `PENDENTE`, `ACEITO`, `REJEITADO` |

## 🔧 Configuração

As configurações podem ser alteradas no arquivo `src/main/resources/application.properties`:

- **Porta do servidor**: `server.port=8080`
- **Banco de dados H2**: O arquivo do banco é criado em `./data/aihorizon.mv.db`
- **CORS**: Configurado para permitir requisições do frontend (Expo)

## 📝 Dados Iniciais

O sistema inicializa automaticamente com 3 tarefas de exemplo ao iniciar pela primeira vez.

## 🔍 Como o App Deve Consumir a API

### Exemplo com Fetch (JavaScript/React Native)

```javascript
// Listar todas as tarefas
const response = await fetch('http://localhost:8080/api/tarefas');
const tarefas = await response.json();

// Buscar tarefa por ID
const tarefa = await fetch('http://localhost:8080/api/tarefas/1')
  .then(res => res.json());

// Aceitar sugestão
await fetch('http://localhost:8080/api/tarefas/1/aceitar', {
  method: 'PUT'
});

// Rejeitar sugestão
await fetch('http://localhost:8080/api/tarefas/1/rejeitar', {
  method: 'PUT'
});
```

**Nota importante para desenvolvimento mobile:**
- Se estiver testando em um dispositivo físico ou emulador Android, use `http://10.0.2.2:8080` (Android Emulator) ou o IP da sua máquina
- Se estiver testando em iOS Simulator, use `http://localhost:8080`
- Para dispositivos físicos, use o IP da sua máquina na rede local (ex: `http://192.168.1.100:8080`)

## 🧪 Testando a API

Você pode testar os endpoints usando:

- **Postman**
- **cURL**
- **Insomnia**
- **H2 Console** (para visualizar os dados)

### Exemplo com cURL

```bash
# Listar tarefas
curl http://localhost:8080/api/tarefas

# Aceitar tarefa
curl -X PUT http://localhost:8080/api/tarefas/1/aceitar

# Rejeitar tarefa
curl -X PUT http://localhost:8080/api/tarefas/1/rejeitar
```

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/aihorizon/
│   │   │   ├── BackendApplication.java
│   │   │   ├── controller/
│   │   │   │   └── TarefaController.java
│   │   │   ├── model/
│   │   │   │   └── Tarefa.java
│   │   │   ├── repository/
│   │   │   │   └── TarefaRepository.java
│   │   │   ├── service/
│   │   │   │   └── TarefaService.java
│   │   │   └── config/
│   │   │       ├── CorsConfig.java
│   │   │       └── DataInitializer.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
└── README.md
```

## 🐛 Troubleshooting

- **Erro de porta em uso**: Altere a porta no `application.properties`
- **Erro de CORS**: Verifique se o `CorsConfig.java` está configurado corretamente
- **Banco de dados não encontrado**: O H2 criará o arquivo automaticamente na primeira execução

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.





