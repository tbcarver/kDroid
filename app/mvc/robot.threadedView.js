

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

robotThreadedView.setRobotBackgroundColor = function(backgroundColor, isError) {

	var message = {
		handler: "robotView",
		method: "setRobotBackgroundColor",
		parameters: [
			backgroundColor,
			isError
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveNorth = function() {

	var message = {
		handler: "robotView",
		method: "moveNorth",
		parameters: []
	}

	self.postMessage(message);
}

robotThreadedView.moveEast = function() {

	var message = {
		handler: "robotView",
		method: "moveEast",
		parameters: []
	}

	self.postMessage(message);
}

robotThreadedView.moveSouth = function() {

	var message = {
		handler: "robotView",
		method: "moveSouth",
		parameters: []
	}

	self.postMessage(message);
}

robotThreadedView.moveWest = function() {

	var message = {
		handler: "robotView",
		method: "moveWest",
		parameters: []
	}

	self.postMessage(message);
}

robotThreadedView.turnRight = function(nextDirection) {

	var message = {
		handler: "robotView",
		method: "turnRight",
		parameters: [
			nextDirection
		]
	}

	self.postMessage(message);
}


export { robotThreadedView }