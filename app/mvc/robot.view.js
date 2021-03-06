
import { dom } from "../../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";
import { viewState } from "../viewState.js";
import { robotIcons } from "../robotIcons.js";
import { coreString } from "../../lib/core/extensions/core-string.js";

var robotView = {};

robotView.renderRobot = function(robotState) {
    
    this.robotElement = dom.createElement("div", { id: "kDroid" });
    this.robotElement.style.padding = (viewState.world.cellSize * .1) + "px";
    this.robotElement.style.fill = viewState.robot.backgroundColor;

    this.robotElement.innerHTML = robotIcons[viewState.robot.iconName];

    var worldPlaceholderElement = dom("#worldPlaceholder");
    worldPlaceholderElement.appendChild(this.robotElement);

    this.robotSvgElement = this.robotElement.querySelector("svg");

    var top = (viewState.world.cellSize * robotState.rowIndex) + (viewState.world.wallWidth / 2);
    var left = (viewState.world.cellSize * robotState.columnIndex) + (viewState.world.wallWidth / 2);

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = viewState.world.cellSize + "px";
    this.robotElement.style.height = viewState.world.cellSize + "px";

    this.robotSvgElement.style.transform = rightDirectionRotations[robotState.direction];
}

robotView.setRobotBackgroundColor = function(backgroundColor, isError) {

    if (isError) {

        backgroundColor = viewState.errorColor;
    }    
		
	animationView.stackNullAnimation(this.robotElement, function() {

        this.robotElement.style.fill = backgroundColor;

	}.bind(this));
}

robotView.moveNorth = function() {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + -viewState.world.cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, -viewState.world.cellSize, 0);
}

robotView.moveEast = function() {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + viewState.world.cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, 0, viewState.world.cellSize);
}

robotView.moveSouth = function() {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + viewState.world.cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, viewState.world.cellSize, 0);
}

robotView.moveWest = function() {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + -viewState.world.cellSize+ "px)",
        ]
    };

    move(this.robotElement, keyframes, 0, -viewState.world.cellSize);
}

function move(element, keyframes, forwardsTopOffset, forwardsLeftOffset) {

    var options = {
        duration: viewState.animationDuration,
        easing: "ease-in-out",
    }

    animationView.stackAnimation(element, keyframes, options, function() {

        element.style.top = coreString.addNumberInString(element.style.top, forwardsTopOffset);
        element.style.left = coreString.addNumberInString(element.style.left, forwardsLeftOffset);
    });
}

var rightDirectionRotations = {
    north: "rotate(270deg)",
    east: "rotate(0deg)",
    south: "rotate(90deg)",
    west: "rotate(180deg)"
};

robotView.turnRight = function(nextDirection) {

    var keyframes = {
        transform: [
            "rotate(0deg)",
            "rotate(90deg)"
        ]
    };

    var options = {
        duration: viewState.animationDuration / 2.5,
        easing: "linear"
    }

    var robotSvgElement = this.robotSvgElement;
    var svgRotation = rightDirectionRotations[nextDirection];

    animationView.stackAnimation(this.robotElement, keyframes, options, function() {

        robotSvgElement.style.transform = svgRotation;
    });
}


export { robotView }