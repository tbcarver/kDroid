
import { messageBoxView } from "./messageBox.view.js";
import { appState } from "./appState.js";

var messageBoxController = {};

messageBoxController.setMessage = function(message, isError) {

	messageBoxView.render(message, isError, appState.world);
};


export { messageBoxController }