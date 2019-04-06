
import { dom } from "../lib/core/web/dom.js";
import { viewState } from "./viewState.js";

var appView = {};

appView.initializeColors = function() {

	var randomHue = Math.round(Math.random() * 255);
	var complimentaryHue = randomHue + 128;

	if (randomHue > 128) {

		complimentaryHue = 256 - 128 - randomHue;
	}

	if (!viewState.robot.backgroundColor) {

		viewState.robot.backgroundColor = "hsl(" + complimentaryHue + ", 40%, 35%, .90)";
	}

	if (!viewState.world.backgroundColor) {

		viewState.world.backgroundColor = "#fff";
	}

	if (!viewState.world.borderBackgroundColor) {

		viewState.world.borderBackgroundColor = "hsl(" + randomHue + ", 40%, 90%)";
	}

	if (!viewState.world.wallBackgroundColor) {

		viewState.world.wallBackgroundColor = "hsl(" + complimentaryHue + ", 50%, 25%)";
	}

	if (!viewState.world.tileColor) {

		viewState.world.tileColor = "#fff";
	}

	if (!viewState.world.tileBackgroundColor) {

		viewState.world.tileBackgroundColor = "hsl(" + randomHue + ", 45%, 65%)";
	}

	if (!viewState.world.messageBoxBackgroundColor) {

		viewState.world.messageBoxBackgroundColor = "hsl(" + complimentaryHue + ", 40%, 40%)";
	}
}

appView.initializePlaceholders = function(rowsCount, columnsCount, consoleEnabled) {

	var availableWidth = window.innerWidth;
	var availableHeight = window.innerHeight;

	if (consoleEnabled) {

		var heightWithBorder = calculateConsoleHeightWithBorder(availableHeight);
		viewState.console.height = heightWithBorder - (viewState.console.borderWidth * 2);

		availableHeight -= heightWithBorder;
		availableHeight -= (viewState.margin);
	}

	availableWidth -= (viewState.margin * 2);
	availableHeight -= (viewState.margin * 2);

	viewState.world.cellSize = calculateCellSize(availableWidth, availableHeight, rowsCount, columnsCount);
	viewState.world.width = viewState.world.cellSize * columnsCount;
	viewState.world.height = viewState.world.cellSize * rowsCount;
	viewState.console.width = viewState.world.width;

	var worldPlaceholderElement = dom.createElement("div", { id: "worldPlaceholder" });
	worldPlaceholderElement.style.width = viewState.world.width + "px";
	worldPlaceholderElement.style.height = viewState.world.height + "px";
	worldPlaceholderElement.style.margin = viewState.margin + "px";

	document.body.appendChild(worldPlaceholderElement);

	if (consoleEnabled) {

		var consolePlaceholderElement = dom.createElement("div", { id: "consolePlaceholder" });	
		consolePlaceholderElement.style.width = viewState.console.width + "px";
		consolePlaceholderElement.style.height = viewState.console.height + "px";
		consolePlaceholderElement.style.margin = viewState.margin + "px";
		consolePlaceholderElement.style.marginTop = 0;
		
		document.body.appendChild(consolePlaceholderElement);
	}
}

function calculateConsoleHeightWithBorder(windowHeight) {

	function getConsoleHeight(linesCount) {

		return (viewState.console.lineHeight * linesCount) + (viewState.console.borderWidth * 2);
	}

	var consoleHeight = getConsoleHeight(4);
	var percentOfWindowHeight = consoleHeight / windowHeight;

	if (percentOfWindowHeight > .20) {

		var consoleHeight = getConsoleHeight(2);
	}

	return consoleHeight;
}

function calculateCellSize(width, height, rowsCount, columnsCount) {

	var totalWidth = width / columnsCount;
	var totalHeight = height / rowsCount;

	var cellSize = height;
	var cellCount = rowsCount;

	if (totalWidth < totalHeight) {

		cellSize = width;
		cellCount = columnsCount;
	}

	cellSize = Math.floor(cellSize / cellCount);

	return cellSize;
}

appView.setAnimationDuration = function(animationDuration) {
	
	viewState.animationDuration = animationDuration;
}

appView.setTileBackgroundColor = function(backgroundColor) {
	
	viewState.world.tileBackgroundColor = backgroundColor;
}

appView.setRobotIconName = function(iconName) {

	if (iconName) {

		viewState.robot.iconName = iconName;
	}
}


export { appView }