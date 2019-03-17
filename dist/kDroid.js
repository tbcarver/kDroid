/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./appCommandsThreaded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/animation.view.js":
/*!*******************************!*\
  !*** ./app/animation.view.js ***!
  \*******************************/
/*! exports provided: animationView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationView", function() { return animationView; });
/* harmony import */ var _lib_core_vendor_web_animation_js_web_animation_extensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core-vendor/web-animation-js/web-animation-extensions.js */ "./lib/core-vendor/web-animation-js/web-animation-extensions.js");



var animationView = {
	currentEndTime: 0
};

animationView.stackAnimation = function(element, keyFrames, options, onFinishHandler) {

	_lib_core_vendor_web_animation_js_web_animation_extensions_js__WEBPACK_IMPORTED_MODULE_0__["webAnimationExtensions"].getTimelineCurrentTime(function(currentTime) {

		var delay = 0;

		if (this.currentEndTime === 0) {

			var delay = currentTime;

		} else if (currentTime < this.currentEndTime) {

			delay = this.currentEndTime - currentTime;
		}

		options.delay = delay;

		element.animate(keyFrames, options).onfinish = onFinishHandler;
		
		this.currentEndTime = delay + options.duration + currentTime;

	}.bind(this));
}




/***/ }),

/***/ "./app/app.controller.js":
/*!*******************************!*\
  !*** ./app/app.controller.js ***!
  \*******************************/
/*! exports provided: appController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appController", function() { return appController; });
/* harmony import */ var _world_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world.controller.js */ "./app/world.controller.js");
/* harmony import */ var _robot_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./robot.controller.js */ "./app/robot.controller.js");
/* harmony import */ var _messageBox_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageBox.controller.js */ "./app/messageBox.controller.js");
/* harmony import */ var _viewFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewFactory.js */ "./app/viewFactory.js");
/* harmony import */ var _robotIcons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./robotIcons.js */ "./app/robotIcons.js");
/* harmony import */ var _appState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appState.js */ "./app/appState.js");
/* harmony import */ var _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/core/extensions/core-math.js */ "./lib/core/extensions/core-math.js");
/* harmony import */ var _lib_core_collections_double_key_hash_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/core/collections/double-key-hash-set.js */ "./lib/core/collections/double-key-hash-set.js");










var worldState = _appState_js__WEBPACK_IMPORTED_MODULE_5__["appState"].world;
var robotState = _appState_js__WEBPACK_IMPORTED_MODULE_5__["appState"].robot;

var appController = {};

appController.load = function() {

	initializeColors(worldState);
	initializeOuterWalls(worldState);
	initializeTilesCounts(worldState);

	_world_controller_js__WEBPACK_IMPORTED_MODULE_0__["worldController"].load();
	_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].load();
	_messageBox_controller_js__WEBPACK_IMPORTED_MODULE_2__["messageBoxController"].load();
}

appController.loadThreaded = function() {
	
	_viewFactory_js__WEBPACK_IMPORTED_MODULE_3__["viewFactory"].loadThreaded();

	this.load();
}

appController.setWorldStateSize = function(rowsCount, columnsCount) {

	worldState.rowsCount = rowsCount;
	worldState.columnsCount = rowsCount;

	if (columnsCount) {

		worldState.columnsCount = columnsCount;
	}
}

appController.setRandomWorldStateSize = function(rowsCount, columnsCount) {

	var randomRowsCount = _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_6__["coreMath"].randomInteger(1, 12);
	var randomColumnsCount = _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_6__["coreMath"].randomInteger(1, 12);

	if (rowsCount) {

		if (rowsCount !== -1) {

			randomRowsCount = rowsCount;

			if (!columnsCount) {

				randomColumnsCount = rowsCount;
			}
		}
	}

	if (columnsCount) {

		if (columnsCount !== -1) {

			randomColumnsCount = columnsCount;
		}
	}

	worldState.rowsCount = randomRowsCount;
	worldState.columnsCount = randomColumnsCount;
}

/**
 * Speed of the world
 * @param speed 100 for the fastest and 1 for the slowest
 */
appController.setWorldStateSpeed = function(speed) {

	if (speed < 1) {

		speed = 1;

	} else if (speed > 100) {

		speed = 100;
	}

	var invertedSpeed = 100 - speed;
	var fastestDuration = 10;
	var slowestDuration = 2000;

	worldState.duration = ((slowestDuration - fastestDuration) * (invertedSpeed / 100)) + fastestDuration;
}

appController.setRobotStateIconName = function(iconName) {

	if (iconName) {

		robotState.iconName = iconName;
	}
}

appController.setRandomRobotStateIconName = function(iconName) {

	if (!iconName) {

		var keys = Object.keys(_robotIcons_js__WEBPACK_IMPORTED_MODULE_4__["robotIcons"]);
		var randomIndex = _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_6__["coreMath"].randomInteger(0, keys.length - 1);
		iconName = keys[randomIndex];
	}

	robotState.iconName = iconName;
}

