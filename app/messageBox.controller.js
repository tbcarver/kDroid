
import { messageBoxView } from "./messageBox.view.js";

var messageBoxController = {};

messageBoxController.setMessage = function(message) {

	messageBoxView.render(message);
};


export { messageBoxController }