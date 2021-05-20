import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { updateEP } from "../../actions/index";
import Nazioni from "../../json/nazioni.json";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Modal from 'react-bootstrap/Modal';
import { EPTypes } from '../../propTypes/index';

ModalEP.propTypes = EPTypes;

export function ModalEP(props) {

	const [ep, setEP] = useState({});
	//const [selectedDay, setSelectedDay] = useState(undefined);


	useEffect(() => {
		if (props.currentEP) {
			setEP({ ...props.currentEP });
			//setSelectedDay(new Date(props.ep.IPDataNascita));
		}
	}, [props.currentEP]);


	if (!props.currentEP) {
		return (
			<section>
				LOADING...
			</section>
		)
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.updateEP(ep,props.index);
	}

	function handleChangeInput(name, value) {
		setEP({
			...ep,
			[name]: value
		})
	}

	/*function handleDayChange(selectedDay, modifiers, dayPickerInput) {
		const input = dayPickerInput.getInput();
		setSelectedDay(selectedDay);
		setIP({
			...ip,
			IPDataNascita: input.value.trim()
		});
	}*/


	return (

		<>

			<Modal
				size="lg"
				show={props.show}
				onHide={() => props.hide()}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Modifica Esperienze Professionali
				</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<div className="form-row">
						<div className="form-group col-md-4">
							<label className="w-100">Da</label>
							<div className="md-form md-outline input-with-post-icon">
								<input placeholder="Seleziona" type="text" name="EPDataDa" className="form-control datepicker" />
							</div>
						</div>
						<div className="form-group col-md-4">
							<label className="w-100">A</label>
							<div className="md-form md-outline input-with-post-icon">
								<input placeholder="Seleziona" type="text" name="EPDataA" className="form-control datepicker"/>
							</div>
						</div>
						<div className="form-group col-md-4">
							<div className="wrapper-in-corso">
								<label className="w-100"></label>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="EPIncorso" value="" />
									<label className="form-check-label" htmlFor="EPIncorso">In corso</label>
                </div>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="EPOccupazione">Occupazione o posizione lavorativa ricoperta</label>
						<input type="text" className="form-control" 
							id="EPOccupazione" 
							name="EPOccupazione" 
							placeholder="es: Account Manager" 
							value={ep.EPOccupazione ? ep.EPOccupazione : ''}
							onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
							required />
							<div className="errors-messages error-ep-occupazione invalid-feedback mt-2">
								Il campo occupazione o posizione lavorativa è obbligatorio.
							</div>
					</div>
					<h4 className="titoletto-form">Datore di lavoro</h4>
					<div className="form-group">
						<label htmlFor="EPNomeDL">Nome</label>
						<input type="text" 
						className="form-control" 
						id="EPNomeDL" 
						name="EPNomeDL" 
						placeholder="Alma Mater Studiorum"
						value={ep.EPNomeDL ? ep.EPNomeDL : ''}
						onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
						/>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<div className="form-group">
								<label htmlFor="EPCittaDL">Città</label>
								<input type="text" 
								className="form-control" 
								id="EPCittaDL" 
								name="EPCittaDL" 
								placeholder="Roma"
								value={ep.EPCittaDL ? ep.EPCittaDL : ''}
								onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
								/>
							</div>
						</div>
						<div className="form-group">
							<label>Nazione</label>
							<select className="custom-select"
								id="EPNazioneDL"
								defaultValue={ep.EPNazioneDL}
								onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
							>
								{Nazioni && Nazioni.map((nazione) => {
									return (
										<option key={nazione.name} value={nazione.name}>{nazione.name}</option>
									);
								})}
							</select>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="EPWebsiteDL">Website</label>
						<input type="text" 
						className="form-control" 
						id="EPWebsiteDL" 
						name="EPWebsiteDL" 
						placeholder=""
						value={ep.EPWebsiteDL ? ep.EPWebsiteDL : ''}
						onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="EPAttivita">Principali attività e responsabilità</label>
						<textarea 
						className="form-control" 
						id="EPAttivita" 
						name="EPAttivita" 
						placeholder="es: Relazioni con i fornitori"
						value={ep.EPAttivita ? ep.EPAttivita : ''}
						onChange={(e) => handleChangeInput(e.target.id, e.target.value)}
						></textarea>
					</div>

					<div className="input-group mb-4">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroupFileAddon01">
								<i className="fas fa-cloud-upload-alt" aria-hidden="true"></i>
							</span>
						</div>
						<div className="custom-file">
							<input type="file" className="custom-file-input" name="EPFile" accept="application/msword,application/pdf" aria-describedby="inputGroupFileAddon01"/>
								<label className="custom-file-label" htmlFor="EPFile" data-browse="Sfoglia">Aggiungere file (.doc,.pdf)</label>
						</div>
							<div className="errors-messages error-ep-file invalid-feedback mt-2">
								Il file che stai tentando di caricare supera la dimensione massima consentita (1 MB).
							</div>
					</div>

					<div className="form-group">
						<h4 className="titoletto-form">Allegato:</h4>
						<p id="EPAllegato"></p>
					</div>

				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-yellow" type="button" onClick={handleSubmit}>
						<i className="fas fa-save"></i> Salva
				</button>
					<button className="btn btn-yellow" type="button" onClick={() => props.hide()}>
						<i className="fas fa-window-close"></i> Chiudi
				</button>
				</Modal.Footer>
			</Modal>

		</>

	);

}

function mapDispatchToProps(dispatch) {
	return {
		updateEP: (ep,index) => dispatch(updateEP(ep,index))
	};
}

export default connect(null, mapDispatchToProps)(ModalEP);
