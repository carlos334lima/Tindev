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
  },
  {
    timestamps: true, //criar uma coluna automaticamente => createdAt, updatedAt
  }
);

module.exports = model("Dev", DevSchema);