appController.setRobotStateDirection = function(direction) {

	if (direction) {

		robotState.direction = direction;
	}
}

var directions = [
	"north",
	"east",
	"south",
	"west"
]

appController.setRandomRobotStateDirection = function(direction) {

	if (!direction) {

		var randomIndex = _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_6__["coreMath"].randomInteger(0, directions.length - 1);
		direction = directions[randomIndex];
	}

	robotState.direction = direction;
}

appController.setTileBackgroundColor= function(backgroundColor) {

	worldState.tileBackgroundColor = backgroundColor;
}

function initializeColors() {

	var randomHue = Math.round(Math.random() * 255);
	var complimentaryHue = randomHue + 128;
	
	if (randomHue > 128) {

		complimentaryHue = 256 - 128 - randomHue;
	}

	robotState.backgroundColor = "hsl(" + complimentaryHue + ", 40%, 35%)";
	// worldState.backgroundColor = "hsl(" + randomHue + ", 100%, 100%)";
	worldState.borderBackgroundColor = "hsl(" + randomHue + ", 40%, 90%)";
	worldState.wallBackgroundColor = "hsl(" + complimentaryHue + ", 50%, 25%)";
	worldState.tileBackgroundColor = "hsl(" + randomHue + ", 45%, 65%)";	
	worldState.messageBoxBackgroundColor = "hsl(" + complimentaryHue + ", 40%, 40%)";
}

function initializeOuterWalls(worldState) {

	var topWalls = new _lib_core_collections_double_key_hash_set_js__WEBPACK_IMPORTED_MODULE_7__["DoubleKeyHashSet"]();
	var leftWalls = new _lib_core_collections_double_key_hash_set_js__WEBPACK_IMPORTED_MODULE_7__["DoubleKeyHashSet"]();

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			if (rowIndex === 0) {

				topWalls.add(rowIndex, columnIndex);
			}

			if (rowIndex === worldState.rowsCount - 1) {

				topWalls.add(rowIndex + 1, columnIndex);
			}

			if (columnIndex === 0) {

				leftWalls.add(rowIndex, columnIndex);
			}

			if (columnIndex === worldState.columnsCount - 1) {

				leftWalls.add(rowIndex, columnIndex + 1);
			}
		}
	}

	worldState.topWalls = topWalls;
	worldState.leftWalls = leftWalls;
}

function initializeTilesCounts(worldState) {

	var tileCounts = [];
	var currentRow;

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		currentRow = [];
		tileCounts.push(currentRow);

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			currentRow.push(0);
		}
	}

	worldState.tileCounts = tileCounts;
}




/***/ }),

/***/ "./app/appState.js":
/*!*************************!*\
  !*** ./app/appState.js ***!
  \*************************/
/*! exports provided: appState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });

var appState = {
    robot: {
        rowIndex: 0,
        columnIndex: 0,
        iconName: "arrow-alt-circle-right",
        backgroundColor: "#fff",
        direction: "east"
    },
    world: {
        rowsCount: 0,
        columnsCount: 0,
        cellSize: 0,
        backgroundColor: "#fff",
        borderBackgroundColor: "#fff",
        duration: 1000,
        topWalls: {},
        leftWalls: {},
        wallBackgroundColor: "#fff",
        tileCounts: [],
        tileColor: "#fff",
        tileBackgroundColor: "#fff",
        messageBoxBackgroundColor: "#fff"
    }
};




/***/ }),

/***/ "./app/messageBox.controller.js":
/*!**************************************!*\
  !*** ./app/messageBox.controller.js ***!
  \**************************************/
/*! exports provided: messageBoxController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageBoxController", function() { return messageBoxController; });
/* harmony import */ var _viewFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory.js */ "./app/viewFactory.js");
/* harmony import */ var _appState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appState.js */ "./app/appState.js");




var messageBoxView;

var messageBoxController = {};

messageBoxController.load = function() {

    messageBoxView = _viewFactory_js__WEBPACK_IMPORTED_MODULE_0__["viewFactory"].getView("messageBoxView");

};

messageBoxController.setMessage = function(message, isError) {

	messageBoxView.render(message, isError, _appState_js__WEBPACK_IMPORTED_MODULE_1__["appState"].world);
};




/***/ }),

/***/ "./app/messageBox.threadedView.js":
/*!****************************************!*\
  !*** ./app/messageBox.threadedView.js ***!
  \****************************************/
/*! exports provided: messageBoxThreadedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageBoxThreadedView", function() { return messageBoxThreadedView; });


var messageBoxThreadedView = {};

messageBoxThreadedView.render = function(message, isError, worldState) {

	var message = {
		handler: "messageBoxView",
		method: "render",
		parameters: [
			message,
			isError,
			worldState
		]
	}

	self.postMessage(message);
};




/***/ }),

/***/ "./app/messageBox.view.js":
/*!********************************!*\
  !*** ./app/messageBox.view.js ***!
  \********************************/
