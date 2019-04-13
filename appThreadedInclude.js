
import { appController } from "./app/app.controller.js";
import { appControllerWorld } from "./app/app.controller.world.js";
import { appControllerRobot } from "./app/app.controller.robot.js";
import { robotController } from "./app/mvc/robot.controller.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js";
import { consoleController } from "./app/mvc/console.controller.js"
import { viewFactory } from "./app/viewFactory.js";

/***
 * For use within a web worker using self.importScripts().
 * ES6 imports are not supported in web workers, this file must be bundled. (i.e. webpack)
 */

viewFactory.loadThreaded();

var globalScope = self;

globalScope.kDroidApp = {};

globalScope.kDroidApp.getAppState = appController.getAppState.bind(appController);
globalScope.kDroidApp.addEventListener = appController.addEventListener.bind(appController);

globalScope.getWorldSize = appControllerWorld.getWorldSize.bind(appControllerWorld);
globalScope.setWorldSize = appControllerWorld.setWorldSize.bind(appControllerWorld);
globalScope.setRandomWorldSize = appControllerWorld.setRandomWorldSize.bind(appControllerWorld);
globalScope.setRandomOddWorldSize = appControllerWorld.setRandomOddWorldSize.bind(appControllerWorld);
globalScope.setRandomEvenWorldSize = appControllerWorld.setRandomEvenWorldSize.bind(appControllerWorld);
globalScope.setWorldSpeed = appControllerWorld.setWorldSpeed.bind(appControllerWorld);
globalScope.setWalls = appControllerWorld.setWalls.bind(appControllerWorld);
globalScope.getTileColor = appControllerWorld.getTileBackgroundColor.bind(appControllerWorld);
globalScope.setTileColor = appControllerWorld.setTileBackgroundColor.bind(appControllerWorld);
globalScope.setTiles = appControllerWorld.setTiles.bind(appControllerWorld);
globalScope.setRandomTiles = appControllerWorld.setRandomTiles.bind(appControllerWorld);
globalScope.setTile = appControllerWorld.setTile.bind(appControllerWorld);

globalScope.setRobotIcon = appControllerRobot.setRobotIconName.bind(appControllerRobot);
globalScope.setRandomRobotIcon = appControllerRobot.setRandomRobotIconName.bind(appControllerRobot);
globalScope.setRobotLocation = appControllerRobot.setRobotLocation.bind(appControllerRobot);
globalScope.setRandomRobotLocation = appControllerRobot.setRandomRobotLocation.bind(appControllerRobot);
globalScope.setRobotDirection = appControllerRobot.setRobotDirection.bind(appControllerRobot);
globalScope.setRandomRobotDirection = appControllerRobot.setRandomRobotDirection.bind(appControllerRobot);

globalScope.loadWorld = appController.load.bind(appController);

globalScope.move = robotController.move.bind(robotController);
globalScope.isFrontClear = robotController.isFrontClear.bind(robotController);
globalScope.isFrontBlocked = robotController.isFrontBlocked.bind(robotController);
globalScope.turnRight = robotController.turnRight.bind(robotController);

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

globalScope.setMessage = messageBoxController.setMessage.bind(messageBoxController);
globalScope.setToast = messageBoxController.setToast.bind(messageBoxController);
globalScope.log = consoleController.log.bind(consoleController);
globalScope.logInternal = consoleController.logInternal.bind(consoleController);
globalScope.logQuestion = consoleController.logQuestion.bind(consoleController);
globalScope.logAnswer = consoleController.logAnswer.bind(consoleController);

globalScope.onerror = function(error) {

	// NOTE: Thrown errors from worker threads do not have a stack
	//  and have a formatted message starting with Uncaught:

	console.log(error);

	if (error && error.length > 1) {

		error = error.replace(/Uncaught[^:]+:\s+/gi, "");

		error = error[0].toUpperCase() + error.substring(1);

		if (error[error.length - 1] !== ".") {

			error = error + ".";
		}
	}

	robotController.setRobotBackgroundColor(null, true);
	consoleController.logInternal(error, null, true);
	messageBoxController.setToast(error, null, true);
}