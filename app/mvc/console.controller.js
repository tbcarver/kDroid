
import { appController } from "../app.controller.js";
import { appState } from "../appState.js";
import { viewFactory } from "../viewFactory.js";

var consoleView;

var consoleController = {};

consoleController.load = function() {

    consoleView = viewFactory.getView("consoleView");

    consoleView.render();
};

consoleController.log = function(message, color) {

    appController.assertMaxCommands();

    if (consoleView) {

        consoleView.log(message, color);
    }
};

consoleController.logInternal = function(message, color, isError) {

    if (consoleView) {

        consoleView.logInternal(message, color, isError);
    }
};

consoleController.logQuestion = function(message) {

    if (consoleView) {

        consoleView.logQuestion(message);
    }
};

consoleController.logAnswer = function(message) {

    appController.assertMaxCommands();

    if (consoleView) {

        appState.console.answers.push(message);
        consoleView.logAnswer(message);
    }
};


export { consoleController }