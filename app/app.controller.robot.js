
import { robotIcons } from "./robotIcons.js";
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"

var robotState = appState.robot;

var appControllerRobot = {};

appControllerRobot.setRobotStateIconName = function(iconName) {

	if (iconName) {

		robotState.iconName = iconName;
	}
}

appControllerRobot.setRandomRobotStateIconName = function(iconName) {

	if (!iconName) {

		var keys = Object.keys(robotIcons);
		var randomIndex = coreMath.randomInteger(0, keys.length - 1);
		iconName = keys[randomIndex];
	}

	robotState.iconName = iconName;
}

appControllerRobot.setRobotStateDirection = function(direction) {

	if (direction) {

		robotState.direction = direction;
	}
}

var directions = [
	"north",
	"east",
	"south",
	"west"
]

appControllerRobot.setRandomRobotStateDirection = function(direction) {

	if (!direction) {

		var randomIndex = coreMath.randomInteger(0, directions.length - 1);
		direction = directions[randomIndex];
	}

	robotState.direction = direction;
}


export { appControllerRobot }