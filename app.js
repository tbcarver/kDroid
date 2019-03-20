
import { appCommands } from "./appCommands.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js"
import { html } from "./lib/core/web/html.js"
import { RobotError } from "./app/robotError.js";

appCommands.initialize();

window.addEventListener("error", function(event) {

	debugger;
	var error = event.error;
	var message = error.message;

	if (!(error instanceof RobotError) && error.stack) {

		var stack = html.toHtml(error.stack);

		message = message + "<hr><div style='text-align:left;'>" + stack + "</div>";

	}

	messageBoxController.setMessage(message, true);
});
