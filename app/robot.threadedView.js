

var robotThreadedView = {};

robotThreadedView.renderRobot = function(robotState, cellSize) {

	var message = {
		view: "robotView",
		action: "renderRobot",
		parameters: {
			robotState: robotState,
			cellSize: cellSize
		}
	}

	postMessage(message);
}

robotThreadedView.moveNorth = function(duration, cellSize) {

	var message = {
		view: "robotView",
		action: "moveNorth",
		parameters: {
			duration: duration,
			cellSize: cellSize
		}
	}

	postMessage(message);
}

robotThreadedView.moveEast = function(duration, cellSize) {

	var message = {
		view: "robotView",
		action: "moveEast",
		parameters: {
			duration: duration,
			cellSize: cellSize
		}
	}

	postMessage(message);
}

robotThreadedView.moveSouth = function(duration, cellSize) {

	var message = {
		view: "robotView",
		action: "moveSouth",
		parameters: {
			duration: duration,
			cellSize: cellSize
		}
	}

	postMessage(message);
}

robotThreadedView.moveWest = function(duration, cellSize) {

	var message = {
		view: "robotView",
		action: "moveWest",
		parameters: {
			duration: duration,
			cellSize: cellSize
		}
	}

	postMessage(message);
}

robotThreadedView.turnLeft = function(nextDirection, duration) {

	var message = {
		view: "robotView",
		action: "turnLeft",
		parameters: {
			nextDirection: nextDirection,
			duration: duration
		}
	}

	postMessage(message);
}


export { robotThreadedView }