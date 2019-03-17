

var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, isError, isForced, worldState) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			isError,
			isForced,
			worldState
		]
	}

	self.postMessage(message);
};


export { messageBoxThreadedView }