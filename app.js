
import { appCommands } from "./appCommands.js";
import { messageBoxController } from "./app/messageBox.controller.js"
import { test } from "./test.js";

window.addEventListener("DOMContentLoaded", function(event) {

	appCommands.initialize();
	
	test();

	messageBoxController.setMessage("You did it!");
});

window.addEventListener("error", function(event) {

	var error = event.error;
	var message = error.message;

	if (error.stack) {

		message = message + "<hr><div class='text-left'>" + error.stack + "</div>";

	}

	messageBoxController.setMessage(message, true);
});
