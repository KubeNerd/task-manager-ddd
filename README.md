# 📚 Task Manager API - DDD Style

Bem-vindo ao projeto **Task Manager** usando **Node.js + TypeScript** seguindo os princípios de **Domain-Driven Design (DDD)**! 🧠⚡

---

## 🗺️ Visão Geral

Esta API permite:

- ✅ Criar tarefas
- ✅ Listar tarefas
- ✅ Atualizar tarefas (título e status)

O código foi organizado com foco em separação de responsabilidades, segundo os conceitos de DDD.

---

## 🏯 Arquitetura DDD

| Camada | Descrição |
|:--|:--|
| **Domain** | Onde vivem as regras de negócio. Não sabe de HTTP, banco ou nada externo. |
| **Application** | Onde ficam os casos de uso (ex: criar, listar, atualizar tarefas). Coordena as ações. |
| **Infrastructure** | Implementações técnicas (armazenamento em memória, banco de dados no futuro). |
| **API** | Interface HTTP para o mundo exterior (recebe requisições, chama os casos de uso). |

---

## 📦 Estrutura do Projeto

```
src/
├── api/
│   └── TaskController.ts       # Controlador HTTP (Fastify)
├── application/
│   └── use-cases/
│       ├── CreateTask.ts       # Caso de uso: Criar tarefa
│       ├── ListTasks.ts        # Caso de uso: Listar tarefas
│       └── UpdateTask.ts       # Caso de uso: Atualizar tarefa
├── domain/
│   ├── entities/
│   │   └── Task.ts             # Entidade de domínio: Tarefa
│   └── repositories/
│       └── TaskRepository.ts   # Contrato de repositório de tarefas
├── infrastructure/
│   └── repositories/
│       └── InMemoryTaskRepository.ts # Implementação em memória
└── server.ts                   # Configuração do servidor Fastify
```

---

## 🧠 Analogias de Anime (Otaku Mode)

- **Domain Layer** → As leis do universo (chakra, magia, alquimia).
- **Entities** → Personagens principais (Naruto, Luffy, Goku).
- **Application Layer** → As missões (quem orquestra as batalhas e ações).
- **Infrastructure Layer** → O mundo físico (aldeias, esconderijos, bancos de dados).
- **API Layer** → O portal que permite acessar esse mundo (jutsus, invocações).

Cada camada respeita seu território, como em qualquer anime de respeito! 🎴🔥

---

## 🚀 Como Rodar o Projeto

1. Instalar dependências:

```bash
npm install
```

2. Rodar em modo de desenvolvimento:

```bash
npm run dev
```

3. Endpoints disponíveis:

| Método | Rota | Descrição |
|:--|:--|:--|
| POST | `/tasks` | Criar uma nova tarefa |
| GET | `/tasks` | Listar todas as tarefas |
| PUT | `/tasks/:id` | Atualizar título e status de uma tarefa |

---

## 📬 Exemplo de uso com curl

### Criar uma tarefa

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Estudar DDD"}'
```

### Listar tarefas

```bash
curl http://localhost:3000/tasks
```

### Atualizar uma tarefa

```bash
curl -X PUT http://localhost:3000/tasks/ID_DA_TASK \
-H "Content-Type: application/json" \
-d '{"title": "Nova tarefa atualizada", "completed": true}'
```

(Substituir `ID_DA_TASK` pelo ID real da task)

---

## 🎯 O que você aprende com esse projeto

- Organização de código real com DDD.
- Separação limpa entre regras de negócio, casos de uso, implementação e interface.
- Desenvolvimento profissional em Node.js + TypeScript.
- Pensar em APIs e arquitetura de sistemas de forma estratégica.

---

# ✨ Bora dominar esse mundo como verdadeiros Hokages do código! ✨

---

# 📌 Observação

> Este projeto foi desenvolvido como estudo prático de DDD e boas práticas de arquitetura de software.  
> Fique à vontade para usar como base para projetos reais ou pessoais!
