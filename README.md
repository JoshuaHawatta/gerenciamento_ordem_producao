# Sistema de Gerenciamento de Ordens de Produção

O sistema foi desenvolvido como parte de um Desafio Técnico para gerenciar ordens de produção para uma fábrica.

Descrição
Com este sistema, os usuários podem:

- Registrar uma nova ordem de produção.
- Listar todas as ordens de produção existentes.
- Verificar se um produto pode ser produzido com base nos materiais disponíveis.
- Atualizar o status de uma ordem de produção.
- Visualizar relatórios de produção.

### Pré-requisitos

- Node.js
- npm/yarn
- Instalação

### Clone este repositório:

`git clone https://github.com/Joshuahawatta/teste_pratico_dev_junior.git`

Entre na pasta do projeto enstale as dependências:

`npm install`

### Execução

Você pode executar o projeto de duas maneiras:

#### Desenvolvimento:

`npm run dev`

#### Produção:

Primeiro, compile o projeto:

`npm run build`

e rode:

`npm start`

### Uso

Após a inicialização, siga as instruções no terminal para gerenciar as ordens de produção.

### Exemplos de Entrada e Saída

#### 1. Registrar uma nova ordem de produção

Selecione uma opção: 1

- Entrada:

  - Informe o produto: Cadeira
  - Informe a quantidade: 5
  - Informe a data de entrega (YYYY-MM-DD): 2023-10-20

- Saída:
  - Ordem de produção registrada.

#### 2. Listar todas as ordens

Selecione uma opção: 2

- Saída:
  - Ordens de Produção:
  - ID: 1, Produto: Cadeira, Quantidade: 5, Data de - Entrega: 2023-10-20, Status: in_progress

#### 3. Atualizar status de uma ordem

Selecione uma opção: 3

- Entrada:

  - Informe o ID da ordem de produção: ex: 1
  - Informe o novo status ("in_progress" ou "completed")

- Saída:
  - Status atualizado.

#### 4. Visualizar relatórios de produção

Selecione uma opção: 4

- Saída:
  - Ordens em Andamento: (Lista de ordens em andamento)
  - Ordens Concluídas: (Lista de ordens em andamento)

### Contribuições

Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um PR ou uma issue.

### Autor

Joshua Hawatta

### Licença

Este projeto está licenciado sob a licença MIT.
