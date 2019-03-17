

var robotThreadedView = {};

robotThreadedView.renderRobot = function(robotState, cellSize) {

	var message = {
		handler: "robotView",
		method: "renderRobot",
		parameters: [
			robotState,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveNorth = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveNorth",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveEast = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveEast",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveSouth = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveSouth",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveWest = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveWest",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.turnLeft = function(nextDirection, duration) {

	var message = {
		handler: "robotView",
		method: "turnLeft",
		parameters: [
			nextDirection,
			duration
		]
	}

	self.postMessage(message);
}


export { robotThreadedView }