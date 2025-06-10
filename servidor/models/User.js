// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  turma:    { type: String, required: true }
});

// Verifica se o modelo 'User' já foi registrado para evitar OverwriteModelError
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
