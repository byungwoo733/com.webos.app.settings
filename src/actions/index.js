import LS2Request from '@enact/webos/LS2Request';
/* ******************************************************************************************* */
/* PATH */
/* ******************************************************************************************* */
export const setPath = path => {
	return {
		type: 'SET_PATH',
		path: path
	};
};

export const addPath = params => {
	return {
		type: 'PUSH_PATH',
		path: params
	};
};

export const removePath = () => {
	return (dispatch, getState) => {
		let state = getState();

		if (state.path.length < 2) {
			if (typeof window === 'object') {
				window.close();
			}
		}

		dispatch({
			type: 'POP_PATH'
		});
	};
};

/* ******************************************************************************************* */
/* Luna Request */
/* ******************************************************************************************* */
export const lunaRequest = (params, dispatch) => {
	const {service, method, param, handleLunaResponses, type, args} = params;

	return new LS2Request().send({
		service,
		method,
		parameters: param,
		onSuccess: (res) => {
			delete res.returnValue;
			delete res.subscribed;
			delete res.method;
			delete res.subscribed;
			delete res.category;

			let payload = res;
			if (handleLunaResponses) {
				payload = handleLunaResponses(res, args);
			}

			if (type) {
				return dispatch({
					type,
					payload
				});
			}
		}
	});
};
/* ******************************************************************************************* */
/* Luna Set */
/* ******************************************************************************************* */
export const setSystemTime = params => () => {
	new LS2Request().send({
		service: 'luna://com.palm.systemservice/time/',
		method: 'setSystemTime',
		parameters: params
	});
};

function receiveSetSystemSettingsCountry () {
	return {
		type: 'RELOAD_FOR_COUNTRY',
		payload: true
	};
}

export const setSystemSettings = params => dispatch => {
	return new LS2Request().send({
		service: 'luna://com.webos.settingsservice/',
		method: 'setSystemSettings',
		parameters: params,
		onComplete: (res) => {
			if (res && res.returnValue && params && params.category === 'option' && params.settings && params.settings.country) {
				dispatch(receiveSetSystemSettingsCountry());
			}
		}
	});
};

export const setPreferences = params => () => {
	return new LS2Request().send({
		service: 'luna://com.palm.systemservice/',
		method: 'setPreferences',
		parameters: params
	});
};

export const setDns = (params) => () => {
	return new LS2Request().send({
		service: 'luna://com.webos.service.connectionmanager/',
		method: 'setdns',
		parameters: params
	});
};

export const setIpv4 = (params) => () => {
	return new LS2Request().send({
		service: 'luna://com.webos.service.connectionmanager/',
		method: 'setipv4',
		parameters: params
	});
};
