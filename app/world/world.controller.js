
import { messageBoxController } from "../components/message-box.controller.js"
import { worldView } from "./world.view.js";

var worldController = {};

worldController.initialize = function(callback) {

    worldView.initialize(function() {

        callback();
    });
};

worldController.load = function() {

    worldView.render();
};


export { worldController }