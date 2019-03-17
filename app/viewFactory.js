
import { animationView } from "./animation.view.js";
import { animationThreadedView } from "./animation.threadedView.js";
import { messageBoxView } from "./messageBox.view.js";
import { messageBoxThreadedView } from "./messageBox.threadedView.js";
import { robotView } from "./robot.view.js";
import { robotThreadedView } from "./robot.threadedView.js";
import { worldView } from "./world.view.js";
import { worldThreadedView } from "./world.threadedView.js";

var viewFactory = {};

var views = {};
views.animationView = animationView;
views.messageBoxView = messageBoxView;
views.robotView = robotView;
views.worldView = worldView;

viewFactory.loadThreaded = function() {

	views.animationView = animationThreadedView;
	views.messageBoxView = messageBoxThreadedView;
	views.robotView = robotThreadedView;
	views.worldView = worldThreadedView;
}

viewFactory.getView = function(viewName) {

	return views[viewName];
}


export { viewFactory }