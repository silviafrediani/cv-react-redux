import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

export function EsperienzeProfessionali(props) {

	const [showModal, setShowModal] = useState( false );
	const [ep, setEP] = useState( [] );
	const [currentEdit, setCurrentEdit] = useState( {} );
	const [index, setIndex] = useState( '' );


	useEffect(() => {
		if (props.ep) {
			setEP( [...props.ep] );
		}
	}, [props.ep]);


	if (!props.ep) {
		return (
			<section>
				LOADING...
			</section>
		)
	}

	return (

		<>

			<div className="row section-content align-items-start">
				<div className="col-12 col-md-4 col-lg-3">
					<h4 className="titoletto-form">ESPERIENZA PROFESSIONALE</h4>
				</div>
				<div className="col-12 col-md-8 col-lg-9">
					<button type="button" 
						className="btn btn-sm btn-outline-primary btn-rounded waves-effect btn-action"
						onClick={() => {
							setCurrentEdit({
								EPDataDa: '',
								EPDataA: '',
								EPIncorso: '',
								EPOccupazione: '',
								EPNomeDL: '',
								EPCittaDL: '',
								EPNazioneDL: '',
								EPWebsiteDL: '',
								EPAttivita: '',
								EPFileName: '',
								EPOrdinamento: '',
							});
							setIndex( ep.length );
							setShowModal(true);
						}}
					>
						<i className="fas fa-plus-circle"></i> Aggiungere esperienza professionale
					</button>
				</div>
				<div className="col-12 wrapper-ep">

					{ep && ep.map((esp, index) => {
						return (

							<div className="row mt-4" key={index}>
								<div className="col-6 col-sm-3">
									data da - data a 
								</div>
								<div className="col-6 col-sm-9">
									<p>{esp.EPOccupazione}</p>
									<p>{esp.EPNomeDL}
										{(esp.EPNomeDL != '' && (esp.EPCittaDL != '' || esp.EPNazioneDL != '') ? ', ' + esp.EPCittaDL : '')}
										{(esp.EPNazioneDL != '' ? ' (' + esp.EPNazioneDL + ')' : '')}
									</p>
									<p>{esp.EPWebsiteDL}</p>
									<p>{esp.EPAttivita}</p>
									{(esp.EPFileName != '' ? '<p>Allegato: ' + esp.EPFileName + '</p>' : '')}
								</div>
								<div className="col-12">
									<div className="d-flex justify-content-left mt-2">

										<button type="button" 
										className="btn btn-sm btn-outline-primary btn-rounded waves-effect btn-action"
										onClick={ () => {
											setCurrentEdit(esp);
											setIndex(index);
											setShowModal(true);
										}}										
										>
										<i className="fas fa-edit"></i>
										</button>

										<button type="button" 
										className="btn btn-sm btn-outline-primary btn-rounded waves-effect btn-action"
										onClick={() => {
											const esperienze = [...ep].filter((esperienza, i) => i != index);
											setEP([
												...esperienze,
											])
										}}

										>
										<i className="fas fa-trash"></i>
										</button>
									</div>
								</div>
							</div>

						);
					})}


				</div>



			</div>

		</>

	)

}

function mapStateToProps(state) {
	return {
		ep: state.cv.EPArr
	};
}

export default connect(mapStateToProps)(EsperienzeProfessionali);
