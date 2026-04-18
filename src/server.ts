import "dotenv/config";
import express from "express";

const app = express();

app.get("/teste", (request, response) => {
  return response.json({ mensagem: "rota tá funcionando" });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Help Desk Online rodando na porta ${PORT}`);
});
