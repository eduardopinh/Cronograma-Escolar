const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Conecta ao MongoDB
require('./db');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'front-end')));

// Rota de registro
const usersRouter = require('./routes/users');
app.use('/', usersRouter);

// Rota de login
const loginRouter = require('./routes/login.js');
app.use('/', loginRouter);

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
