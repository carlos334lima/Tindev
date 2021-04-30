const express = require("express");
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikeController')

const routes = express.Router();

/* 

  QUERY PARAMS: Filtros e paginação; (Get)
  ROUTE PARAMS: Identificar recursos (atualizar/deletando)
  REQUEST BODY: Conteúdo na hora de criar/ editar (JSON)

*/
routes.get('/devs', DevController.index);

routes.post("/devs", DevController.store);
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikesController.store)

module.exports = routes;
