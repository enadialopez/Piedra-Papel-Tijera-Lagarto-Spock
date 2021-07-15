import React from 'react';
import Dado from './Dado.jsx';

const Dados = ({dados}) => {
	console.log(dados)
	
	return (
			<div>
			 {dados.map(d => 
			 	<Dado ds={d}/> 
			 )}
			</div>
		
	)
};
export default Dados;