import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

import { CgProfile, CgPullClear } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/info">
        <div className="footerNavItem">
          <CgPullClear size={20} /> Informações</div>
      </Link>
      <Link to="/perfil">
        <div className="footerNavItem pipeBorder"><CgProfile size={20} /> Perfil</div>
      </Link>
    </div>
  )
}