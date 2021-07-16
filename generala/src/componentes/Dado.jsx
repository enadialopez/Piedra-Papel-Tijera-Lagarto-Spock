import React, {useEffect, useState} from 'react';

const Dado = ({ds, esSeleccionado}) => {

	const [dado, setDado] = useState({
		id:"",
		valor:"",
		select: "",
	});

  	useEffect(() => {
		console.log(ds)
	  setDado(ds)
  	},[ds]
	);

	const onChange = (event) => {
		setDado((prevState => ({...prevState, 
			[event.target.valor] : event.target.value,})))
  	};

	console.log(dado);

	return (
		<div> 
			<input type="button" value={dado.valor} onChange={onChange}/>
			<input type="checkbox" value={dado.valor} onChange={esSeleccionado(dado.id)}/>
		</div>
	)

};

export default Dado;