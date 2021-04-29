const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;

    //Instanciando users de like e dislike
    const loggedDev = await Dev.findById(user); 
    const targetDev = await Dev.findById(devId);

    //verificando se o lke é em um usuário que não existe
    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }

    return res.json({ ok: true });
  },
};
