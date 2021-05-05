import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import io from "socket.io-client"; */
import api from "../../services/api";
/* import { randomList } from "../../services/helpers"; */

import Logo from "../../assets/logo.svg";
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import ItsAMatchLogo from "../../assets/itsamatch.png";

import "./styles.css";

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleDislike(id) {
    const response = await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter((user) => user._id !== id)); //Deu dislike? remove ele
  }
  async function handleLike(id) {
    const response = await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user: match.params.id,
      },
    });

    setUsers(users.filter((user) => user._id !== id)); //Deu like? remove ele
  }

  return (
    <div className="main-container">
      <img src={Logo} alt="Logo" />

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <img src={user.avatar} alt="" />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={Like} alt="" />
                </button>
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={Dislike} alt="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <h1>Por enquanto não Devs 😥</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
