

var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, color, isError, isForced, isToast) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			color,
			isError,
			isForced,
			isToast
		]
	}

	self.postMessage(message);
};


export { messageBoxThreadedView }