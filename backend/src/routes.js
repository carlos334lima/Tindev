const express = require("express");

const routes = express.Router();

/* 

  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)

*/

routes.get("/", (request, response) => {
  return response.json({ message: "olá" });
});

routes.post("/devs", (request, response) => {
  const { name, email } = request.body;

  console.log(request.body);

  return response.json({ message: `nome: ${name}` });
});

module.exports = routes;
