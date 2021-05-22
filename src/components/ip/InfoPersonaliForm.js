import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Sito from "./Sito";
import Telefono from "./Telefono";
import { updateIP, setCvSalvatoFalse } from "../../actions/index";
import Nazioni from "../../json/nazioni.json";
import Province from "../../json/province-italia.json";
import { IPTypes } from '../../propTypes/index';

InfoPersonaliForm.propTypes = IPTypes;

export function InfoPersonaliForm(props) {

	//const [selectedDay, setSelectedDay ] = useState( undefined );

	if (!props.ip) {
		return (
			<section>
				LOADING...
			</section>
		)
	}

	function handleChange(e) {
		/*props.updateIP({
			...props.ip,
			[e.target.name]: e.target.value
		});*/
		props.updateIP({
			...props.ip,
			[e.target.name]: e.target.value
		});
		props.setCvSalvatoFalse();
	}

	/*function handleDayChange(selectedDay, modifiers, dayPickerInput) {
		const input = dayPickerInput.getInput();
		setSelectedDay(selectedDay);
		props.updateIP({
			...props.ip,
			IPDataNascita: input.value.trim()
		});
	}*/


	return (

	<>	
		<div className="bg-light p-5 rounded">
		<h4>MODIFICA INFORMAZIONI PERSONALI</h4>

		<form>

			<div className="mb-3">
				<label>Nome</label>
				<input type="text"
					className="form-control"
					name="IPNome"
					value={props.ip.IPNome ? props.ip.IPNome : ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label>Cognome</label>
				<input type="text"
					className="form-control"
					name="IPCognome"
					value={props.ip.IPCognome ? props.ip.IPCognome : ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label>Qualifica</label>
				<input type="text"
					className="form-control"
					name="IPQualifica"
					value={props.ip.IPQualifica ? props.ip.IPQualifica : ''}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-3">
				<label>Indirizzo</label>
				<input type="text"
					className="form-control"
					name="IPViaCivico"
					value={props.ip.IPViaCivico ? props.ip.IPViaCivico : ''}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label>Città</label>
				<input type="text"
					className="form-control"
					name="IPCitta"
					value={props.ip.IPCitta ? props.ip.IPCitta : ''}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label>Cap</label>
				<input type="text"
					className="form-control"
					name="IPCap"
					value={props.ip.IPCap ? props.ip.IPCap : ''}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label>Provincia</label>
					<select className="form-select"
					name="IPProvincia"
					value={props.ip.IPProvincia}
					onChange={handleChange}
				>
					{Province && Province.map((provincia) => {
						return (
							<option key={provincia.nome} value={provincia.sigla}>{provincia.nome}</option>
						);
					})}
				</select>
			</div>
			<div className="mb-3">
				<label>Nazione</label>
					<select className="form-select"
					value={props.ip.IPNazione}
					name="IPNazione"
					onChange={handleChange}
				>
					{Nazioni && Nazioni.map((nazione) => {
						return (
							<option key={nazione.name} value={nazione.name}>{nazione.name}</option>
						);
					})}
				</select>
			</div>
			<div className="mb-3">
				<label>Email</label>
				<input type="email"
					className="form-control"
					name="IPEmail"
					value={props.ip.IPEmail ? props.ip.IPEmail : ''}
					onChange={handleChange}
				/>
			</div>

			<div className="mb-3">
				<label>Sesso</label>
					<select className="form-select" 
					name="IPSesso"
					value={props.ip.IPSesso ? props.ip.IPSesso : ''}
					onChange={handleChange}
				>
					<option key="Maschile" value="Maschile">Maschile</option>
					<option key="Femminile" value="Femminile">Femminile</option>
				</select>
			</div>

			<div className="mb-3">
				<label>Data di nascita</label>
				<input type="date"
					className="form-control"
					name="IPDataNascita"
					value={props.ip.IPDataNascita ? props.ip.IPDataNascita : ''}
					onChange={handleChange}
				/>
			</div>

			{/*
					<div className="mb-3">
						<p><strong>
							{!selectedDay && '<strong></strong>Seleziona Data di nascita'}
							{selectedDay &&
								`Data di nascita: ${selectedDay.toLocaleDateString()}`}
							</strong>
						</p>
						<DayPickerInput
							value={props.ip.IPDataNascita}
							onDayChange={handleDayChange}
							dayPickerProps={{
								selectedDays: selectedDay,
							}}
						/>
					</div>
			*/}

			<div className="mb-3">
				<label>Nazionalità</label>
					<select className="form-select" 
					multiple 
					value={props.ip.IPNazionalita ? [...props.ip.IPNazionalita] : []}
					onChange={(e) => {
						props.updateIP({
							...props.ip,
							IPNazionalita: Array.from(e.target.selectedOptions, option => option.value)
						})
					}}
				>
					{Nazioni && Nazioni.map((nazione) => {
						return (
							<option key={nazione.name} value={nazione.name}>{nazione.name}</option>
						);
					})}
				</select>
			</div>
			<hr />

			{/* siti */}
			<div className="mb-3">
				<label>Sito/i</label>
				{props.ip.IPSitoArr && props.ip.IPSitoArr.map((sito, index) => {

					return (

						<Sito
							key={index.toString()}
							index={index}
							sito={sito}
							onEditHandler={(value) => {
								const sites = [...props.ip.IPSitoArr];
								sites[index] = value;
								props.updateIP({
									...props.ip,
									IPSitoArr: sites
								})
							}}
							onRemoveHandler={(pos) => {
								const sites = [...props.ip.IPSitoArr].filter((sito, i) => i != pos);
								props.updateIP({
									...props.ip,
									IPSitoArr: sites
								})
							}}
						/>

					);

				})}

			</div>

			{props.ip.IPSitoArr && (

				<button className="btn btn-sm btn-outline-primary btn-rounded waves-effect" type="button" onClick={() => {
					const sites = [...props.ip.IPSitoArr];
					sites.push('');
					props.updateIP({
						...props.ip,
						IPSitoArr: sites
					})
				}}>
				<i className="fas fa-plus-circle"></i> Aggiungi Sito
				</button>

			)}
			<hr />
			{/* end siti */}

			{/* telefoni */}
			<div className="mb-3">
				<label>Telefono/i</label>

				{props.ip.IPTelefonoArr && props.ip.IPTelefonoArr.map((telefono, index) => {

					return (

						<Telefono
							key={index.toString()}
							index={index}
							telefono={telefono}
							onEditHandler={(id, value) => {
								const phones = [...props.ip.IPTelefonoArr];
								phones[index] = {
									...phones[index],
									[id]: value
								};
								props.updateIP({
									...props.ip,
									IPTelefonoArr: phones
								})

							}}
							onRemoveHandler={(pos) => {
								const phones = [...props.ip.IPTelefonoArr].filter((phone, i) => i != pos);
								props.updateIP({
									...props.ip,
									IPTelefonoArr: phones
								})
							}}
						/>

					);

				})}

			</div>

			{props.ip.IPTelefonoArr && (
				<button className="btn btn-sm btn-outline-primary btn-rounded waves-effect" type="button" onClick={() => {
					const phones = [...props.ip.IPTelefonoArr];
					phones.push({ tipo: 'seleziona', numero: '' });
					props.updateIP({
						...props.ip,
						IPTelefonoArr: phones
					})

				}}>
				<i className="fas fa-plus-circle"></i> Aggiungi Telefono
				</button>
			)}
			{/* end telefoni */}

		</form>
		</div>

	</>

	);

}

function mapStateToProps(state) {
	return {
		ip: state.cv.IPArr,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateIP: (ip) => dispatch(updateIP(ip)),
		setCvSalvatoFalse: () => dispatch(setCvSalvatoFalse())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPersonaliForm);
