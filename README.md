# Sistema de Gerenciamento de Pedidos

Este é um sistema simples de gerenciamento de pedidos construído com Node.js e Express.

## Funcionalidades

- Criar um novo pedido
- Obter todos os pedidos
- Obter um pedido específico por ID
- Atualizar um pedido por ID
- Atualizar o status de um pedido para "Pronto" por ID
- Deletar um pedido por ID

## Rotas

### GET /orders

Retorna todos os pedidos cadastrados.

### GET /orders/:id

Retorna um pedido específico com base no ID fornecido.

### POST /orders

Cria um novo pedido com as informações fornecidas no corpo da requisição.

### PUT /orders/:id

Atualiza um pedido existente com base no ID fornecido. Substitui todas as informações do pedido pelos dados fornecidos no corpo da requisição.

### PATCH /orders/:id

Atualiza o status de um pedido existente para "Pronto" com base no ID fornecido.

### DELETE /orders/:id

Exclui um pedido existente com base no ID fornecido.

### Exemplo

Se eu chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```


Se eu chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```

## Tecnologias Utilizadas

- Node.js
- Express
- uuid (para geração de IDs únicos)
- Insomnia
