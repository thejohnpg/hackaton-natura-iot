import React, { useState } from 'react';

import './index.css';

import cpfMask from "./Mask";

export default function Login() {

  const [ inputCPF, setInputCPF] = useState()

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
        <button className="buttonLogin"> Cadastrar </button>
      </div>
    </form>

  )
}