/*! exports provided: messageBoxView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageBoxView", function() { return messageBoxView; });
/* harmony import */ var _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core/web/dom.js */ "./lib/core/web/dom.js");
/* harmony import */ var _animation_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.view.js */ "./app/animation.view.js");




var messageBoxView = {};

messageBoxView.render = function(message, isError, worldState) {

    var messageBoxElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("div", { id: "messageBox" });
    var messageBoxWidth = worldState.cellSize * worldState.columnsCount * .75;

    if (messageBoxWidth > 450) {

        messageBoxWidth = 450;

    } else if (messageBoxWidth < 350) {

        messageBoxWidth = 350;
    }

    messageBoxElement.style.width = messageBoxWidth + "px";
    messageBoxElement.style.padding = "30px 20px";
    messageBoxElement.style.color = worldState.backgroundColor;
    messageBoxElement.style.backgroundColor = worldState.messageBoxBackgroundColor;
    messageBoxElement.style.visibility = "hidden";

    messageBoxElement.style.fontSize = "28px";

    if (messageBoxWidth < 400 || message.length > 40) {

        messageBoxElement.style.fontSize = "16px";
    }

    messageBoxElement.innerHTML = message;

    var messageBoxContainerElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("div", { id: "messageBoxContainer" });
    messageBoxContainerElement.appendChild(messageBoxElement);

    var messageBoxCloseElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("a", { className: "closeButton", href: "#" });
    messageBoxCloseElement.style.width = messageBoxElement.style.fontSize;
    messageBoxCloseElement.style.height = messageBoxElement.style.fontSize;
    messageBoxCloseElement.style.fill = worldState.backgroundColor;
    messageBoxCloseElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg>';
    messageBoxElement.appendChild(messageBoxCloseElement);

    var worldPlaceholderElement = Object(_lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])("#worldPlaceholder");
    worldPlaceholderElement.appendChild(messageBoxContainerElement);

    messageBoxCloseElement.addEventListener("click", function(event) {

        event.preventDefault();

        var keyframes = [
            { transform: "scale(1)", visibility: "visible" },
            { transform: "scale(0)", visibility: "visible" }
        ]

        var options = {
            duration: worldState.duration / 2,
            easing: "cubic-bezier(.5305, -1.3203, .5, .6085)",
            fill: "forwards"
        }

        messageBoxContainerElement.animate(keyframes, options);
    });

    messageBoxContainerElement.style.minWidth = worldPlaceholderElement.offsetWidth + "px";
    messageBoxContainerElement.style.minHeight = worldPlaceholderElement.offsetHeight + "px";

    var keyframes = [
        { transform: "scale(0)", visibility: "visible" },
        { transform: "scale(1)", visibility: "visible" }
    ];

    if (isError) {

         keyframes[0].backgroundColor = messageBoxElement.style.backgroundColor;
         keyframes[1].backgroundColor = "#bb1414";
    }

    var options = {
        duration: worldState.duration / 2,
        easing: "cubic-bezier(.38, 1.23, .71, 1.82)",
        fill: "forwards"
    };

    _animation_view_js__WEBPACK_IMPORTED_MODULE_1__["animationView"].stackAnimation(messageBoxElement, keyframes, options);
};




/***/ }),

/***/ "./app/robot.controller.js":
/*!*********************************!*\
  !*** ./app/robot.controller.js ***!
  \*********************************/
/*! exports provided: robotController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "robotController", function() { return robotController; });
/* harmony import */ var _appState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appState.js */ "./app/appState.js");
/* harmony import */ var _viewFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewFactory.js */ "./app/viewFactory.js");




var robotView;
var worldView;

var robotState = _appState_js__WEBPACK_IMPORTED_MODULE_0__["appState"].robot;
var worldState = _appState_js__WEBPACK_IMPORTED_MODULE_0__["appState"].world;

var robotViewMoveHandlers;

var robotController = {};

robotController.load = function() {

    robotView = _viewFactory_js__WEBPACK_IMPORTED_MODULE_1__["viewFactory"].getView("robotView");
    worldView = _viewFactory_js__WEBPACK_IMPORTED_MODULE_1__["viewFactory"].getView("worldView");

    robotViewMoveHandlers = {
        north: robotView.moveNorth,
        east: robotView.moveEast,
        south: robotView.moveSouth,
        west: robotView.moveWest
    }

    robotView.renderRobot(robotState, worldState.cellSize);
};

var robotMoveDirectionOffsets = {
    north: {
        rowOffset: -1,
        columnOffset: 0
    },
    east: {
        rowOffset: 0,
        columnOffset: 1
    },
    south: {
        rowOffset: 1,
        columnOffset: 0
    },
    west: {
        rowOffset: 0,
        columnOffset: -1
    }
};

