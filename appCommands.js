
import { appController } from "./app/app.controller.js";
import { robotController } from "./app/robot.controller.js";

var appCommands = {};

appCommands.initialize = function() {

	window.setWorldSize = appController.setWorldStateSize;
	window.setRandomWorldSize = appController.setRandomWorldStateSize;
	window.setWorldSpeed = appController.setWorldStateSpeed;
	window.setRobotIcon = appController.setRobotStateIconName;
	window.setRandomRobotIcon = appController.setRandomRobotStateIconName;
	window.setRobotDirection = appController.setRobotStateDirection;
	window.setRandomRobotDirection = appController.setRandomRobotStateDirection;
	window.setTileColor = appController.setTileBackgroundColor;
	window.loadWorld = appController.load;

	window.move = robotController.move;
	window.isFrontClear = robotController.isFrontClear;
	window.isFrontBlocked = robotController.isFrontBlocked;
	window.turnLeft = robotController.turnLeft;

	window.putDownTile = robotController.putDownTile;
	window.pickUpTile = robotController.pickUpTile;
	window.isOnTile = robotController.isOnTile;
	window.isNotOnTile = robotController.isNotOnTile;
}

export { appCommands }