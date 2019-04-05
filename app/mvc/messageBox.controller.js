
import { viewFactory } from "../viewFactory.js";

var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

	messageBoxView = viewFactory.getView("messageBoxView");
};

messageBoxController.setMessage = function(message, isError) {

	if (messageBoxView) {

		messageBoxView.render(message, isError, false);
	}
};

messageBoxController.setToast = function(message) {

	if (messageBoxView) {

		messageBoxView.render(message, false, false, true);
	}
};

messageBoxController.forceErrorMessage = function(message) {

	if (messageBoxView) {

		messageBoxView.render(message, true, true);
	}
};


export { messageBoxController }