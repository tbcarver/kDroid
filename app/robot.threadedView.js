

var robotThreadedView = {};

robotThreadedView.renderRobot = function(robotState) {

	var message = {
		handler: "robotView",
		method: "renderRobot",
		parameters: [
			robotState
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveNorth = function(duration) {

	var message = {
		handler: "robotView",
		method: "moveNorth",
		parameters: [
			duration
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveEast = function(duration) {

	var message = {
		handler: "robotView",
		method: "moveEast",
		parameters: [
			duration
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveSouth = function(duration) {

	var message = {
		handler: "robotView",
		method: "moveSouth",
		parameters: [
			duration
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveWest = function(duration) {

	var message = {
		handler: "robotView",
		method: "moveWest",
		parameters: [
			duration
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