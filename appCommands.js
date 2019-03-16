
import { appController } from "./app/app.controller.js";
import { robotController } from "./app/robot.controller.js";

var appCommands = {};

appCommands.initialize = function() {

	window.setWorldSize = appController.setWorldStateSize.bind(appController);
	window.setRandomWorldSize = appController.setRandomWorldStateSize.bind(appController);
	window.setWorldSpeed = appController.setWorldStateSpeed.bind(appController);
	window.setRobotIcon = appController.setRobotStateIconName.bind(appController);
	window.setRandomRobotIcon = appController.setRandomRobotStateIconName.bind(appController);
	window.setRobotDirection = appController.setRobotStateDirection.bind(appController);
	window.setRandomRobotDirection = appController.setRandomRobotStateDirection.bind(appController);
	window.setTileColor = appController.setTileBackgroundColor.bind(appController);
	window.loadWorld = appController.load.bind(appController);

	window.move = robotController.move.bind(robotController);
	window.isFrontClear = robotController.isFrontClear.bind(robotController);
	window.isFrontBlocked = robotController.isFrontBlocked.bind(robotController);
	window.turnLeft = robotController.turnLeft.bind(robotController);

	window.putDownTile = robotController.putDownTile.bind(robotController);
	window.pickUpTile = robotController.pickUpTile.bind(robotController);
	window.isOnTile = robotController.isOnTile.bind(robotController);
	window.isNotOnTile = robotController.isNotOnTile.bind(robotController);
}

export { appCommands }