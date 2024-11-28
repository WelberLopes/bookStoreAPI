import app from "./src/app.js";

const PORT = 3000;

// Usando o app do Express para ouvir a porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
