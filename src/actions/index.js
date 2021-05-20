import axios from 'axios';

export function getCVData() {
	return async function (dispatch) {

		return await axios({
			url: "http://localhost:3004/cv",
		}).then((response) => {
			dispatch({ type: "GET_CV_DATA", payload: response.data });
		}, (error) => {
			console.log(error);
		});

	};
}

export function saveCVData(cv) {
	return async function (dispatch) {

		return await axios({
			method: 'post',
			url: "http://localhost:3004/cv",
			data: cv,
		}).then((response) => {
			dispatch({ type: "SAVE_CV_DATA", payload: response.data });
		}, (error) => {
			console.log(error);
		});

	};
}

export function setCvSalvatoFalse() {
	return function (dispatch) {
		dispatch({ type: "CV_SALVATO_FALSE" });
	};
}

export function updateIP(ip) {
	return function (dispatch) {
		dispatch({ type: "UPDATE_IP", payload: ip });
	};
}

export function updateEP(ep,index) {
	return function (dispatch) {
		dispatch({ type: "UPDATE_EP", payload: {ep,index} });
	};
}