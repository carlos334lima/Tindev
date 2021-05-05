import React, { useState } from "react";
import api from "../../services/api";

import Logo from "../../assets/logo.svg";

import "./styles.css";

const Login = ({ history }) => {
  //Recuperar o ID assim que que APi retornar, depois passar via parametro para a proxima tela= usar history

  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      username,
    });

    const { _id } = response.data;


    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">
      <form>
        <img src={Logo} alt="Logo" />

        <input
          placeholder="Digite Seu Usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
