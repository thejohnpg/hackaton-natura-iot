import React from 'react';

import imgPerfil from './../../assets/profile.png';

import './index.css';

export default function App() {
  return (
    <div className="profile">
      <div className="imgProfile">
        <img src={imgPerfil} alt="" className="imgPersonalProfile" />
      </div>
      <div className="infoPlan">
        <div className="infoPerfumePercent infoProfile">
          <span>Sua Assinatura</span>
        </div>
        <div className="infoPerfumePercent infoPlan">
          <span>Plano 2</span>
          <span>R$ 79,90</span>
        </div>
        <div className="infoPerfumePercent infoProfile">
          <span>Consumo</span>
        </div>
      </div>
      <div className=""></div>
    </div>

  )
}