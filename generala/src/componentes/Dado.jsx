import React, {useState} from 'react';

const Dado = ({valor}) => {
	const[valorDado, setValorDado] = useState(numerosAleatorios(1,6));

	function numerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
  }



	return (
		<div>
			<input type="button" value ={valorDado}></input>
		</div>
	)

};

export default Dado;