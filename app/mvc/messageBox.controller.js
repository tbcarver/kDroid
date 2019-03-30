
import { viewFactory } from "../viewFactory.js";

var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

    messageBoxView = viewFactory.getView("messageBoxView");

};

messageBoxController.setMessage = function(message, isError) {

	messageBoxView.render(message, isError, false);
};

messageBoxController.forceErrorMessage = function(message) {

	messageBoxView.render(message, true, true);
};


export { messageBoxController }