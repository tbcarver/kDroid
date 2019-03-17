
import { animationView } from "./mvc/animation.view.js";
import { animationThreadedView } from "./mvc/animation.threadedView.js";
import { messageBoxView } from "./mvc/messageBox.view.js";
import { messageBoxThreadedView } from "./mvc/messageBox.threadedView.js";
import { robotView } from "./mvc/robot.view.js";
import { robotThreadedView } from "./mvc/robot.threadedView.js";
import { worldView } from "./mvc/world.view.js";
import { worldThreadedView } from "./mvc/world.threadedView.js";

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