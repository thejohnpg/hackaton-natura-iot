import React from 'react';

import './App.css';

import AllunaLogo from './assets/alluna.png';
import NaturaLogo from './assets/natura.png';


import { Link, BrowserRouter, Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={NaturaLogo} alt="logo-natura" className="imgLogo" />
        <img src={AllunaLogo} alt="logo-aluna" className="imgLogo" />
      </div>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
