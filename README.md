# 💬 TriboChat — Event-Driven com Socket.io

O **TriboChat** é uma **aplicação de chat em tempo real**, desenvolvida com **React** e **Socket.io**, criada durante o curso  
**“React: implementando arquitetura event-driven com Socket.io”**.

O projeto tem como foco a aplicação prática de **arquitetura Event-Driven no front-end**, explorando comunicação em tempo real, gerenciamento de eventos, estados sincronizados e conexões WebSocket.

---

## 🚀 Sobre o projeto

O **TriboChat** simula um ambiente real de conversas privadas entre usuários, permitindo troca de mensagens em tempo real, indicação de status online/offline e gerenciamento eficiente de eventos.

Durante o desenvolvimento, são explorados conceitos fundamentais de **event-driven architecture**, como **emitters**, **consumers** e **channels**, utilizando a biblioteca **socket.io** no front-end.

---

## 🧠 Principais recursos

- 💬 Chat em tempo real com **WebSockets**
- 🔐 Autenticação de usuários
- 🧑‍🤝‍🧑 Comunicação privada entre usuários usando **rooms**
- 🆔 Geração de IDs únicos para chats com **UUID**
- 🟢 Indicador de status online/offline
- 🔄 Atualização de mensagens em tempo real
- 🚫 Prevenção de duplicidade de mensagens
- ⚡ Gerenciamento eficiente de estado e efeitos colaterais

---

## 🧱 Arquitetura Event-Driven

O projeto aplica os princípios de **Event-Driven Architecture**, utilizando:

- **Emitter**: envio de eventos com `.emit`
- **Consumer**: escuta de eventos com `.on`
- **Channels (Rooms)**: comunicação restrita a grupos específicos
- **Desacoplamento** entre produtores e consumidores de eventos
- **Sincronização de estado em tempo real**

Esses conceitos permitem uma aplicação escalável, reativa e preparada para múltiplos usuários simultâneos.

---

## 🛠️ Tecnologias utilizadas

- **React**
- **Vite**
- **TypeScript**
- **React Router**
- **Sass**
- **React Icons**
- **socket.io-client**
- **UUID**
- **Arquitetura Event-Driven**
- **Git & GitHub**
- **pnpm**

---

## 🎯 Desafios abordados

- Configurar e utilizar Socket.io em aplicações React
- Trabalhar com eventos em tempo real
- Implementar comunicação privada com rooms
- Gerenciar conexões, desconexões e estados
- Criar aplicações reativas baseadas em arquitetura Event-Driven

---

## 📁 Acesso ao código-base

Você pode acessar ou baixar o repositório do projeto:

- [Código-fonte do projeto](https://github.com/GabrielVeroneze/tribo-chat-event-driven/tree/main)
- [Download em ZIP](https://github.com/GabrielVeroneze/tribo-chat-event-driven/archive/refs/heads/main.zip)

---

## ⚙️ Instalação e uso

Clone o repositório, instale as dependências e execute a aplicação:

```bash
# Clone o projeto
git clone https://github.com/GabrielVeroneze/tribo-chat-event-driven.git

# Acesse a pasta
cd tribo-chat-event-driven

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev

# A aplicação estará disponível em:
http://localhost:5173
```
