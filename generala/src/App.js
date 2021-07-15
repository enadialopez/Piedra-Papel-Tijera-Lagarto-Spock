import React, { useState, useEffect } from 'react';
import './App.css';
import Dado from './componentes/Dado.jsx';
import Dados from './componentes/Dados.jsx';

const App = () => {

  const dado = 1;

  const dados = [dado, dado, dado, dado, dado];

  const [dadosValores, setDados]= useState(dados);
  const [contador, setContador]= useState(0);
  useEffect(() =>{
    setDados(dados)
  },[]);

  const numerosAleatorios = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const tirar = () =>{
    let tiradaMax = 3;
    if (contador !== tiradaMax){
      let ds = dados.map (d => (d= numerosAleatorios(1,6)));
      console.log(ds);
      setDados(ds);
      setContador(contador+1);
    } else {
    setContador(0);
    setDados ([])
  }
  };

  console.log(dados);
  
  return(
      <div>
      <Dados dados = {dadosValores} />
      <button onClick={tirar}>Tirar</button>
      <p>{contador}</p>
      
      </div>
  );
};

export default App;
