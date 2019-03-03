
import { worldController } from "./app/world.controller.js";
// import { messageBoxController } from "./app/components/message-box.controller.js"

window.addEventListener("DOMContentLoaded", function(event) {

	var worldOptions = {
		rowsCount: 5,
		columnsCount: 10
	}

	worldController.load(worldOptions);
});

// window.addEventListener("error", function(event) {

// 	var error = event.error;
// 	var message = error.message;

// 	if (error.stack) {

// 		message = message + "<hr><div class='text-left'>" + error.stack + "</div>";

// 	}

// 	messageBoxController.message(message, true);
// });
