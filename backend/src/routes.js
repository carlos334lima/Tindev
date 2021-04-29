const express = require("express");
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router();

/* 

  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)

*/


routes.post("/devs", DevController.store);
routes.post('/devs/:devId/likes', LikeController.store)

module.exports = routes;
