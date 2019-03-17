
var animationThreadedView = {};

animationThreadedView.cancelAnimating = function() {

	var message = {
		handler: "animationView",
		method: "cancelAnimating",
		parameters: []
	}

	self.postMessage(message);
};


export { animationThreadedView }