
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";
import { robotIcons } from "./robotIcons.js";
import { coreString } from "../lib/core/extensions/core-string.js";

var robotView = {};

robotView.renderRobot = function(robotState, cellSize) {

    if (!this.robotElement) {

        this.initializeRobotElement(robotState.backgroundColor, robotState.iconName, cellSize);
    }

    var top = cellSize * robotState.rowIndex;
    var left = cellSize * robotState.columnIndex;

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = cellSize + "px";
    this.robotElement.style.height = cellSize + "px";

    this.robotSvgElement.style.transform = directionRotations[robotState.direction];
}

robotView.initializeRobotElement = function(backgroundColor, robotIconName, cellSize) {

    this.robotElement = dom.createElement("div", { id: "kDroid" });
    this.robotElement.style.padding = (cellSize * .1) + "px";
    this.robotElement.style.fill = backgroundColor;

    this.robotElement.innerHTML = robotIcons[robotIconName];

    var worldTableElement = dom("#worldPlaceHolder");
    worldTableElement.appendChild(this.robotElement);

    this.robotSvgElement = this.robotElement.querySelector("svg");
}

robotView.moveNorth = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + -cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, -cellSize, 0);
}

robotView.moveEast = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, 0, cellSize);
}

robotView.moveSouth = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, cellSize, 0);
}

robotView.moveWest = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + -cellSize+ "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, 0, -cellSize);
}

function move(element, keyframes, duration, forwardsTopOffset, forwardsLeftOffset) {

    var options = {
        duration: duration,
        easing: "ease-in-out",
    }

    animationView.stackAnimation(element, keyframes, options, function() {

        element.style.top = coreString.addNumberInString(element.style.top, forwardsTopOffset);
        element.style.left = coreString.addNumberInString(element.style.left, forwardsLeftOffset);
    });
}

var directionRotations = {
    north: "rotate(-90deg)",
    east: "rotate(0deg)",
    south: "rotate(-270deg)",
    west: "rotate(-180deg)"
};

robotView.turnLeft = function(nextDirection, duration) {

    var keyframes = {
        transform: [
            "rotate(0deg)",
            "rotate(-90deg)"
        ]
    };

    var options = {
        duration: duration / 3,
        easing: "linear"
    }

    var robotSvgElement = this.robotSvgElement;
    var svgRotation = directionRotations[nextDirection];

    animationView.stackAnimation(this.robotElement, keyframes, options, function() {

        robotSvgElement.style.transform = svgRotation;
    });
}


export { robotView }