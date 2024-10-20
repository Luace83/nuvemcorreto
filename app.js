const express = require('express');
const app = express();
const PORT = 3000;

//Comando 1
app.get('/',(req,res) => {
    res.send('<h1>Bem vindo à Página Inicial!</h1>');
});

//Comando 2
app.get('/sobre', (req,res) => {
    res.send('<h1>Sobre nós</h1><p>Informações sobre a empresa.</p>');
});

//Comando 3
app.get('/contato', (req,res) => {
    res.send('<h1>Contato</h1><p>Envie um email para mais informações</p>');
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});