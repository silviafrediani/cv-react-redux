import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

export function InfoPersonali(props) {

	if (!props.ip) {
		return (
			<section>
				LOADING...
			</section>
		)
	}

	const phoneItems = []
	for (const [key, value] of props.ip.IPTelefonoArr.entries()) {
		phoneItems.push(<span key={key}>{value.tipo}: {value.numero} | </span>)
	}

	const sitesItems = [];
	for (const [key, value] of props.ip.IPSitoArr.entries()) {
		sitesItems.push(<span key={key}>{value} | </span>)
	}

	const nazionalitaItems = [];
	for (const [key, value] of props.ip.IPNazionalita.entries()) {
		nazionalitaItems.push(<span key={key}>{value} | </span>)
	}

	return (

		<>

		<div className="row align-items-start">
			<div className="col-12 col-md-4 col-lg-3">
				<h4>INFORMAZIONI PERSONALI</h4>
				<NavLink
						className="btn btn-primary"
					to="/info-personali"
				>Modifica</NavLink>

			</div>
			<div className="col-12 col-md-8 col-lg-9">

				<div>						
					{props.ip.IPNome && props.ip.IPCognome &&
					<ul className="list-group">
						<li key="nome" className="list-group-item"><strong>Nome: </strong>{props.ip.IPNome}</li>
						<li key="cognome" className="list-group-item"><strong>Cognome: </strong>{props.ip.IPCognome}</li>
						<li key="qualifica" className="list-group-item"><strong>Qualifica: </strong>{props.ip.IPQualifica}</li>
						<li key="via" className="list-group-item"><strong>Indirizzo: </strong>{props.ip.IPViaCivico}</li>
						<li key="citta" className="list-group-item"><strong>Città: </strong>{props.ip.IPCitta}</li>
						<li key="cap" className="list-group-item"><strong>Cap: </strong>{props.ip.IPCap}</li>
						<li key="prov" className="list-group-item"><strong>Provincia: </strong>{props.ip.IPProvincia}</li>
						<li key="nazione" className="list-group-item"><strong>Nazione: </strong>{props.ip.IPNazione}</li>
						<li key="email" className="list-group-item"><strong>Email: </strong>{props.ip.IPEmail}</li>
						<li key="sito" className="list-group-item"><strong>Sito: </strong>{sitesItems}</li>
						<li key="telefono" className="list-group-item"><strong>Telefono: </strong>{phoneItems}</li>
						<li key="sesso" className="list-group-item"><strong>Sesso: </strong>{props.ip.IPSesso}</li>
						<li key="data_nascita" className="list-group-item"><strong>Data Nascita: </strong>{props.ip.IPDataNascita}</li>
						<li key="nazionalita" className="list-group-item"><strong>Nazionalità: </strong>{nazionalitaItems}</li>
					</ul>
					}	
				</div>
			</div>
		</div>

		</>

	)

}

function mapStateToProps(state) {
	return {
		ip: state.cv.IPArr
	};
}

export default connect(mapStateToProps)(InfoPersonali);
