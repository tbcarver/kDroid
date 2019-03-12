
import { dom } from "../lib/core/web/dom.js";

var appView = {};

appView.render = function() {

	var worldPlaceholderElement = dom.createElement("div", { id: "worldPlaceholder" });
	
	document.body.appendChild(worldPlaceholderElement);
}


export { appView }