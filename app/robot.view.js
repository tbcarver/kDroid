
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";
import { coreString } from "../lib/core/extensions/core-string.js";

var robotView = {};

robotView.renderRobot = function(robot, world) {

    if (!this.robotElement) {

        this.initializeRobotElement();
    }

    var top = world.cellSize * robot.rowIndex;
    var left = world.cellSize * robot.columnIndex;

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = world.cellSize + "px";
    this.robotElement.style.height = world.cellSize + "px";

    this.robotSvgElement.style.transform = directionRotations[robot.direction];
}

robotView.initializeRobotElement = function() {

    this.robotElement = dom.createElement("div", { id: "kDroid" });
    this.robotElement.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M89.6 204.5v115.8c0 15.4-12.1 27.7-27.5 27.7-15.3 0-30.1-12.4-30.1-27.7V204.5c0-15.1 14.8-27.5 30.1-27.5 15.1 0 27.5 12.4 27.5 27.5zm10.8 157c0 16.4 13.2 29.6 29.6 29.6h19.9l.3 61.1c0 36.9 55.2 36.6 55.2 0v-61.1h37.2v61.1c0 36.7 55.5 36.8 55.5 0v-61.1h20.2c16.2 0 29.4-13.2 29.4-29.6V182.1H100.4v179.4zm248-189.1H99.3c0-42.8 25.6-80 63.6-99.4l-19.1-35.3c-2.8-4.9 4.3-8 6.7-3.8l19.4 35.6c34.9-15.5 75-14.7 108.3 0L297.5 34c2.5-4.3 9.5-1.1 6.7 3.8L285.1 73c37.7 19.4 63.3 56.6 63.3 99.4zm-170.7-55.5c0-5.7-4.6-10.5-10.5-10.5-5.7 0-10.2 4.8-10.2 10.5s4.6 10.5 10.2 10.5c5.9 0 10.5-4.8 10.5-10.5zm113.4 0c0-5.7-4.6-10.5-10.2-10.5-5.9 0-10.5 4.8-10.5 10.5s4.6 10.5 10.5 10.5c5.6 0 10.2-4.8 10.2-10.5zm94.8 60.1c-15.1 0-27.5 12.1-27.5 27.5v115.8c0 15.4 12.4 27.7 27.5 27.7 15.4 0 30.1-12.4 30.1-27.7V204.5c0-15.4-14.8-27.5-30.1-27.5z'/></svg>";

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