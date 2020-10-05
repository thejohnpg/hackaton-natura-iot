import React from 'react';

import './App.css';

import Logo from './assets/logo.png';


import { Link, BrowserRouter, Router } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={Logo} alt="logo-natura" className="imgLogo" />
      </div>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
