import React from 'react';


import './index.css';

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <form>
        <div className="form">
          <div className="inputForm">
            <input type="text" className="inputLogin" placeholder="digite seu email" />
            <input type="text" className="inputPass" placeholder="senha" />
          </div>
        </div>
        <div className="inputButton">
        </div>
      </form>
      <div className="inputButton">
        <button className="buttonLogin"> Login </button>

        <Link to="/cadastro">
          <button className="buttonSignup"> Novo por Aqui? Cadastre-se </button>
        </Link>
      </div>
    </div>

  )
}