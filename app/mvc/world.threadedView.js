

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


worldThreadedView.putDownTile = function(tileCount, rowIndex, columnIndex, worldState, suppressAnimation) {

	var message = {
		handler: "worldView",
		method: "putDownTile",
		parameters: [
			tileCount,
			rowIndex,
			columnIndex,
			worldState,
			suppressAnimation,
		]
	}

	self.postMessage(message);
}


worldThreadedView.pickUpTile = function(previousTileCount, rowIndex, columnIndex, worldState) {

	var message = {
		handler: "worldView",
		method: "pickUpTile",
		parameters: [
			previousTileCount,
			rowIndex,
			columnIndex,
			worldState
		]
	}

	self.postMessage(message);
}


export { worldThreadedView }