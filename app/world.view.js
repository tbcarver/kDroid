
import { dom } from "../lib/core/web/dom.js";

var worldView = {};

// Add 1 to account for the table border of 3px
var worldTableMarginsTotal = (10 + 1) * 2;

worldView.renderGrid = function(world) {

	var rowsCount = world.rowsCount;
	var columnsCount = world.columnsCount;

	var cellSize = calculateCellSize(rowsCount, columnsCount);
	var gridWidth = cellSize * columnsCount;

	var tableElement = dom.createElement("table", { id: "kDroidGrid" });
	tableElement.style.width = gridWidth + "px";

	var tableCellElements = [];

	for (var currentRowsCount = 0; currentRowsCount < rowsCount; currentRowsCount++) {

		var rowElement = document.createElement("tr");

		for (var currentColumnsCount = 0; currentColumnsCount < columnsCount; currentColumnsCount++) {

			var tableCellElement = dom.createElement("td");

			tableCellElement.style.width = cellSize + "px";
			tableCellElement.style.height = cellSize + "px";

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


export { worldView }