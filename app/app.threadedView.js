
var appThreadedView = {};

appThreadedView.initializeColors = function() {

	var message = {
		handler: "appView",
		method: "initializeColors",
		parameters: []
	}

	self.postMessage(message);
};

appThreadedView.initializePlaceholders = function(rowsCount, columnsCount, consoleEnabled) {

	var message = {
		handler: "appView",
		method: "initializePlaceholders",
		parameters: [
			rowsCount,
			columnsCount,
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

appThreadedView.getTileBackgroundColor = function() {

	var message = {
		handler: "appView",
		method: "getTileBackgroundColor",
		parameters: []
	}

	self.postMessage(message);
};

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

appThreadedView.setRobotIconName = function(iconName) {

	var message = {
		handler: "appView",
		method: "setRobotIconName",
		parameters: [
			iconName
		]
	}

	self.postMessage(message);
}



export { appThreadedView }