robotController.move = function() {

    assertCanMove();

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);

    robotState.rowIndex = robotState.rowIndex + robotMoveDirectionOffsets[robotState.direction].rowOffset;
    robotState.columnIndex = robotState.columnIndex + robotMoveDirectionOffsets[robotState.direction].columnOffset;

    robotViewMove(worldState.duration, worldState.cellSize);
};

function assertCanMove() {

    if (robotController.isFrontBlocked()) {

        throw { message: "The front is blocked." };
    }
}

robotController.isFrontClear = function() {

    return !this.isFrontBlocked();
}

robotController.isFrontBlocked = function() {

    var walls = worldState.topWalls;

    if (robotState.direction === "east" || robotState.direction === "west") {

        walls = worldState.leftWalls;
    }

    var wallRowIndex = robotState.rowIndex;
    var wallColumnIndex = robotState.columnIndex;

    if (robotState.direction === "south") {

        wallRowIndex++;
    }

    if (robotState.direction === "east") {

        wallColumnIndex++;
    }

    return walls.includesKey(wallRowIndex, wallColumnIndex);
}

var turnLeftDirections = {
    north: "west",
    east: "north",
    south: "east",
    west: "south"
};

robotController.turnLeft = function() {

    robotState.direction = turnLeftDirections[robotState.direction];
    robotView.turnLeft(robotState.direction, worldState.duration);
};

robotController.putDownTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    tileCount++;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.putDownTile(tileCount, robotState, worldState);
}

robotController.pickUpTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    var previousTileCount = tileCount;

    assertCanPickUpTile(tileCount);

    tileCount--;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.pickUpTile(previousTileCount, robotState, worldState);
}

function assertCanPickUpTile(tileCount) {

    if (tileCount <= 0) {

        throw { message: "There is no tile to pick up." };
    }
}

robotController.isOnTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];

    return (tileCount > 0);
}

robotController.isNotOnTile = function() {

    return !this.isOnTile();
}




/***/ }),

/***/ "./app/robot.threadedView.js":
/*!***********************************!*\
  !*** ./app/robot.threadedView.js ***!
  \***********************************/
/*! exports provided: robotThreadedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "robotThreadedView", function() { return robotThreadedView; });


var robotThreadedView = {};

robotThreadedView.renderRobot = function(robotState, cellSize) {

	var message = {
		handler: "robotView",
		method: "renderRobot",
		parameters: [
			robotState,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveNorth = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveNorth",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveEast = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveEast",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveSouth = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveSouth",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.moveWest = function(duration, cellSize) {

	var message = {
		handler: "robotView",
		method: "moveWest",
		parameters: [
			duration,
			cellSize
		]
	}

	self.postMessage(message);
}

robotThreadedView.turnLeft = function(nextDirection, duration) {

	var message = {
		handler: "robotView",
		method: "turnLeft",
		parameters: [
			nextDirection,
			duration
		]
	}

	self.postMessage(message);
}




/***/ }),

/***/ "./app/robot.view.js":
/*!***************************!*\
  !*** ./app/robot.view.js ***!
  \***************************/
/*! exports provided: robotView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "robotView", function() { return robotView; });
/* harmony import */ var _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core/web/dom.js */ "./lib/core/web/dom.js");
/* harmony import */ var _animation_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.view.js */ "./app/animation.view.js");
/* harmony import */ var _robotIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robotIcons.js */ "./app/robotIcons.js");
/* harmony import */ var _lib_core_extensions_core_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/core/extensions/core-string.js */ "./lib/core/extensions/core-string.js");






var robotView = {};

robotView.renderRobot = function(robotState, cellSize) {
    
    this.robotElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("div", { id: "kDroid" });
    this.robotElement.style.padding = (cellSize * .1) + "px";
    this.robotElement.style.fill = robotState.backgroundColor;

    this.robotElement.innerHTML = _robotIcons_js__WEBPACK_IMPORTED_MODULE_2__["robotIcons"][robotState.iconName];

    var worldPlaceholderElement = Object(_lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])("#worldPlaceholder");
    worldPlaceholderElement.appendChild(this.robotElement);

    this.robotSvgElement = this.robotElement.querySelector("svg");

    var top = cellSize * robotState.rowIndex;
    var left = cellSize * robotState.columnIndex;

    this.robotElement.style.top = top + "px";
    this.robotElement.style.left = left + "px";
    this.robotElement.style.width = cellSize + "px";
    this.robotElement.style.height = cellSize + "px";

    this.robotSvgElement.style.transform = directionRotations[robotState.direction];
}

robotView.moveNorth = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + -cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, -cellSize, 0);
}

robotView.moveEast = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, 0, cellSize);
}

robotView.moveSouth = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateY(0px)",
            "translateY(" + cellSize + "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, cellSize, 0);
}

robotView.moveWest = function(duration, cellSize) {

    var keyframes = {
        transform: [
            "translateX(0px)",
            "translateX(" + -cellSize+ "px)",
        ]
    };

    move(this.robotElement, keyframes, duration, 0, -cellSize);
}

