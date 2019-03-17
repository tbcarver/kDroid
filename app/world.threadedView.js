

var worldThreadedView = {};

worldThreadedView.renderGrid = function(worldState) {

	var message = {
		handler: "worldView",
		method: "renderGrid",
		parameters: [
			worldState
		]
	}

	self.postMessage(message);
}


worldThreadedView.putDownTile = function(tileCount, robotState, worldState) {

	var message = {
		handler: "worldView",
		method: "putDownTile",
		parameters: [
			tileCount,
			robotState,
			worldState
		]
	}

	self.postMessage(message);
}


worldThreadedView.pickUpTile = function(previousTileCount, robotState, worldState) {

	var message = {
		handler: "worldView",
		method: "pickUpTile",
		parameters: [
			previousTileCount,
			robotState,
			worldState
		]
	}

	self.postMessage(message);
}


export { worldThreadedView }