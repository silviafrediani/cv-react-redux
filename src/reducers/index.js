
const initialState = {
	cv: {},
	cvSalvato: false,
}

function rootReducer(state = initialState, action) {

	switch (action.type) {
		case 'GET_CV_DATA': {
			return Object.assign({}, state, {
				cv: action.payload
			});
		}
		case 'SAVE_CV_DATA': {
			return Object.assign({}, state, {
				cv: {
					...state.cv
				},
				cvSalvato: true,
			});
		}
		case 'CV_SALVATO_FALSE': {
			return Object.assign({}, state, {
				cvSalvato: false,
			});
		}
		case 'UPDATE_IP': {
			return Object.assign({}, state, {
				cv: {
					...state.cv,
					IPArr: {
						...state.cv.IPArr,
						...action.payload
					}
				}
			});
		}
		case 'UPDATE_EP': {
			const EP = [...state.cv.EPArr];
			EP[action.payload.index] = action.payload.ep;
			return Object.assign({}, state, {
				cv: {
					...state.cv,
					EPArr: EP
				}
			});
		}
		default:
			return state
	}
}

export default rootReducer;
