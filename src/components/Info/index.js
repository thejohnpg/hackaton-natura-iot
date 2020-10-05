import React, { useState, useEffect } from 'react';

import { Doughnut } from 'react-chartjs-2';

import { CgSmartHomeLight } from "react-icons/cg";

import Footer from './../Footer';

import './index.css';


export default function Login() {

  const [ ledActive, setLedActive ] = useState("");


  const [data, setData] = useState({});
  const [perfume1, setPerfume1] = useState(12);
  const [perfume2, setPerfume2] = useState(89);
  const [perfume3, setPerfume3] = useState(75);
  const [perfume4, setPerfume4] = useState(99);
  const [perfume5, setPerfume5] = useState(25);

  const chart = () => {
    setData({
      labels: ["floratta", "deoparfumintenso", "deoparfumllia", "meuprimeirohumor", "kriska"],
      datasets: [
        {
          data: [12, 89, 75, 99, 25],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#7522f4',
            '#3222f4',
          ],
          borderWidth: 4
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  async function handleChangeParfum(dataChange) {

    if (ledActive == dataChange) {
      setLedActive("");
    }
    else {
      setLedActive(dataChange);
    }

    const infoFragance = dataChange;

    fetch("https://portal.stg.eugenio.io/api/v1/things/529a226c-f80f-4c26-8175-46f8e3c37ff8/invoke", {
      method: "POST",
      headers: {
        "X-Tenant": "tenant1600801826487",
        "apikey": "KmHpnCrNo5FM4NF71J2RLCTnLI04Kcrp",
        "Content-Type": "application/json",
        // "deviceId": "529a226c-f80f-4c26-8175-46f8e3c37ff8",
      },
      body: JSON.stringify({
        "method": "change_parfum",
        "payload": `${infoFragance}`,
      }),
    })
      .then(response => {
        console.log(ledActive);
      })
  }

  return (
    <div className="appInfo">
      <h2>Informações de Uso</h2>

      <Doughnut data={data} options={
        { responsive: true }
      } />

      <div className="containerInfoPerfume">
        <div className="infoPerfumePercent">
          <span>Floratta</span>
          <span>{perfume1}%</span>
          <div className={`activateLed ${ledActive == "floratta" ? ledActive : ""}`} onClick={() => handleChangeParfum(`${data.labels[0]}`)}>
            <CgSmartHomeLight size={24} />
          </div>
        </div>
        <div className="infoPerfumePercent">
          <span>Deoparfumintenso</span>
          <span>{perfume2}%</span>
          <div className={`activateLed ${ledActive == "deoparfumintenso" ? ledActive : ""}`} onClick={() => handleChangeParfum(`${data.labels[1]}`)}>
            <CgSmartHomeLight size={24} />
          </div>
        </div>
        <div className="infoPerfumePercent">
          <span>Deoparfumllia</span>
          <span>{perfume3}%</span>
          <div className={`activateLed ${ledActive == "deoparfumllia" ? ledActive : ""}`} onClick={() => handleChangeParfum(`${data.labels[2]}`)}>
            <CgSmartHomeLight size={24} />
          </div>
        </div>
        <div className="infoPerfumePercent">
          <span>Humor</span>
          <span>{perfume4}%</span>
          <div className={`activateLed ${ledActive == "meuprimeirohumor" ? ledActive : ""}`} onClick={() => handleChangeParfum(`${data.labels[3]}`)}>
            <CgSmartHomeLight size={24} />
          </div>
        </div>
        <div className="infoPerfumePercent">
          <span>Kriska</span>
          <span>{perfume5}%</span>
          <div className={`activateLed ${ledActive == "kriska" ? ledActive : ""}`} onClick={() => handleChangeParfum(`${data.labels[4]}`)}>
            <CgSmartHomeLight size={24} />
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}