function move(element, keyframes, duration, forwardsTopOffset, forwardsLeftOffset) {

    var options = {
        duration: duration,
        easing: "ease-in-out",
    }

    _animation_view_js__WEBPACK_IMPORTED_MODULE_1__["animationView"].stackAnimation(element, keyframes, options, function() {

        element.style.top = _lib_core_extensions_core_string_js__WEBPACK_IMPORTED_MODULE_3__["coreString"].addNumberInString(element.style.top, forwardsTopOffset);
        element.style.left = _lib_core_extensions_core_string_js__WEBPACK_IMPORTED_MODULE_3__["coreString"].addNumberInString(element.style.left, forwardsLeftOffset);
    });
}

var directionRotations = {
    north: "rotate(-90deg)",
    east: "rotate(0deg)",
    south: "rotate(-270deg)",
    west: "rotate(-180deg)"
};

robotView.turnLeft = function(nextDirection, duration) {

    var keyframes = {
        transform: [
            "rotate(0deg)",
            "rotate(-90deg)"
        ]
    };

    var options = {
        duration: duration / 3,
        easing: "linear"
    }

    var robotSvgElement = this.robotSvgElement;
    var svgRotation = directionRotations[nextDirection];

    _animation_view_js__WEBPACK_IMPORTED_MODULE_1__["animationView"].stackAnimation(this.robotElement, keyframes, options, function() {

        robotSvgElement.style.transform = svgRotation;
    });
}




/***/ }),

/***/ "./app/robotIcons.js":
/*!***************************!*\
  !*** ./app/robotIcons.js ***!
  \***************************/
/*! exports provided: robotIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "robotIcons", function() { return robotIcons; });

var robotIcons = {};

robotIcons["accessible-icon"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"/></svg>';
robotIcons["caret-square-right"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M176 354.9V157.1c0-10.7 13-16.1 20.5-8.5l98.3 98.9c4.7 4.7 4.7 12.2 0 16.9l-98.3 98.9c-7.5 7.7-20.5 2.3-20.5-8.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/></svg>';
robotIcons["arrow-alt-circle-right"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/></svg>';
robotIcons["android"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M89.6 204.5v115.8c0 15.4-12.1 27.7-27.5 27.7-15.3 0-30.1-12.4-30.1-27.7V204.5c0-15.1 14.8-27.5 30.1-27.5 15.1 0 27.5 12.4 27.5 27.5zm10.8 157c0 16.4 13.2 29.6 29.6 29.6h19.9l.3 61.1c0 36.9 55.2 36.6 55.2 0v-61.1h37.2v61.1c0 36.7 55.5 36.8 55.5 0v-61.1h20.2c16.2 0 29.4-13.2 29.4-29.6V182.1H100.4v179.4zm248-189.1H99.3c0-42.8 25.6-80 63.6-99.4l-19.1-35.3c-2.8-4.9 4.3-8 6.7-3.8l19.4 35.6c34.9-15.5 75-14.7 108.3 0L297.5 34c2.5-4.3 9.5-1.1 6.7 3.8L285.1 73c37.7 19.4 63.3 56.6 63.3 99.4zm-170.7-55.5c0-5.7-4.6-10.5-10.5-10.5-5.7 0-10.2 4.8-10.2 10.5s4.6 10.5 10.2 10.5c5.9 0 10.5-4.8 10.5-10.5zm113.4 0c0-5.7-4.6-10.5-10.2-10.5-5.9 0-10.5 4.8-10.5 10.5s4.6 10.5 10.5 10.5c5.6 0 10.2-4.8 10.2-10.5zm94.8 60.1c-15.1 0-27.5 12.1-27.5 27.5v115.8c0 15.4 12.4 27.7 27.5 27.7 15.4 0 30.1-12.4 30.1-27.7V204.5c0-15.4-14.8-27.5-30.1-27.5z"/></svg>';
robotIcons["grin-tears"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M117.1 256.1c-25.8 3.7-84 13.7-100.9 30.6-21.9 21.9-21.5 57.9.9 80.3s58.3 22.8 80.3.9C114.3 351 124.3 292.8 128 267c.8-6.4-4.6-11.8-10.9-10.9zm506.7 30.6c-16.9-16.9-75.1-26.9-100.9-30.6-6.3-.9-11.7 4.5-10.8 10.8 3.7 25.8 13.7 84 30.6 100.9 21.9 21.9 57.9 21.5 80.3-.9 22.3-22.3 22.7-58.3.8-80.2zm-126.6 61.7C463.8 412.3 396.9 456 320 456c-76.9 0-143.8-43.7-177.2-107.6-12.5 37.4-25.2 43.9-28.3 46.5C159.1 460.7 234.5 504 320 504s160.9-43.3 205.5-109.1c-3.2-2.7-15.9-9.2-28.3-46.5zM122.7 224.5C137.9 129.2 220.5 56 320 56c99.5 0 182.1 73.2 197.3 168.5 2.1-.2 5.2-2.4 49.5 7C554.4 106 448.7 8 320 8S85.6 106 73.2 231.4c44.5-9.4 47.1-7.2 49.5-6.9zM320 400c51.9 0 115.3-32.9 123.3-80 1.7-9.9-7.7-18.5-17.7-15.3-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.8-3.1-19.4 5.3-17.7 15.3 8 47.1 71.4 80 123.3 80zm130.3-168.3c3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.6 6.2 4.6 9.3 3.7zM240 189.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6z"/></svg>';



/***/ }),

