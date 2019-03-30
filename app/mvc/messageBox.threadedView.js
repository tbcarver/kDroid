

var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, isError, isForced) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			isError,
			isForced
		]
	}

	self.postMessage(message);
};


export { messageBoxThreadedView }