
import { dom } from "../lib/core/web/dom.js";
import { coreMath } from "../lib/core/extensions/core-math.js";
import { animationView } from "./animation.view.js";

var worldView = {};

// Add 1 to account for the table border of 3px
var worldPlaceHolderMargin = 20;
var worldTableMarginsTotal = (worldPlaceHolderMargin + 1) * 2;

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

	var worldPlaceHolder = document.querySelector("#worldPlaceHolder");

	worldPlaceHolder.style.width = gridWidth + "px";
	worldPlaceHolder.innerHTML = "";
	worldPlaceHolder.appendChild(tableElement);

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

worldView.putDownTile = function(rowIndex, columnIndex, tileCount, tileBackgroundColor, duration, cellSize) {

	var tileElement = dom.createElement("div", { className: "tile" });
	var tileWidth = coreMath.pathagorinC(cellSize, cellSize);

	tileElement.style.top = (cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.left = (cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.width = tileWidth + "px";
	tileElement.style.height = tileWidth + "px";
	tileElement.style.lineHeight = tileWidth + "px";
	tileElement.style.fontSize = (tileWidth * .4) + "px";
	tileElement.style.background = tileBackgroundColor;

	if (tileCount > 1) {

		tileElement.innerHTML = 1;
	}

	var cellElement = dom("#cell-" + rowIndex + "-" + columnIndex);

	cellElement.appendChild(tileElement);
	
	var keyframes = [
		{transform: "scale(0)", visibility: "visible"},
		{transform: "scale(1)", visibility: "visible"}
	]

    var options = {
        duration: duration / 2,
		easing: "linear",
		fill: "forwards"
	}

    animationView.stackAnimation(tileElement, keyframes, options, function() {

		// tileElement.style.background = tileBackgroundColor;
    });
}


export { worldView }