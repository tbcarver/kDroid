
import { dom } from "../lib/core/web/dom.js";

var messageBoxView = {};

messageBoxView.render = function(message) {

	if (message) {

		this.messageBoxElement.innerHTML = message;
        this.messageBoxElement.style.display = "block";

	} else {

        this.messageBoxElement.style.display = "none";
	}
};

messageBoxView.initializeMessageBoxElement = function() {

    this.messageBoxElement = dom.createElement("div", { id: "messageBox" });

    var worldTableElement = dom("#worldPlaceHolder");
    worldTableElement.appendChild(this.messageBoxElement);
}