
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";

var messageBoxView = {};

messageBoxView.render = function(message, isError, worldState) {

    var messageBoxElement = dom.createElement("div", { id: "messageBox" });
    var messageBoxWidth = worldState.cellSize * worldState.columnsCount * .75;
    var messageBoxHeight = worldState.cellSize * worldState.rowsCount * .3;

    if (messageBoxWidth > 450) {

        messageBoxWidth = 450;

    } else if (messageBoxWidth < 350) {

        messageBoxWidth = 350;
    }

    messageBoxElement.style.width = messageBoxWidth + "px";
    messageBoxElement.style.padding = "30px 20px";
    messageBoxElement.style.color = worldState.backgroundColor;
    messageBoxElement.style.backgroundColor = worldState.messageBoxBackgroundColor;
    messageBoxElement.style.visibility = "hidden";

    messageBoxElement.style.fontSize = "28px";

    if (messageBoxWidth < 400 || message.length > 40) {

        messageBoxElement.style.fontSize = "16px";
    }

    messageBoxElement.innerHTML = message;

    var messageBoxContainerElement = dom.createElement("div", { id: "messageBoxContainer" });
    messageBoxContainerElement.appendChild(messageBoxElement);

    var messageBoxCloseElement = dom.createElement("a", { className: "closeButton", href: "#" });
    messageBoxCloseElement.style.width = messageBoxElement.style.fontSize;
    messageBoxCloseElement.style.height = messageBoxElement.style.fontSize;
    messageBoxCloseElement.style.fill = worldState.backgroundColor;
    messageBoxCloseElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>';
    messageBoxElement.appendChild(messageBoxCloseElement);

    var worldPlaceholderElement = dom("#worldPlaceholder");
    worldPlaceholderElement.appendChild(messageBoxContainerElement);

    messageBoxCloseElement.addEventListener("click", function(event) {

        event.preventDefault();

        var keyframes = [
            { transform: "scale(1)", visibility: "visible" },
            { transform: "scale(0)", visibility: "visible" }
        ]

        var options = {
            duration: worldState.duration / 4,
            easing: "ease-out",
            fill: "forwards"
        }

        messageBoxContainerElement.animate(keyframes, options);
    });

    messageBoxContainerElement.style.minWidth = worldPlaceholderElement.offsetWidth + "px";
    messageBoxContainerElement.style.minHeight = worldPlaceholderElement.offsetHeight + "px";

    var keyframes = [
        { transform: "scale(0)", visibility: "visible" },
        { transform: "scale(1)", visibility: "visible" }
    ];

    if (isError) {

         keyframes[0].backgroundColor = messageBoxElement.style.backgroundColor;
         keyframes[1].backgroundColor = "#bb1414";
    }

    var options = {
        duration: worldState.duration / 2,
        easing: "cubic-bezier(.38, 1.23, .71, 1.82)",
        fill: "forwards"
    };

    animationView.stackAnimation(messageBoxElement, keyframes, options);
};


export { messageBoxView }