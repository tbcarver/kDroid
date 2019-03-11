
import { appController } from "./app/app.controller.js";
import { robotController } from "./app/robot.controller.js";

var appCommands = {};

appCommands.initialize = function() {

	window.setWorldSize = appController.setWorldStateSize;
	window.setRandomWorldSize = appController.setRandomWorldStateSize;
	window.setWorldSpeed = appController.setWorldStateSpeed;
	window.loadWorld = appController.load;
	window.move = robotController.move;
	window.turnLeft = robotController.turnLeft;
}

export { appCommands }