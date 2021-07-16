import React from 'react';
import Dado from './Dado.jsx';

const Dados = ({dados, esSeleccionado}) => {
	console.log(dados);
	
	return (
			<div>
			 {dados.map(d => 
			 	<Dado ds={d} esSeleccionado = {esSeleccionado(d.id)} /> 
			 )}
			</div>
		
	)
};
export default Dados;