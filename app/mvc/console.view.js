
import { dom } from "../../lib/core/web/dom.js";
import { viewState } from "../viewState.js";

var consoleView = {};

consoleView.render = function() {

	var consoleElement = dom.createElement("div", { id: "console" });
	consoleElement.style.width = viewState.console.width + "px";
	consoleElement.style.height = viewState.console.height + "px";
	consoleElement.style.border = viewState.console.borderWidth + "px solid " + viewState.world.borderBackgroundColor;

	var consolePlaceholderElement = dom("#consolePlaceholder");
	consolePlaceholderElement.appendChild(consoleElement);
};


export { consoleView }