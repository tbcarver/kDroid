
import { dom } from "../../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";
import { viewState } from "../viewState.js";

var consoleView = {};
var consoleElement;

consoleView.render = function() {

	consoleElement = dom.createElement("div", { id: "console" });
	consoleElement.style.width = viewState.console.width + "px";
	consoleElement.style.height = viewState.console.height + "px";
	consoleElement.style.border = viewState.console.borderWidth + "px solid " + viewState.world.borderBackgroundColor;

	var consolePlaceholderElement = dom("#consolePlaceholder");
	consolePlaceholderElement.appendChild(consoleElement);
};

consoleView.log = function(message, color) {

	var messageColor = viewState.robot.backgroundColor;

	if (color) {

		messageColor = color;
	}

	var lineElement = dom.createElement("div", { className: "consoleLine" });
	lineElement.style.color = messageColor;
	lineElement.textContent = message;
		
	animationView.stackNullAnimation(lineElement, function() {

		var shouldScroll = isScrolledToBottom();

		consoleElement.appendChild(lineElement);
	
		if (shouldScroll) {
			
			scrollToBottom();
		}

		console.log(lineElement.textContent);
	});
}

consoleView.logInternal = function(message, isError) {

    if (isError) {

        this.log("** " + message, viewState.errorColor);

    } else {

        this.log("* " + message, viewState.console.internalColor);
    }
};

function scrollToBottom() {

	if (consoleElement.scrollHeight - consoleElement.clientHeight) {

		consoleElement.scrollTop = consoleElement.scrollHeight - consoleElement.clientHeight;
	}
}

function isScrolledToBottom() {

	return consoleElement.scrollTop === consoleElement.scrollHeight - consoleElement.clientHeight;
}


export { consoleView }