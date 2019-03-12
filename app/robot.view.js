
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";
import { coreString } from "../lib/core/extensions/core-string.js";

var robotView = {};

robotView.renderRobot = function(rowIndex, columnIndex, direction, backgroundColor, cellSize) {

    if (!this.robotElement) {

        this.initializeRobotElement(backgroundColor, cellSize);
    }

    var top = cellSize * rowIndex;
    var left = cellSize * columnIndex;

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = cellSize + "px";
    this.robotElement.style.height = cellSize + "px";

    this.robotSvgElement.style.transform = directionRotations[direction];
}

robotView.initializeRobotElement = function(backgroundColor, cellSize) {

    this.robotElement = dom.createElement("div", { id: "kDroid" });
    this.robotElement.style.padding = (cellSize * .1) + "px";
    this.robotElement.style.fill = backgroundColor;

    this.robotElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"/></svg>';
    // this.robotElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>';

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