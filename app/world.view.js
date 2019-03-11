
import { dom } from "../lib/core/web/dom.js";
import { animationView } from "./animation.view.js";

var worldView = {};

// Add 1 to account for the table border of 3px
var worldPlaceHolderMargin = 20;
var worldTableMarginsTotal = (worldPlaceHolderMargin + 1) * 2;

worldView.renderGrid = function(rowsCount, columnsCount) {

	var cellSize = calculateCellSize(rowsCount, columnsCount);
	var gridWidth = cellSize * columnsCount;

	var tableElement = dom.createElement("table", { id: "kDroidGrid" });
	tableElement.style.width = gridWidth + "px";

	var tableCellElements = [];

	for (var rowIndex = 0; rowIndex < rowsCount; rowIndex++) {

		var rowElement = document.createElement("tr");

		for (var columnIndex = 0; columnIndex < columnsCount; columnIndex++) {

			var cellId = "cell-" + rowIndex + "-" + columnIndex;
			var tableCellElement = dom.createElement("td", { id: cellId });

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

worldView.putDownTile = function(rowIndex, columnIndex, tileCount, tileColor, duration, cellSize) {

	// var tileElement = dom.createElement("div", { className: "tile" });

	// tileElement.style.top = (cellSize / 2) + "px";
	// tileElement.style.left = (cellSize / 2) + "px";
	// tileElement.style.background = tileColor;

	// var cellElement = dom("#cell-" + rowIndex + "-" + columnIndex);

	// cellElement.appendChild(tileElement);

	// // TODO: Figure out the math to make sure the size of the tile has a steady growth

    // // var keyframes = {
    // //     transform: [
    // //         "scale(0)",
    // //         "scale(50)"
	// // 	]
	// // };
	
	// var keyframes = [
	// 	{color: "blue"},
	// 	{color: "yellow"}
	// ]

    // var options = {
    //     duration: duration,
	// 	easing: "ease-in-out",
	// 	fill: "forwards"
    // }

    // animationView.stackAnimation(tileElement, keyframes, options, function() {

	// 	// tileElement.style.background = tileColor;
    // });
}


export { worldView }