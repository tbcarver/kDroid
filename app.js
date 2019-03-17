
import { appCommands } from "./appCommands.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js"
import { html } from "./lib/core/web/html.js"
import { test } from "./test/test.js";

window.addEventListener("DOMContentLoaded", function(event) {

	appCommands.initialize();
	
	test();

	messageBoxController.setMessage("Your program has completed!");
});

window.addEventListener("error", function(event) {

	var error = event.error;
	var message = error.message;

	if (error.stack) {

		var stack = html.toHtml(error.stack);

		message = message + "<hr><div style='text-align:left;'>" + stack + "</div>";

	}

	messageBoxController.setMessage(message, true);
});
