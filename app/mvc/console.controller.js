
import { appController } from "../app.controller.js";
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

consoleController.logInternal = function(message, isError) {

    if (consoleView) {

        consoleView.logInternal(message, isError);
    }
};


export { consoleController }