
import { appController } from "./app/app.controller.js";
import { appControllerWorld } from "./app/app.controller.world.js";
import { appControllerRobot } from "./app/app.controller.robot.js";
import { robotController } from "./app/mvc/robot.controller.js";
import { messageBoxController } from "./app/mvc/messageBox.controller.js";

/***
 * For use with a web worker as a worker imported script.
 * Must be webpacked to remove all ES6 imports.
 */

self.setWorldSize = appControllerWorld.setWorldStateSize.bind(appControllerWorld);
self.setRandomWorldSize = appControllerWorld.setRandomWorldStateSize.bind(appControllerWorld);
self.setWorldSpeed = appControllerWorld.setWorldStateSpeed.bind(appControllerWorld);
self.setTileColor = appControllerWorld.setTileBackgroundColor.bind(appControllerWorld);
self.setRandomTiles = appControllerWorld.setRandomTiles.bind(appControllerWorld);

self.setRobotIcon = appControllerRobot.setRobotStateIconName.bind(appControllerRobot);
self.setRandomRobotIcon = appControllerRobot.setRandomRobotStateIconName.bind(appControllerRobot);
self.setRobotDirection = appControllerRobot.setRobotStateDirection.bind(appControllerRobot);
self.setRandomRobotDirection = appControllerRobot.setRandomRobotStateDirection.bind(appControllerRobot);

self.loadWorld = appController.loadThreaded.bind(appController);

self.move = robotController.move.bind(robotController);
self.isFrontClear = robotController.isFrontClear.bind(robotController);
self.isFrontBlocked = robotController.isFrontBlocked.bind(robotController);
self.turnLeft = robotController.turnLeft.bind(robotController);

self.putDownTile = robotController.putDownTile.bind(robotController);
self.pickUpTile = robotController.pickUpTile.bind(robotController);
self.isOnTile = robotController.isOnTile.bind(robotController);
self.isNotOnTile = robotController.isNotOnTile.bind(robotController);

self.onerror = function(error) {

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

	messageBoxController.setMessage(error, true);
}