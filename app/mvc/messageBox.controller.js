
import { viewFactory } from "../viewFactory.js";
import { consoleController } from "./console.controller.js";

var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

    messageBoxView = viewFactory.getView("messageBoxView");
};

messageBoxController.setMessage = function(message, isError) {

	consoleController.logInternal(message, isError);

	messageBoxView.render(message, isError, false);
};

messageBoxController.forceErrorMessage = function(message) {

	messageBoxView.render(message, true, true);
};


export { messageBoxController }