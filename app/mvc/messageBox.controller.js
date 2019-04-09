
import { viewFactory } from "../viewFactory.js";

var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

	messageBoxView = viewFactory.getView("messageBoxView");
};

messageBoxController.setMessage = function(message, color, isError) {

	if (messageBoxView) {

		messageBoxView.render(message, color, isError, false, false);
	}
};

messageBoxController.setToast = function(message, color, isError) {

	if (messageBoxView) {

		messageBoxView.render(message, color, isError, false, true);
	}
};

messageBoxController.forceErrorMessage = function(message) {

	if (messageBoxView) {

		messageBoxView.render(message, null, true, true);
	}
};


export { messageBoxController }