/***/ "./app/viewFactory.js":
/*!****************************!*\
  !*** ./app/viewFactory.js ***!
  \****************************/
/*! exports provided: viewFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFactory", function() { return viewFactory; });
/* harmony import */ var _messageBox_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageBox.view.js */ "./app/messageBox.view.js");
/* harmony import */ var _messageBox_threadedView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageBox.threadedView.js */ "./app/messageBox.threadedView.js");
/* harmony import */ var _robot_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robot.view.js */ "./app/robot.view.js");
/* harmony import */ var _robot_threadedView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./robot.threadedView.js */ "./app/robot.threadedView.js");
/* harmony import */ var _world_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world.view.js */ "./app/world.view.js");
/* harmony import */ var _world_threadedView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./world.threadedView.js */ "./app/world.threadedView.js");








var viewFactory = {};

var views = {};
views.messageBoxView = _messageBox_view_js__WEBPACK_IMPORTED_MODULE_0__["messageBoxView"];
views.robotView = _robot_view_js__WEBPACK_IMPORTED_MODULE_2__["robotView"];
views.worldView = _world_view_js__WEBPACK_IMPORTED_MODULE_4__["worldView"];

viewFactory.loadThreaded = function() {

	views.messageBoxView = _messageBox_threadedView_js__WEBPACK_IMPORTED_MODULE_1__["messageBoxThreadedView"];
	views.robotView = _robot_threadedView_js__WEBPACK_IMPORTED_MODULE_3__["robotThreadedView"];
	views.worldView = _world_threadedView_js__WEBPACK_IMPORTED_MODULE_5__["worldThreadedView"];
}

viewFactory.getView = function(viewName) {

	return views[viewName];
}




/***/ }),

/***/ "./app/world.controller.js":
/*!*********************************!*\
  !*** ./app/world.controller.js ***!
  \*********************************/
/*! exports provided: worldController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldController", function() { return worldController; });
/* harmony import */ var _viewFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory.js */ "./app/viewFactory.js");
/* harmony import */ var _appState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appState.js */ "./app/appState.js");




var worldState = _appState_js__WEBPACK_IMPORTED_MODULE_1__["appState"].world;

var worldController = {};

worldController.load = function() {

    var worldView = _viewFactory_js__WEBPACK_IMPORTED_MODULE_0__["viewFactory"].getView("worldView");

    worldState.cellSize = worldView.renderGrid(worldState);
};




/***/ }),

/***/ "./app/world.threadedView.js":
/*!***********************************!*\
  !*** ./app/world.threadedView.js ***!
  \***********************************/
/*! exports provided: worldThreadedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldThreadedView", function() { return worldThreadedView; });


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


worldThreadedView.putDownTile = function(tileCount, robotState, worldState) {

	var message = {
		handler: "worldView",
		method: "putDownTile",
		parameters: [
			tileCount,
			robotState,
			worldState
		]
	}

	self.postMessage(message);
}


worldThreadedView.pickUpTile = function(previousTileCount, robotState, worldState) {

	var message = {
		handler: "worldView",
		method: "pickUpTile",
		parameters: [
			previousTileCount,
			robotState,
			worldState
		]
	}

	self.postMessage(message);
}




/***/ }),

/***/ "./app/world.view.js":
/*!***************************!*\
  !*** ./app/world.view.js ***!
  \***************************/
/*! exports provided: worldView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldView", function() { return worldView; });
/* harmony import */ var _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core/web/dom.js */ "./lib/core/web/dom.js");
/* harmony import */ var _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/core/extensions/core-math.js */ "./lib/core/extensions/core-math.js");
/* harmony import */ var _animation_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.view.js */ "./app/animation.view.js");





var worldView = {};

// Add 1 to account for the table border of 3px
var worldPlaceholderMargin = 20;
var worldTableMarginsTotal = (worldPlaceholderMargin + 1) * 2;

