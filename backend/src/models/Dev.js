//Abstração da tabela do banco de dados

const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    //Estrutura do banco para cadastrar um DEV
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
    likes: [
      {
                                    //Relacionando Likes
        type: Schema.Types.ObjectId, //Referencia o ID do mongo
        ref: "Dev",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev",
      },
    ],
  },
  {
    timestamps: true, //criar uma coluna automaticamente => data =>  createdAt, updatedAt
  }
);

module.exports = model("Dev", DevSchema);
