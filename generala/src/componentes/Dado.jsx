import React, {useEffect, useState} from 'react';

const Dado = ({ds}) => {

	const [valorDado, setValorDado] = useState({
		valor:"",
		select: "",
	});

	console.log(ds);

  	useEffect(() => {
	  setValorDado({valor: ds,
		           select: false})
  	});

	const onChange = (event) => {
		setValorDado(valorDado.valor = event.target.value);
  	};

	const onChangeSelect = (event) => {
		setValorDado(valorDado.select = event.target.value);
	}


	return (
		<div> 
			<input type="button" value={valorDado.valor} onChange={onChange} ></input>
			<input type="checkbox" value={true} onChange={onChangeSelect}/>
		</div>
	)

};

export default Dado;