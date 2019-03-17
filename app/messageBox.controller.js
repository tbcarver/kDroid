
import { viewFactory } from "./viewFactory.js";
import { appState } from "./appState.js";

var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

    messageBoxView = viewFactory.getView("messageBoxView");

};

messageBoxController.setMessage = function(message, isError) {

	messageBoxView.render(message, isError, false, appState.world);
};

messageBoxController.forceErrorMessage = function(message) {

	messageBoxView.render(message, true, true, appState.world);
};


export { messageBoxController }