
var appThreadedView = {};

appThreadedView.initializeColors = function() {

	var message = {
		handler: "appView",
		method: "initializeColors",
		parameters: []
	}

	self.postMessage(message);
};

appThreadedView.initializePlaceholders = function(worldState, consoleEnabled) {

	var message = {
		handler: "appView",
		method: "initializePlaceholders",
		parameters: [
			worldState,
			consoleEnabled
		]
	}

	self.postMessage(message);
};


export { appThreadedView }