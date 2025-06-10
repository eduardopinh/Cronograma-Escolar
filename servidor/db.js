const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sistema-login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Conectado ao MongoDB");
}).catch((err) => {
  console.error("Erro ao conectar ao MongoDB:", err);
});
