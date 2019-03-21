
import { animationView } from "./app/mvc/animation.view.js";
import { messageBoxView } from "./app/mvc/messageBox.view.js";
import { robotView } from "./app/mvc/robot.view.js";
import { worldView } from "./app/mvc/world.view.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js"
import { html } from "./lib/core/web/html.js"

var workerMessageHandlers = {};

workerMessageHandlers["animationView"] = animationView;
workerMessageHandlers["messageBoxView"] = messageBoxView;
workerMessageHandlers["robotView"] = robotView;
workerMessageHandlers["worldView"] = worldView;

window.runKDroidScript = function(scriptPath) {

	console.log("Running kDroidScript: " + scriptPath);

	var kDroidWorker = new Worker(scriptPath);

	kDroidWorker.onmessage = handleWorkerMessage;
}

window.addEventListener("error", function(event) {

	var error = event.error;
	var message = error.message;

	if (error.stack) {

		var stack = html.toHtml(error.stack);

		message = message + "<hr><div style='text-align:left;'>" + stack + "</div>";

	}

	messageBoxController.setMessage(message, true);
});

function handleWorkerMessage(event) {

	var message = event.data;
	var handler = workerMessageHandlers[message.handler];

	if (!handler) {

		throw new Error("Unknown worker message handler received. message: " + message);
	}

	if (!handler[message.method]) {

		throw new Error("Unknown worker message method received. message: " + message);
	}

	handler[message.method].apply(handler, message.parameters);
}