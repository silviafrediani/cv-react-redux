import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { UserDataContext } from '../../context/user';


export function Photo(props) {

	const [user] = React.useContext(UserDataContext);

	if (!props.ip) {
		return (
			<section>
				LOADING...
			</section>
		)
	}

	return (

		<>

			<div className="row section-content align-items-start">
				<div className="col-4 col-md-3">
					<h4 className="titoletto-form">FOTO</h4>
				</div>
				<div className="col-8 col-md-9">
					<div className="wrapper-photo">
					{ props.ip.PhotoFileName &&
						<>
							<img src={` /uploads_cv/${user.id}/foto/${props.ip.PhotoFileName} ` } />
						<br />
						<span id="rimuovi-photo"><i className="fas fa-trash-alt mr-2"></i>Rimuovi</span>
						</>
					}
					</div>
				</div>
				<div className="col-12">
					<form className="md-form">
						<div className="file-field">
							<div className="btn btn-sm btn-outline-primary btn-rounded waves-effect float-left btn-action">
								<span>Upload file <i className="fas fa-cloud-upload-alt ml-3" aria-hidden="true"></i></span>
								<input type="file" id="photo" name="photo" accept="image/*"/>
							</div>
							<div className="file-path-wrapper">
								<input id="photo-validate" className="file-path validate" type="text" readOnly placeholder="Carica la tua foto"/>
							</div>
						</div>
					</form>
				</div>
			</div>

		</>

	)

}

function mapStateToProps(state) {
	return {
		ip: state.cv.IPArr,
	};
}

export default connect(mapStateToProps)(Photo);
