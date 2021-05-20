import PropTypes from 'prop-types';

export const IPTypes = {
	ip: PropTypes.shape(
		{
			PhotoFileName: PropTypes.string,
			IPNome: PropTypes.string,
			IPCognome: PropTypes.string,
			IPQualifica: PropTypes.string,
			IPViaCivico: PropTypes.string,
			IPCap: PropTypes.string,
			IPCitta: PropTypes.string,
			IPProvincia: PropTypes.string,
			IPNazione: PropTypes.string,
			IPEmail: PropTypes.string,
			IPSesso: PropTypes.string,
			IPDataNascita: PropTypes.string,
			IPTelefonoArr: PropTypes.array,
			IPSitoArr: PropTypes.array,
			IPNazionalita: PropTypes.array,
		}
	),
};

export const EPTypes = {
	currentEP: PropTypes.shape(
		{
			EPDataDa: PropTypes.string,
			EPDataA: PropTypes.string,
			EPIncorso: PropTypes.bool,
			EPOccupazione: PropTypes.string,
			EPNomeDL: PropTypes.string,
			EPCittaDL: PropTypes.string,
			EPNazioneDL: PropTypes.string,
			EPWebsiteDL: PropTypes.string,
			EPAttivita: PropTypes.string,
			EPFileName: PropTypes.string,
			EPOrdinamento: PropTypes.string,
		}
	),
};