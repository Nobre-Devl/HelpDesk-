# 🛠️ Sistema de Help Desk

Um sistema completo de gerenciamento de chamados (tickets) construído do zero com foco em arquitetura limpa, tipagem rigorosa e boas práticas.

## Tecnologias Utilizadas

- **Backend:** Node.js com Express
- **Linguagem:** TypeScript (Strict Mode)
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma

## Como executar o projeto

Pré-requisitos: Node.js e PNPM instalados na máquina.

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/Nobre-Devl/HelpDesk-.git
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione a URL do seu banco de dados PostgreSQL:
   \`\`\`env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/helpdesk?schema=public"
   \`\`\`

4. Rode as migrações do banco de dados:
   \`\`\`bash
   pnpm prisma migrate dev
   \`\`\`

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).
