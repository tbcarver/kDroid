
import { messageBoxView } from "./messageBox.view.js";
import { appState } from "./appState.js";

var messageBoxController = {};

messageBoxController.setMessage = function(message) {

	messageBoxView.render(message, appState.world);
};


export { messageBoxController }