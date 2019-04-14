
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

    color = color ? color : viewState.robot.backgroundColor;

	var lineElement = dom.createElement("div", { className: "consoleLine" });
	lineElement.style.color = color;
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

consoleView.logInternal = function(message, color, isError) {

    if (isError) {

        this.log("** " + message, viewState.errorColor);

    } else {

		color = color ? color : viewState.console.internalColor;

        this.log("* " + message, color);
    }
};

consoleView.logQuestion = function(message) {

	this.log("> " + message, viewState.console.questionColor);
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