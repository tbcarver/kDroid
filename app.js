
import { appController } from "./app/app.controller.js";
import { appControllerWorld } from "./app/app.controller.world.js";
import { appControllerRobot } from "./app/app.controller.robot.js";
import { robotController } from "./app/mvc/robot.controller.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js"
import { consoleController } from "./app/mvc/console.controller.js"
import { html } from "./lib/core/web/html.js"
import { RobotError } from "./app/robotError.js";

var globalScope = window;

globalScope.setWorldSize = appControllerWorld.setWorldStateSize.bind(appControllerWorld);
globalScope.setRandomWorldSize = appControllerWorld.setRandomWorldStateSize.bind(appControllerWorld);
globalScope.setWorldSpeed = appControllerWorld.setWorldStateSpeed.bind(appControllerWorld);
globalScope.setWalls = appControllerWorld.setWalls.bind(appControllerWorld);
globalScope.setTileColor = appControllerWorld.setTileBackgroundColor.bind(appControllerWorld);
globalScope.setTiles = appControllerWorld.setTiles.bind(appControllerWorld);
globalScope.setRandomTiles = appControllerWorld.setRandomTiles.bind(appControllerWorld);
globalScope.setTile = appControllerWorld.setTile.bind(appControllerWorld);

globalScope.setRobotIcon = appControllerRobot.setRobotStateIconName.bind(appControllerRobot);
globalScope.setRandomRobotIcon = appControllerRobot.setRandomRobotStateIconName.bind(appControllerRobot);
globalScope.setRobotLocation = appControllerRobot.setRobotLocation.bind(appControllerRobot);
globalScope.setRandomRobotLocation = appControllerRobot.setRandomRobotLocation.bind(appControllerRobot);
globalScope.setRobotDirection = appControllerRobot.setRobotStateDirection.bind(appControllerRobot);
globalScope.setRandomRobotDirection = appControllerRobot.setRandomRobotStateDirection.bind(appControllerRobot);

globalScope.loadWorld = appController.load.bind(appController);

globalScope.move = robotController.move.bind(robotController);
globalScope.isFrontClear = robotController.isFrontClear.bind(robotController);
globalScope.isFrontBlocked = robotController.isFrontBlocked.bind(robotController);
globalScope.turnLeft = robotController.turnLeft.bind(robotController);

globalScope.enableCompass = function() {

	globalScope.isFacingNorth = robotController.isFacingNorth.bind(robotController);	
	globalScope.isNotFacingNorth = robotController.isNotFacingNorth.bind(robotController);	
	globalScope.isFacingEast = robotController.isFacingEast.bind(robotController);
	globalScope.isNotFacingEast = robotController.isNotFacingEast.bind(robotController);
	globalScope.isFacingSouth = robotController.isFacingSouth.bind(robotController);
	globalScope.isNotFacingSouth = robotController.isNotFacingSouth.bind(robotController);
	globalScope.isFacingWest = robotController.isFacingWest.bind(robotController);	
	globalScope.isNotFacingWest = robotController.isNotFacingWest.bind(robotController);	
}

globalScope.putDownTile = robotController.putDownTile.bind(robotController);
globalScope.pickUpTile = robotController.pickUpTile.bind(robotController);
globalScope.isOnTile = robotController.isOnTile.bind(robotController);
globalScope.isNotOnTile = robotController.isNotOnTile.bind(robotController);

globalScope.log = consoleController.log.bind(consoleController);

globalScope.addEventListener("error", function(event) {

	var error = event.error;
	var message = error.message;

	if (!(error instanceof RobotError) && error.stack) {

		var stack = html.toHtml(error.stack);

		message = message + "<hr><div style='text-align:left;'>" + stack + "</div>";

	}

	messageBoxController.setMessage(message, true);
});
