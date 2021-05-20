//json-server --watch db.json --port 3004

import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Curriculum from './components/Curriculum';
import InfoPersonaliForm from './components/ip/InfoPersonaliForm';
import { getCVData, saveCVData } from "./actions/index";
import { connect } from "react-redux";
import { UserDataProvider } from './context/user';


export const App = (props) => {

	useEffect(() => {
		props.getCVData();
	}, [] );

	function saveCV() {
		props.saveCVData(props.cv);
	}

  return (
		<UserDataProvider>

			<div className="container-fluid px-0">
				<div className="row">
					<BrowserRouter>
						<div className="col-auto">
							<Route path="/">
								<Sidebar
									cvSalvato={props.cvSalvato}
									saveCV={saveCV}
								/>
							</Route>
						</div>	
						<div className="col-12 col-lg-8">
							<Route path="/cv">
								<Curriculum/>
							</Route>
							<Route path="/info-personali">
								<InfoPersonaliForm/>
							</Route>
						</div>	
					</BrowserRouter>
				</div>
			</div>

		</UserDataProvider>
  );

}

function mapStateToProps(state) {
	return {
		cv: state.cv,
		cvSalvato: state.cvSalvato
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getCVData: () => dispatch(getCVData()),
		saveCVData: (cv) => dispatch(saveCVData(cv))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
