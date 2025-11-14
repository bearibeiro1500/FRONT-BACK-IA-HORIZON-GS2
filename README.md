# AI Horizon - Frontend

Aplicativo móvel desenvolvido com React Native e Expo para o projeto AI Horizon: The Future of Human-Intelligent Collaboration.

## 📋 Descrição

O aplicativo "AI Horizon" permite visualizar e gerenciar tarefas mecatrônicas, exibindo sugestões geradas por IA e permitindo que o usuário aceite ou rejeite essas sugestões, promovendo a colaboração entre humanos e sistemas inteligentes.

## 🛠️ Tecnologias

- **React Native** 0.73.2
- **Expo** ~50.0.0
- **React Navigation** (Native Stack)
- **React** 18.2.0

## 📦 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Expo CLI (instalado globalmente ou via npx)
- Backend rodando (ver README do backend)

## 🚀 Como Configurar e Executar

### 1. Instalar dependências

Navegue até a pasta do frontend e instale as dependências:

```bash
cd frontend
npm install
```

ou

```bash
yarn install
```

### 2. Configurar URL da API

Abra o arquivo `src/services/api.js` e ajuste a constante `API_BASE_URL` conforme seu ambiente:

```javascript
// Para iOS Simulator
const API_BASE_URL = 'http://localhost:8080/api';

// Para Android Emulator
const API_BASE_URL = 'http://10.0.2.2:8080/api';

// Para dispositivo físico (use o IP da sua máquina na rede local)
const API_BASE_URL = 'http://192.168.1.100:8080/api';
```

**Importante:**
- **iOS Simulator**: Use `http://localhost:8080`
- **Android Emulator**: Use `http://10.0.2.2:8080`
- **Dispositivo Físico**: Use o IP da sua máquina na rede local (ex: `http://192.168.1.100:8080`)

Para descobrir seu IP local:
- **Windows**: Execute `ipconfig` no PowerShell e procure por "IPv4"
- **Mac/Linux**: Execute `ifconfig` ou `ip addr`

### 3. Iniciar o aplicativo

```bash
npm start
```

ou

```bash
yarn start
```

Isso abrirá o Expo DevTools no navegador. Você pode:

- Pressionar `a` para abrir no Android Emulator
- Pressionar `i` para abrir no iOS Simulator
- Escanear o QR code com o app Expo Go no seu dispositivo físico

### 4. Executar em plataforma específica

```bash
# Android
npm run android

# iOS (apenas no Mac)
npm run ios

# Web
npm run web
```

## 📱 Funcionalidades

### Tela de Lista de Tarefas

- Exibe todas as tarefas disponíveis
- Mostra o status de cada tarefa (Pendente, Aceito, Rejeitado)
- Permite tocar em uma tarefa para ver os detalhes
- Pull-to-refresh para atualizar a lista
- Indicadores visuais de status com cores diferentes

### Tela de Detalhes da Tarefa

- Exibe informações completas da tarefa:
  - Título
  - Descrição
  - Sugestão gerada pela IA
  - Status atual
- Botões para aceitar ou rejeitar a sugestão (apenas se status for "Pendente")
- Atualização automática após aceitar/rejeitar
- Confirmação antes de executar ações

## 🎨 Interface

O aplicativo possui uma interface moderna e intuitiva com:

- Design Material Design inspirado
- Cores diferenciadas por status:
  - 🟠 **Pendente**: Laranja (#FF9800)
  - 🟢 **Aceito**: Verde (#4CAF50)
  - 🔴 **Rejeitado**: Vermelho (#F44336)
- Navegação fluida entre telas
- Feedback visual para ações do usuário
- Indicadores de carregamento

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── screens/
│   │   ├── TarefasListScreen.js    # Tela de lista de tarefas
│   │   └── TarefaDetailScreen.js   # Tela de detalhes
│   └── services/
│       └── api.js                  # Serviço de comunicação com API
├── App.js                          # Componente principal e navegação
├── app.json                        # Configuração do Expo
├── babel.config.js                 # Configuração do Babel
├── package.json                    # Dependências do projeto
└── README.md                       # Este arquivo
```

## 🔌 Integração com a API

O aplicativo consome os seguintes endpoints do backend:

- `GET /api/tarefas` - Listar todas as tarefas
- `GET /api/tarefas/{id}` - Buscar tarefa por ID
- `PUT /api/tarefas/{id}/aceitar` - Aceitar sugestão
- `PUT /api/tarefas/{id}/rejeitar` - Rejeitar sugestão

Todas as chamadas de API estão centralizadas no arquivo `src/services/api.js`.

## 🐛 Troubleshooting

### Erro de conexão com a API

1. Verifique se o backend está rodando na porta 8080
2. Confirme que a URL da API está correta no arquivo `src/services/api.js`
3. Para dispositivos físicos, certifique-se de que o dispositivo e o computador estão na mesma rede Wi-Fi
4. Verifique se o firewall não está bloqueando a conexão

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules
npm cache clean --force
npm install
```

### Erro no Expo

```bash
# Limpe o cache do Expo
expo start -c
```

### Problemas com Android Emulator

- Certifique-se de que o Android Emulator está rodando antes de executar `npm run android`
- Use `http://10.0.2.2:8080` como URL da API

### Problemas com iOS Simulator

- Certifique-se de ter o Xcode instalado (apenas no Mac)
- Use `http://localhost:8080` como URL da API

## 📝 Notas de Desenvolvimento

- O aplicativo foi desenvolvido para funcionar com o backend Spring Boot
- A comunicação é feita via HTTP REST
- O estado das tarefas é atualizado em tempo real após ações do usuário
- O aplicativo trata erros de conexão e exibe mensagens apropriadas

## 🔄 Fluxo de Uso

1. Usuário abre o aplicativo
2. Visualiza a lista de tarefas (carregadas do backend)
3. Seleciona uma tarefa para ver detalhes
4. Na tela de detalhes, visualiza a sugestão da IA
5. Decide aceitar ou rejeitar a sugestão
6. O status é atualizado no backend e refletido no app

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.





