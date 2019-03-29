

var worldThreadedView = {};

worldThreadedView.renderGrid = function(rowsCount, columnsCount) {

	var message = {
		handler: "worldView",
		method: "renderGrid",
		parameters: [
			rowsCount,
			columnsCount
		]
	}

	self.postMessage(message);
}

worldThreadedView.putTopWall = function(rowIndex, columnIndex) {

	var message = {
		handler: "worldView",
		method: "putTopWall",
		parameters: [
			rowIndex,
			columnIndex
		]
	}

	self.postMessage(message);
}

worldThreadedView.putRightWall = function(rowIndex, columnIndex) {

	var message = {
		handler: "worldView",
		method: "putRightWall",
		parameters: [
			rowIndex,
			columnIndex
		]
	}

	self.postMessage(message);
}

worldThreadedView.putBottomWall = function(rowIndex, columnIndex) {

	var message = {
		handler: "worldView",
		method: "putBottomWall",
		parameters: [
			rowIndex,
			columnIndex
		]
	}

	self.postMessage(message);
}

worldThreadedView.putLeftWall = function(rowIndex, columnIndex) {

	var message = {
		handler: "worldView",
		method: "putLeftWall",
		parameters: [
			rowIndex,
			columnIndex
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