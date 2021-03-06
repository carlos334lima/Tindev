//Controller => Responsavel por receber requisições e formular uma resposta

/* 

5 MÉTODOS DE CRIAÇÃO DE API

INDEX  => Lista do recurso
SHOW   => Retornar um único do recurso
STORE  => Criação
DELETE => Deletar
UPDATE => Atualizar

*/

const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  
  async index(req, res){
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });

    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    //Buscando usuário já existente
    //findOnde = procurar por um

    const UserExist = await Dev.findOne({ user: username });

    if (UserExist) {
      return res.json(UserExist);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { name, bio, avatar_url: avatar } = response.data;

    //Jogando para dentro do banco de dados

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  },
};
