
import { dom } from "../lib/core/web/dom.js";

var worldView = {};
var worldTableMarginsTotal = 10 * 2;

worldView.renderGrid = function(world) {

	var rowsCount = world.rowsCount;
	var columnsCount = world.columnsCount;

	var cellSize = this.calculateCellSize(rowsCount, columnsCount);

	var tableElement = dom.createElement("table", { className: "kDroidGrid" });
	tableElement.style.width = (cellSize * columnsCount) + "px";

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

	worldPlaceHolder.innerHTML = "";
	worldPlaceHolder.appendChild(tableElement);

	tableCellElements.forEach(function(tableCellElement) {

		tableCellElement.style.height = tableCellElement.offsetWidth + "px";
	});
};

worldView.calculateCellSize = function(rowsCount, columnsCount) {

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