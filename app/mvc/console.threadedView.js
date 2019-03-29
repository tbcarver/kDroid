
var consoleThreadedView = {};

consoleThreadedView.render = function() {

	var message = {
		handler: "consoleView",
		method: "render",
		parameters: []
	}

	self.postMessage(message);
};


export { consoleThreadedView }