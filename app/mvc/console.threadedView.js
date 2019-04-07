
var consoleThreadedView = {};

consoleThreadedView.render = function() {

	var message = {
		handler: "consoleView",
		method: "render",
		parameters: []
	}

	self.postMessage(message);
};

consoleThreadedView.log = function(message, color) {

	var message = {
		handler: "consoleView",
		method: "log",
		parameters: [
			message,
			color
		]
	}

	self.postMessage(message);
};

consoleThreadedView.logInternal = function(message, color, isError) {

	var message = {
		handler: "consoleView",
		method: "logInternal",
		parameters: [
			message,
			color,
			isError
		]
	}

	self.postMessage(message);
};


export { consoleThreadedView }