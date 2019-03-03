
import { dom } from "../lib/core/web/dom.js";
import { worldView } from "./world.view.js";

var robotView = {};

robotView.renderRobot = function(robot, world) {

    if (!this.robotElement) {

        this.initializeRobotElement();
    }

    var cellSize = worldView.calculateCellSize(world.rowsCount, world.columnsCount);
    var top = cellSize * robot.rowIndex;
    var left = cellSize * robot.columnIndex;   

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = cellSize + "px";
    this.robotElement.style.height = cellSize + "px";
}

robotView.initializeRobotElement = function() {
    var robotElementAttributes = {
        className: "kDroid",
        src: "assets/images/android.svg"
    };

    this.robotElement = dom.createElement("img", robotElementAttributes,);

    var worldTableElement = dom(".kDroidGrid");
    worldTableElement.appendChild(this.robotElement);
}


export { robotView }