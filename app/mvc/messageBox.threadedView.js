

var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, isError, isForced, isToast) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			isError,
			isForced,
			isToast
		]
	}

	self.postMessage(message);
};


export { messageBoxThreadedView }