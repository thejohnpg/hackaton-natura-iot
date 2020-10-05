import React from 'react';

import { Link } from 'react-router-dom';

import imgPerfil from './../../assets/profile.png';

import { CgLogOut } from "react-icons/cg";

import Footer from './../Footer';

import './index.css';

export default function App() {
  return (
    <div className="appProfile">
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
            <span>--</span>
          </div>
        </div>
        <div className="divLogout">
          <Link to="/">
            <button className="buttonLogout"><CgLogOut size={20} /> Sair </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>


  )
}