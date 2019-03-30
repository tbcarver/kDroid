
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

appThreadedView.setAnimationDuration = function(animationDuration) {

	var message = {
		handler: "appView",
		method: "setAnimationDuration",
		parameters: [
			animationDuration
		]
	}

	self.postMessage(message);
}

appThreadedView.setTileBackgroundColor = function(backgroundColor) {

	var message = {
		handler: "appView",
		method: "setTileBackgroundColor",
		parameters: [
			backgroundColor
		]
	}

	self.postMessage(message);
};


export { appThreadedView }