worldView.renderGrid = function(worldState) {

	var cellSize = calculateCellSize(worldState.rowsCount, worldState.columnsCount);
	var gridWidth = cellSize * worldState.columnsCount;

	var tableElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("table", { id: "kDroidGrid" });
	tableElement.style.width = gridWidth + "px";
	tableElement.style.border = "2px solid " + worldState.wallBackgroundColor;

	var tableCellElements = [];

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		var rowElement = document.createElement("tr");

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			var cellId = "cell-" + rowIndex + "-" + columnIndex;
			var tableCellElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("td", { id: cellId });

			tableCellElement.style.width = cellSize + "px";
			tableCellElement.style.backgroundColor = worldState.backgroundColor;
			tableCellElement.style.border = "1px solid " + worldState.borderBackgroundColor;

			rowElement.appendChild(tableCellElement);
			tableCellElements.push(tableCellElement);
		}

		tableElement.appendChild(rowElement);
	}

	var worldPlaceholderElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("div", { id: "worldPlaceholder" });
	document.body.appendChild(worldPlaceholderElement);

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
	var tileElement = _lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"].createElement("div", { id: tileId, className: "tile" });
	var tileWidth = _lib_core_extensions_core_math_js__WEBPACK_IMPORTED_MODULE_1__["coreMath"].pathagorinC(worldState.cellSize, worldState.cellSize);

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
	var targetCellElement = Object(_lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])("#" +targetCellId);

	targetCellElement.appendChild(tileElement);
	
	var keyframes = [
		{transform: "scale(0)", visibility: "visible"},
		{transform: "scale(1)", visibility: "visible"}
	]

    var options = {
        duration: worldState.duration / 2,
		easing: "linear"
	}

    _animation_view_js__WEBPACK_IMPORTED_MODULE_2__["animationView"].stackAnimation(tileElement, keyframes, options, function() {

		tileElement.style.visibility = "visible";
    });
}

worldView.pickUpTile = function(previousTileCount, robotState, worldState) {

	var tileId = "tile-" + robotState.rowIndex + "-" + robotState.columnIndex + "-" + previousTileCount;
	var tileElement = Object(_lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])("#" + tileId);

	var targetCellId = "cell-" + robotState.rowIndex + "-" + robotState.columnIndex;
	var targetCellElement = Object(_lib_core_web_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])("#" + targetCellId);
	
	var keyframes = [
		{transform: "scale(1)", visibility: "visible"},
		{transform: "scale(0)", visibility: "visible"}
	]

    var options = {
        duration: worldState.duration / 2,
		easing: "linear"
	}

    _animation_view_js__WEBPACK_IMPORTED_MODULE_2__["animationView"].stackAnimation(tileElement, keyframes, options, function() {

		targetCellElement.removeChild(tileElement);
    });
}




/***/ }),

/***/ "./appCommandsThreaded.js":
/*!********************************!*\
  !*** ./appCommandsThreaded.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.controller.js */ "./app/app.controller.js");
/* harmony import */ var _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/robot.controller.js */ "./app/robot.controller.js");




/***
 * For use with a web worker as in imported script.
 * Must be webpacked to remove all ES6 imports.
 */

self.setWorldSize = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setWorldStateSize.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setRandomWorldSize = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setRandomWorldStateSize.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setWorldSpeed = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setWorldStateSpeed.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setRobotIcon = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setRobotStateIconName.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setRandomRobotIcon = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setRandomRobotStateIconName.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setRobotDirection = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setRobotStateDirection.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setRandomRobotDirection = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setRandomRobotStateDirection.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.setTileColor = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].setTileBackgroundColor.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);
self.loadWorld = _app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"].loadThreaded.bind(_app_app_controller_js__WEBPACK_IMPORTED_MODULE_0__["appController"]);

self.move = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].move.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.isFrontClear = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].isFrontClear.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.isFrontBlocked = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].isFrontBlocked.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.turnLeft = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].turnLeft.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);

self.putDownTile = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].putDownTile.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.pickUpTile = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].pickUpTile.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.isOnTile = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].isOnTile.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);
self.isNotOnTile = _app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"].isNotOnTile.bind(_app_robot_controller_js__WEBPACK_IMPORTED_MODULE_1__["robotController"]);

/***/ }),

/***/ "./lib/core-vendor/web-animation-js/web-animation-extensions.js":
/*!**********************************************************************!*\
  !*** ./lib/core-vendor/web-animation-js/web-animation-extensions.js ***!
  \**********************************************************************/
/*! exports provided: webAnimationExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webAnimationExtensions", function() { return webAnimationExtensions; });

var webAnimationExtensions = {};

var nullTransformKeyframes = {
	transform: ["none", "none"]
};
var nullDurationOptions = {
	duration: 1
};

webAnimationExtensions.getTimelineCurrentTime = function(callback) {

	document.body.animate(nullTransformKeyframes, nullDurationOptions).onfinish = function() {

		callback(document.timeline.currentTime);
	}
}




/***/ }),

/***/ "./lib/core/collections/double-key-hash-set.js":
/*!*****************************************************!*\
  !*** ./lib/core/collections/double-key-hash-set.js ***!
  \*****************************************************/
/*! exports provided: DoubleKeyHashSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleKeyHashSet", function() { return DoubleKeyHashSet; });

function DoubleKeyHashSet(separater) {

	this.separater = "-";

	if (separater) {

		this.separater = separater.toString();
	}
}

DoubleKeyHashSet.prototype.add = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	this[key] = null;
}

DoubleKeyHashSet.prototype.remove = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	delete this[key];
}

DoubleKeyHashSet.prototype.includesKey = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	return this.hasOwnProperty(key);
}

function getKey(keyLeft, keyRight) {

	return keyLeft + "-" + keyRight;
}




/***/ }),

