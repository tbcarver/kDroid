
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";

var messageBoxView = {};

messageBoxView.render = function(message, worldState) {

    var messageBoxElement = dom.createElement("div", { id: "messageBox" });
    var messageBoxWidth = worldState.cellSize * worldState.rowsCount * .3;
    var messageBoxHeight = worldState.cellSize * worldState.columnsCount * .3;

    if (messageBoxWidth > 300) {

        messageBoxWidth = 300;

    } else if (messageBoxWidth < 100) {

        messageBoxWidth = worldState.cellSize * worldState.rowsCount * .1;
    }

    if (messageBoxHeight > 300) {

        messageBoxHeight = 300;

    } else if (messageBoxHeight < 100) {

        messageBoxHeight = worldState.cellSize * worldState.columnsCount * .1;
    }

	messageBoxElement.style.width = messageBoxWidth + "px";
    messageBoxElement.style.height = messageBoxHeight + "px";
    messageBoxElement.style.padding = (messageBoxWidth * .1) + "px";
	messageBoxElement.style.fontSize = (messageBoxHeight * .4) + "px";
	messageBoxElement.style.color = worldState.backgroundColor;
	messageBoxElement.style.background = worldState.messageBoxBackgroundColor;
    messageBoxElement.style.visibility = "hidden";
    
    messageBoxElement.innerHTML = message;

    var worldPlaceholderElement = dom("#worldPlaceholder");
    worldPlaceholderElement.appendChild(messageBoxElement);
	
	var keyframes = [
		{transform: "scale(0)", visibility: "visible"},
		{transform: "scale(1)", visibility: "visible"}
	]

    var options = {
        duration: worldState.duration / 2,
        easing: "cubic-bezier(.38, 1.23, .71, 1.82)",
        fill: "forwards"
	}

    animationView.stackAnimation(messageBoxElement, keyframes, options);
};


export { messageBoxView }