
import { appCommands } from "./appCommands.js";
import { appState } from "./app/appState.js";
import { messageBoxController } from "./app/messageBox.controller.js"
import { html } from "./lib/core/web/html.js"
import { test } from "./test.js";

window.addEventListener("DOMContentLoaded", function(event) {

	appCommands.initialize();
	
	test();

	console.log(appState);

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
