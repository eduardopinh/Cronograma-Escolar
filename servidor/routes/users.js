const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Rota de registro
router.post('/register', async (req, res) => {
  const { username, email, password, turmaSelect } = req.body;

  try {
    // Verifica se já existe usuário com esse email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email já cadastrado!' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria novo usuário
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      turma: turmaSelect
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ message: 'Erro ao registrar usuário.', error: error.message });
  }
});

module.exports = router;
