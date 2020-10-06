import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './index.css';

import cpfMask from "./Mask";

export default function Login() {

  const [inputCPF, setInputCPF] = useState()

  function handleChange(event) {
    event.preventDefault();
    setInputCPF(cpfMask(event.target.value));
  }

  return (
    <form>
      <h1>Cadastro</h1>

      <div className="form">
        <div className="inputForm">
          <input type="text" className="inputLogin" placeholder="digite seu email" />
          <input type="text" className="inputLogin" placeholder="digite seu cpf" onChange={handleChange} value={inputCPF} maxLength={11} />
          <input type="password" className="inputPass" placeholder="senha" />
        </div>
      </div>
      <div className="inputButton">
        <Link to="/">
          <button className="buttonLogin btnsignUp"> Cadastrar </button>
        </Link>
      </div>
      <Link to="/">
        <button className="buttonSignup backToLogin"> Voltar </button>
      </Link>
    </form>

  )
}