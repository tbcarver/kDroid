
import { dom } from "../lib/core/web/dom.js";
import { coreMath } from "../lib/core/extensions/core-math.js";
import { animationView } from "./animation.view.js";

var worldView = {};

// Add 1 to account for the table border of 3px
var worldPlaceholderMargin = 20;
var worldTableMarginsTotal = (worldPlaceholderMargin + 1) * 2;

worldView.renderGrid = function(worldState) {

	var cellSize = calculateCellSize(worldState.rowsCount, worldState.columnsCount);
	var gridWidth = cellSize * worldState.columnsCount;

	var tableElement = dom.createElement("table", { id: "kDroidGrid" });
	tableElement.style.width = gridWidth + "px";
	tableElement.style.border = "2px solid " + worldState.wallBackgroundColor;

	var tableCellElements = [];

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		var rowElement = document.createElement("tr");

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			var cellId = "cell-" + rowIndex + "-" + columnIndex;
			var tableCellElement = dom.createElement("td", { id: cellId });

			tableCellElement.style.width = cellSize + "px";
			tableCellElement.style.height = cellSize + "px";
			tableCellElement.style.backgroundColor = worldState.backgroundColor;
			tableCellElement.style.border = "1px solid " + worldState.borderBackgroundColor;

			rowElement.appendChild(tableCellElement);
			tableCellElements.push(tableCellElement);
		}

		tableElement.appendChild(rowElement);
	}

	var worldPlaceholderElement = document.querySelector("#worldPlaceholder");

	worldPlaceholderElement.style.width = gridWidth + "px";
	worldPlaceholderElement.innerHTML = "";
	worldPlaceholderElement.appendChild(tableElement);

	tableCellElements.forEach(function(tableCellElement) {

		tableCellElement.style.height = tableCellElement.offsetWidth + "px";
	});

	return cellSize;
};

function calculateCellSize(rowsCount, columnsCount) {

	var totalWidth = window.innerWidth / columnsCount;
	var totalHeight = window.innerHeight / rowsCount;

	var cellSize = window.innerHeight - worldTableMarginsTotal;
	var cellCount = rowsCount;

	if (totalWidth < totalHeight) {

		cellSize = window.innerWidth - worldTableMarginsTotal;
		cellCount = columnsCount;
	}

	cellSize = Math.floor(cellSize / cellCount);

	return cellSize;
}

worldView.putDownTile = function(tileCount, robotState, worldState) {

	var tileId = "tile-" + robotState.rowIndex + "-" + robotState.columnIndex + "-" + tileCount;
	var tileElement = dom.createElement("div", { id: tileId, className: "tile" });
	var tileWidth = coreMath.pathagorinC(worldState.cellSize, worldState.cellSize);

	tileElement.style.top = (worldState.cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.left = (worldState.cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.width = tileWidth + "px";
	tileElement.style.height = tileWidth + "px";
	tileElement.style.lineHeight = tileWidth + "px";
	tileElement.style.fontSize = (tileWidth * .4) + "px";
	tileElement.style.color = worldState.tileColor;	
	tileElement.style.background = worldState.tileBackgroundColor;
	tileElement.style.visibility = "hidden";

	if (tileCount > 1) {

		tileElement.innerHTML = tileCount;
	}

	var targetCellId = "cell-" + robotState.rowIndex + "-" + robotState.columnIndex;
	var targetCellElement = dom("#" +targetCellId);

	targetCellElement.appendChild(tileElement);
	
	var keyframes = [
		{transform: "scale(0)", visibility: "visible"},
		{transform: "scale(1)", visibility: "visible"}
	]

    var options = {
        duration: worldState.duration / 2,
		easing: "linear"
	}

    animationView.stackAnimation(tileElement, keyframes, options, function() {

		tileElement.style.visibility = "visible";
    });
}

worldView.pickUpTile = function(previousTileCount, robotState, worldState) {

	var tileId = "tile-" + robotState.rowIndex + "-" + robotState.columnIndex + "-" + previousTileCount;
	var tileElement = dom("#" + tileId);

	var targetCellId = "cell-" + robotState.rowIndex + "-" + robotState.columnIndex;
	var targetCellElement = dom("#" + targetCellId);
	
	var keyframes = [
		{transform: "scale(1)", visibility: "visible"},
		{transform: "scale(0)", visibility: "visible"}
	]

    var options = {
        duration: worldState.duration / 2,
		easing: "linear"
	}

    animationView.stackAnimation(tileElement, keyframes, options, function() {

		targetCellElement.removeChild(tileElement);
    });
}


export { worldView }