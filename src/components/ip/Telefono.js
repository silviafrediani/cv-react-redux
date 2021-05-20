import React from 'react';

export default function Telefono(props) {

	return (

		<>

		<div className="d-flex">
			<div >
				<select id="tipo" className="form-select" defaultValue={props.telefono.tipo ? props.telefono.tipo : ''}
					onChange={(e) => props.onEditHandler(e.target.id, e.target.value)}
				>
					<option key="seleziona" value="">Seleziona</option>
					<option key="cellulare" value="cellulare">Cellulare</option>
					<option key="abitazione" value="abitazione">Abitazione</option>
					<option key="lavoro" value="lavoro">Lavoro</option>
				</select>
			</div>
			<div >
				<input
					className="form-control d-inline"
					id="numero"
					type="text"
					value={props.telefono.numero ? props.telefono.numero : ''}
					onChange={(e) => props.onEditHandler(e.target.id, e.target.value)}
				/>
			</div>
			<div >
				<button type="button" 
				className="btn btn-sm btn-outline-primary btn-rounded waves-effect" 
				onClick={ () => props.onRemoveHandler(props.index) }>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</div>

		</>

	);

}
