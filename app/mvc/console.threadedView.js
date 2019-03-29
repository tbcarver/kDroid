
var consoleThreadedView = {};

consoleThreadedView.render = function() {

	var message = {
		handler: "consoleView",
		method: "render",
		parameters: []
	}

	self.postMessage(message);
};

consoleThreadedView.log = function(message) {

	var message = {
		handler: "consoleView",
		method: "log",
		parameters: [
			message
		]
	}

	self.postMessage(message);
};


export { consoleThreadedView }