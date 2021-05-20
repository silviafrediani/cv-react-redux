import React from 'react';

export default function Sito(props) {

	return (

		<>

		<div className="d-flex">

			<div>
				<input
					className="form-control"
					type="text"
					name="IPSito[]"
					value={props.sito ? props.sito : ''}
					onChange={e => props.onEditHandler(e.target.value) }
				/>
			</div>

			<div>
				<button
					className="btn btn-sm btn-outline-primary btn-rounded waves-effect"
					type="button"
					onClick={() => props.onRemoveHandler(props.index)}>
					<i className="fas fa-times"></i>
				</button>
			</div>

		</div>

		</>

	);

}
