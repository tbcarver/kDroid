

var worldThreadedView = {};

worldThreadedView.renderGrid = function(worldState) {

	var message = {
		view: "worldView",
		action: "rederGrid",
		parameters: {
			worldState: worldState
		}
	}

	postMessage(message);
}


worldThreadedView.putDownTile = function(tileCount, robotState, worldState) {

	var message = {
		view: "worldView",
		action: "rederGrid",
		parameters: {
			tileCount: tileCount,
			robotState: robotState,
			worldState: worldState
		}
	}

	postMessage(message);
}


worldThreadedView.pickUpTile = function(previousTileCount, robotState, worldState) {

	var message = {
		view: "worldView",
		action: "rederGrid",
		parameters: {
			previousTileCount: previousTileCount,
			robotState: robotState,
			worldState: worldState
		}
	}

	postMessage(message);
}


export { worldThreadedView }