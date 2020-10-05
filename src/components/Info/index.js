import React, { useState, useEffect } from 'react';

import { Doughnut } from 'react-chartjs-2';

import './index.css';


export default function Login() {
  const [data, setData] = useState({});
  const [perfume1, setPerfume1] = useState(12);
  const [perfume2, setPerfume2] = useState(89);
  const [perfume3, setPerfume3] = useState(75);
  const [perfume4, setPerfume4] = useState(99);
  const [perfume5, setPerfume5] = useState(25);

  const chart = () => {
    setData({
      labels: ["perfume1", "perfume2", "perfume3", "Perfume4", "Perfume5"],
      datasets: [
        {
          data: [12, 89, 75, 99, 25],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#7522f4'
          ],
          borderWidth: 4
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div>
      <h1>Informações de Uso</h1>

      <Doughnut data={data} options={
        { responsive: true }
      } />

      <div className="containerInfoPerfume">
        <div className="infoPerfumePercent">
          <span>Perfume 1</span>
          <span>{perfume1}%</span>
        </div>
        <div className="infoPerfumePercent">
          <span>Perfume 2</span>
          <span>{perfume2}%</span>
        </div>
        <div className="infoPerfumePercent">
          <span>Perfume 3</span>
          <span>{perfume3}%</span>
        </div>
        <div className="infoPerfumePercent">
          <span>Perfume 4</span>
          <span>{perfume4}%</span>
        </div>
        <div className="infoPerfumePercent">
          <span>Perfume 5</span>
          <span>{perfume5}%</span>
        </div>
      </div>
    </div>

  )
}