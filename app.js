
import { worldController } from "./app/world.controller.js";
import { robotController } from "./app/robot.controller.js";
import { test } from "./test.js";
// import { messageBoxController } from "./app/components/message-box.controller.js"

window.addEventListener("DOMContentLoaded", function(event) {

	var worldOptions = {
		rowsCount: 3,
		columnsCount: 3
	}

	worldController.load(worldOptions);
	robotController.load();
	
	test(robotController);
});

// window.addEventListener("error", function(event) {

// 	var error = event.error;
// 	var message = error.message;

// 	if (error.stack) {

// 		message = message + "<hr><div class='text-left'>" + error.stack + "</div>";

// 	}

// 	messageBoxController.message(message, true);
// });