/***/ "./lib/core/extensions/core-math.js":
/*!******************************************!*\
  !*** ./lib/core/extensions/core-math.js ***!
  \******************************************/
/*! exports provided: coreMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreMath", function() { return coreMath; });

var coreMath = {};

coreMath.randomBoolean = function(percent) {

	return Math.random() >= .5;
};

coreMath.randomBooleanForPercent = function(percent) {

	return Math.random() < percent / 100;
};

/** The min and max numbers are included in the possible numbers. */
coreMath.randomInteger = function(min, max) {
	
	min = Math.ceil(min);
	max = Math.floor(max) + 1;

	return Math.floor(Math.random() * (max - min)) + min;
}

coreMath.pathagorinC = function(a, b) {

	return Math.sqrt((a * a) + (b * b));
}



/***/ }),

/***/ "./lib/core/extensions/core-object.js":
/*!********************************************!*\
  !*** ./lib/core/extensions/core-object.js ***!
  \********************************************/
/*! exports provided: coreObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreObject", function() { return coreObject; });

var coreObject = {}

coreObject.toArray = function(object) {

	var values = [];
	var keys = Object.keys(object);

	for (var index in keys) {

		var key = keys[index];
		var value = object[key];

		values.push(value);
	}

	return values;
}

coreObject.forEach = function(object, callback) {

	Object.keys(object).forEach(function(key) {

		var value = object[key];

		callback(key, value);

	});
}




/***/ }),

/***/ "./lib/core/extensions/core-string.js":
/*!********************************************!*\
  !*** ./lib/core/extensions/core-string.js ***!
  \********************************************/
/*! exports provided: coreString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreString", function() { return coreString; });
var coreString = {};

coreString.addNumberInString = function(string, number) {

	var result = string.replace(/\d+/, function(value) {

		var parsedNumber = parseFloat(value);

		if (!isNaN(parsedNumber)) {

			value = parsedNumber + number;
		}

		return value;
	});

	return result;
}




/***/ }),

/***/ "./lib/core/web/dom.js":
/*!*****************************!*\
  !*** ./lib/core/web/dom.js ***!
  \*****************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony import */ var _extensions_core_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/core-object.js */ "./lib/core/extensions/core-object.js");



var dom = function(query, sourceElement) {

	var queryElement = (sourceElement) ? sourceElement : document;

	var elements = queryElement.querySelectorAll(query);

	if (elements.length == 0) {

		elements = null;

	} else if (elements.length === 1) {

		elements = elements[0];
	}

	return elements;
};

dom.createElement = function(tagName, elementProperties, children) {

	var element = document.createElement(tagName);

	if (elementProperties) {

		_extensions_core_object_js__WEBPACK_IMPORTED_MODULE_0__["coreObject"].forEach(elementProperties, function(key, value) {

			element[key] = value;
		});
	}

	if (children) {

		children.forEach(function(child) {

			element.appendChild(child);
		});
	}

	return element
}

dom.appendHtml = function(element, html) {

	var template = document.createElement("template");
	template.innerHTML = html;

	element.appendChild(template.content);
}

dom.appendScript = function(src, callback) {

	var scriptElement = dom.createElement("script", { src: src });

	scriptElement.addEventListener("load", function() {

		callback();
	});

	document.body.appendChild(scriptElement);
}

dom.getFormData = function(htmlFormElement) {

	var data = {};

	if (htmlFormElement && htmlFormElement.elements) {

		var elements = htmlFormElement.elements;

		for (var index = 0; index < elements.length; index++) {

			var element = elements[index];

			if (element.name) {

				var value = this.getFormDataValue(element);

				if (value !== null) {

					data[element.name] = value;
				}
			}
		}
	}

	return data;
};

dom.getFormDataValue = function(element) {

	var value = element.value;

	if (element.nodeName === "INPUT") {

		if (element.type === "radio") {

			value = (element.checked) ? element.value : null;

		} else if (element.type === "checkbox") {

			value = element.checked;
		}
	}

	return value;
}

dom.getRadioValue = function(htmlCollection) {

	var value = null;

	if (htmlCollection) {

		for (var index = 0; index < htmlCollection.length; index++) {

			var element = htmlCollection[index];

			if (element.checked) {

				value = element.value;
				break;
			}
		}
	}

	return value;
}

dom.setRadioValue = function(htmlCollection, value) {

	if (htmlCollection) {

		for (var index = 0; index < htmlCollection.length; index++) {

			var element = htmlCollection[index];

			if (element.value === value) {

				element.checked = true;
				break;
			}
		}
	}
}




/***/ })

/******/ });
//# sourceMappingURL=kDroid.js.map