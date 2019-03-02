
import { worldController } from "./app/world/world.controller.js";
import { messageBoxController } from "./app/components/message-box.controller.js"

window.addEventListener("DOMContentLoaded", function(event) {

	messageBoxController.initialize(function() {

		worldController.initialize(function() {

			worldController.load();
		});
	});
});

window.addEventListener("error", function(event) {

	var error = event.error;
	var message = error.message;

	if (error.stack) {

		message = message + "<hr><div class='text-left'>" + error.stack + "</div>";

	}

	messageBoxController.message(message, true);
});
