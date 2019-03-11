
import { appController } from "./app/app.controller.js";
import { appCommands } from "./appCommands.js";
import { test } from "./test.js";
// import { messageBoxController } from "./app/components/message-box.controller.js"

window.addEventListener("DOMContentLoaded", function(event) {

	appCommands.initialize();
	
	test();
});

// window.addEventListener("error", function(event) {

// 	var error = event.error;
// 	var message = error.message;

// 	if (error.stack) {

// 		message = message + "<hr><div class='text-left'>" + error.stack + "</div>";

// 	}

// 	messageBoxController.message(message, true);
// });
