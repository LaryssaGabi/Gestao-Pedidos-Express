// Importando o módulo express para criar o servidor
const express = require('express');
// Criando uma instância do servidor
const server = express();
// Definindo a porta em que o servidor será executado
const port = 3000;
// Importando o módulo uuid para gerar IDs únicos
const uuid = require('uuid');
// Habilitando o middleware para interpretar o corpo das requisições como JSON
server.use(express.json());




// Array para armazenar as ordens
const orders = [];



// Rota para obter todas as ordens
server.get('/orders', (request, response) => {
    return response.json(orders);
});



// Rota para obter uma ordem específica por ID
server.get('/orders/:id', (request, response) => {
    const { id } = request.params;
    // Procura no array  de orders um objeto com o mesmo ID
    const order = orders.find(order => order.id === id);
    if (!order) {
        return response.status(404).json({ error: 'Order not found' });
    }
    return response.json(order);
});




// Rota para criar uma nova ordem
server.post('/orders', (request, response) => {
    const { pedido, nomeCliente, preco, status } = request.body;
    const order = { id: uuid.v4(), pedido, nomeCliente, preco, status };
    orders.push(order);
    return response.status(201).send(order);
});




// Rota para atualizar uma ordem por ID
server.put("/orders/:id", (request, response) => {
    const { id } = request.params;
    const { pedido, nomeCliente, preco, status } = request.body;
    const updatePedido = { id, pedido, nomeCliente, preco, status };
    const foundOrderIndex = orders.findIndex((order) => order.id === id);
    if (foundOrderIndex < 0) {
        return response.status(404).json({ error: 'Order not found' });
    }
    orders[foundOrderIndex] = updatePedido;
    return response.status(200).json(updatePedido);
});




// Rota para atualizar o status de uma ordem para "Pronto" por ID (utilizando PATCH)
server.patch("/orders/:id", (request, response) => {
    const { id } = request.params;
    const foundOrderIndex = orders.findIndex((order) => order.id === id);
    if (foundOrderIndex < 0) {
        return response.status(404).json({ error: 'Order not found' });
    }
    orders[foundOrderIndex].status = "Pronto";
    return response.status(200).json(orders[foundOrderIndex]);
});




// Rota para deletar uma ordem por ID
server.delete("/orders/:id", (request, response) => {
    const { id } = request.params;
    const foundOrderIndex = orders.findIndex((order) => order.id === id);
    if (foundOrderIndex  < 0) {
        return response.status(404).json({ error: 'Order not found' });
    }
    //  Remove  a ordem da lista de ordens
    orders.splice(foundOrderIndex, 1); 
    return response.status(200).json({ message: "Deleted successfully" });
});




// Iniciando o servidor e ouvindo a porta especificada
server.listen(port, () => console.log(`Server is running on port ${port}!`));
