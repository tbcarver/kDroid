
import { dom } from "../../lib/core/web/dom.js";
import { coreMath } from "../../lib/core/extensions/core-math.js";
import { animationView } from "./animation.view.js";
import { viewState } from "../viewState.js";

var worldView = {};

worldView.renderGrid = function(rowsCount, columnsCount) {

	var tableElement = dom.createElement("table", { id: "kDroidGrid" });
	tableElement.style.width = viewState.world.width + "px";
	tableElement.style.height = viewState.world.height + "px";

	var tableCellElements = [];

	for (var rowIndex = 0; rowIndex < rowsCount; rowIndex++) {

		var rowElement = document.createElement("tr");

		for (var columnIndex = 0; columnIndex < columnsCount; columnIndex++) {

			var cellId = "cell-" + rowIndex + "-" + columnIndex;
			var tableCellElement = dom.createElement("td", { id: cellId });

			tableCellElement.style.width = viewState.world.cellSize + "px";
			tableCellElement.style.height = viewState.world.cellSize + "px";
			tableCellElement.style.backgroundColor = viewState.world.backgroundColor;
			tableCellElement.style.border = "1px solid " + viewState.world.borderBackgroundColor;

			rowElement.appendChild(tableCellElement);
			tableCellElements.push(tableCellElement);
		}

		tableElement.appendChild(rowElement);
	}

	var worldPlaceholderElement = dom("#worldPlaceholder");
	worldPlaceholderElement.appendChild(tableElement);
};

worldView.putTopWall = function(rowIndex, columnIndex) {

	putWall("borderTop", rowIndex, columnIndex);
}

worldView.putRightWall = function(rowIndex, columnIndex) {

	putWall("borderRight", rowIndex, columnIndex);
}

worldView.putBottomWall = function(rowIndex, columnIndex) {

	putWall("borderBottom", rowIndex, columnIndex);
}

worldView.putLeftWall = function(rowIndex, columnIndex) {

	putWall("borderLeft", rowIndex, columnIndex);
}

function putWall(borderName, rowIndex, columnIndex) {

	var targetCellId = "cell-" + rowIndex + "-" + columnIndex;
	var targetCellElement = dom("#" +targetCellId);

	targetCellElement.style[borderName] = viewState.world.wallWidth + "px solid " + viewState.world.wallBackgroundColor;
}

worldView.putDownTile = function(tileCount, rowIndex, columnIndex, tileBackgroundColor, suppressAnimation) {

	var tileId = "tile-" + rowIndex + "-" + columnIndex + "-" + tileCount;
	var tileElement = dom.createElement("div", { id: tileId, className: "tile" });
	var tileWidth = coreMath.pythagoreanC(viewState.world.cellSize, viewState.world.cellSize);

	tileElement.style.top = (viewState.world.cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.left = (viewState.world.cellSize / 2) - (tileWidth / 2) + "px";
	tileElement.style.width = tileWidth + "px";
	tileElement.style.height = tileWidth + "px";
	tileElement.style.lineHeight = tileWidth + "px";
	tileElement.style.fontSize = (tileWidth * .4) + "px";
	tileElement.style.color = viewState.world.tileColor;
	tileElement.style.background = viewState.world.tileBackgroundColor;

	if (tileBackgroundColor) {

		tileElement.style.background = tileBackgroundColor;
	}

	if (tileCount > 1) {

		tileElement.innerHTML = tileCount;
	}

	var targetCellId = "cell-" + rowIndex + "-" + columnIndex;
	var targetCellElement = dom("#" +targetCellId);

	targetCellElement.appendChild(tileElement);

	if (!suppressAnimation) {

		tileElement.style.visibility = "hidden";
	
		var keyframes = [
			{transform: "scale(0)", visibility: "visible"},
			{transform: "scale(1)", visibility: "visible"}
		]
	
		var options = {
			duration: viewState.animationDuration / 2,
			easing: "linear"
		}
	
		animationView.stackAnimation(tileElement, keyframes, options, function() {
	
			tileElement.style.visibility = "visible";
		});
	}
}

worldView.pickUpTile = function(previousTileCount, rowIndex, columnIndex) {

	var tileId = "tile-" + rowIndex + "-" + columnIndex + "-" + previousTileCount;
	var tileElement = dom("#" + tileId);

	if (tileElement.length) {

		// NOTE: Because of the delay in DOM changes until after the animation is ran
		//  there may be multiple tiles with the same id. Take the elements in LIFO order
		tileElement = tileElement[tileElement.length - 1];
	}

	var targetCellId = "cell-" + rowIndex + "-" + columnIndex;
	var targetCellElement = dom("#" + targetCellId);
	
	var keyframes = [
		{transform: "scale(1)", visibility: "visible"},
		{transform: "scale(0)", visibility: "visible"}
	]

    var options = {
        duration: viewState.animationDuration / 2,
		easing: "linear"
	}

    animationView.stackAnimation(tileElement, keyframes, options, function() {

		targetCellElement.removeChild(tileElement);
    });
}


export { worldView }