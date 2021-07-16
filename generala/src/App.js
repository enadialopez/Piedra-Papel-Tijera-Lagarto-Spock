import React, { useState, useEffect } from 'react';
import './App.css';
import Dado from './componentes/Dado.jsx';
import Dados from './componentes/Dados.jsx';

const App = () => {

  const dado1 = {
    id:1,
    valor:1,
    estado: false,
  };

  const dado2 = {
    id:2,
    valor:1,
    estado: false,
  };

  const dado3 = {
    id:3,
    valor:1,
    estado: false,
  };

  const dado4 = {
    id:4,
    valor:1,
    estado: false,
  };

  const dado5 = {
    id:5,
    valor:1,
    estado: false,
  };

  const dadosValores = [dado1, dado2, dado3, dado4, dado5];

  const [dados, setDados]= useState(dadosValores);
  const [contador, setContador]= useState(0);
  const [puntaje, setPuntaje]= useState(0);

  useEffect(() =>{
    setDados(dados);
  },[dados]);

  const numerosAleatorios = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const tirar = () =>{
    let tiradaMax = 3;
    if (contador !== tiradaMax){
      dados.map (dado => {cambiarValor(dado)})
      setDados(dados);
      setContador(contador+1);
    } else {
    setContador(0);
    setDados (dadosValores);
    }
  };

  const cambiarValor = (dado) => {
    let dd = dado
    if (true !== dado.estado){
      dd.valor = numerosAleatorios(1,6);
    } else {
      dd.valor = dado.valor;
    }
  };

  const esSeleccionado = d =>event => {
    setDados((prevState => 
      ({...prevState, 
			[event.target.estado] : cambiarDeEstado(event.target.value)})))
  	};

  const cambiarDeEstado = (dado) => {
    let dd = dado;
    if (dado.id === d.id){
      dd.estado = !dado.estado;
    }else{
      dd.estado = dado.estado;
    };
  };

  const onChange = (event) => {
		setDados((prevState => ({...prevState, 
			[event.target.valor] : event.target.value,})))
  	};

  
  return(
        <div>
			    {dados.map(dado => 
          <div> 
            <input type="button" value={dado.valor} onChange={onChange}/>
            <input type="checkbox" value={dado.valor} onChange={esSeleccionado(dado)}/>
          </div>)}
          <button onClick={tirar}>Tirar</button>
          <p>Tirada: {contador}</p>
          <p>Puntaje: {puntaje}</p>
        </div>
      );
};

export default App;
