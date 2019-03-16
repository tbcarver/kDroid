
import { robotView } from "./robot.view.js";
import { robotThreadedView } from "./robot.threadedView.js";
import { worldView } from "./world.view.js";
import { worldThreadedView } from "./world.threadedView.js";

var viewFactory = {};

var views = {};
views.robotView = robotView;
views.worldView = worldView;

viewFactory.loadThreaded = function() {

	views.robotView = robotThreadedView;
	views.worldView = worldThreadedView;
}

viewFactory.getView = function(viewName) {

	return views[viewName];
}


export { viewFactory }