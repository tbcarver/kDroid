
import { appController } from "./app/app.controller.js";
import { appControllerWorld } from "./app/app.controller.world.js";
import { appControllerRobot } from "./app/app.controller.robot.js";
import { robotController } from "./app/mvc/robot.controller.js";

var appCommands = {};

appCommands.initialize = function() {

	window.setWorldSize = appControllerWorld.setWorldStateSize.bind(appControllerWorld);
	window.setRandomWorldSize = appControllerWorld.setRandomWorldStateSize.bind(appControllerWorld);
	window.setWorldSpeed = appControllerWorld.setWorldStateSpeed.bind(appControllerWorld);
	window.setWalls = appControllerWorld.setWalls.bind(appControllerWorld);
	window.setTileColor = appControllerWorld.setTileBackgroundColor.bind(appControllerWorld);
	window.setRandomTiles = appControllerWorld.setRandomTiles.bind(appControllerWorld);
	
	window.setRobotIcon = appControllerRobot.setRobotStateIconName.bind(appControllerRobot);
	window.setRandomRobotIcon = appControllerRobot.setRandomRobotStateIconName.bind(appControllerRobot);
	window.setRobotDirection = appControllerRobot.setRobotStateDirection.bind(appControllerRobot);
	window.setRandomRobotDirection = appControllerRobot.setRandomRobotStateDirection.bind(appControllerRobot);
	
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