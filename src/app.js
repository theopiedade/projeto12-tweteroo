import express from 'express'; // Importa o express da biblioteca

const app = express(); // Cria uma instância do servidor

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.get("/", (req, res) => {
    // Manda como resposta o texto 'Hello World'
    res.send('Hello World');
});

// Configura o servidor para rodar na porta 5000
app.listen(5000);