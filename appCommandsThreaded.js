
import { appController } from "./app/app.controller.js";
import { robotController } from "./app/robot.controller.js";

/***
 * For use with a web worker as in imported script.
 * Must be webpacked to remove all ES6 imports.
 */

self.setWorldSize = appController.setWorldStateSize.bind(appController);
self.setRandomWorldSize = appController.setRandomWorldStateSize.bind(appController);
self.setWorldSpeed = appController.setWorldStateSpeed.bind(appController);
self.setRobotIcon = appController.setRobotStateIconName.bind(appController);
self.setRandomRobotIcon = appController.setRandomRobotStateIconName.bind(appController);
self.setRobotDirection = appController.setRobotStateDirection.bind(appController);
self.setRandomRobotDirection = appController.setRandomRobotStateDirection.bind(appController);
self.setTileColor = appController.setTileBackgroundColor.bind(appController);
self.loadWorld = appController.loadThreaded.bind(appController);

self.move = robotController.move.bind(robotController);
self.isFrontClear = robotController.isFrontClear.bind(robotController);
self.isFrontBlocked = robotController.isFrontBlocked.bind(robotController);
self.turnLeft = robotController.turnLeft.bind(robotController);

self.putDownTile = robotController.putDownTile.bind(robotController);
self.pickUpTile = robotController.pickUpTile.bind(robotController);
self.isOnTile = robotController.isOnTile.bind(robotController);
self.isNotOnTile = robotController.isNotOnTile.bind(robotController);