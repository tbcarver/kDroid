
var ajax = {};

ajax.get = function(url, callback) {

	var request = new XMLHttpRequest();

	request.onload = function() {

		if (request.readyState !== 4) {

			throw new Error("The request state is not DONE. Ready state: " + request.readyState);
		}

		if (request.status !== 200) {

			throw new Error("The request failed. Status: " + request.statusText);
		}

		callback(request.responseText);
	};

	request.onerror = function() {

		throw new Error("The request failed. Status: " + request.statusText);
	};

	request.open("GET", url);
	request.send(null);
}


export { ajax }