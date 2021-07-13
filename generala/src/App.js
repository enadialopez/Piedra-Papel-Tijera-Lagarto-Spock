import React, { useState, useEffect } from 'react';
import './App.css';
import Dado from './componentes/Dado.jsx';
const dado = 1;

const defaultDados = [
  dado, dado, dado, dado, dado
  ];

const App = () => {

  const [dados, setDados] = useState(defaultDados);

  function numerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
  }

  const handleTirar = () => {
    dados.map( d =>
     d = numerosAleatorios(1,6));
  };
  
  return(
    <div>
      <div> {dados.map(d => <input type="button" value = {d}></input> )}</div>
      <button onClick={handleTirar}>Tirar</button>
    </div>
  );
}

export default App;
