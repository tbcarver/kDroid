

var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, isError, worldState) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			isError,
			worldState
		]
	}

	self.postMessage(message);
};


export { messageBoxThreadedView }