
import { HandlebarsView } from "../../lib/core-vendor/handlebars/handlebars-view.js";
import { dom } from "../../lib/core/web/dom.js";

var messageBoxView = new HandlebarsView("app/components/message-box.template.hbs");

messageBoxView.render = function(messageData) {

	var placeholderElement = dom("#messageBoxPlaceholder");

	if (messageData && messageData.message) {

		this.renderToInnerHtml(messageData, placeholderElement);

		dom("#messageBoxCloseLink", placeholderElement).addEventListener("click", onClose);

	} else {

		placeholderElement.innerHTML = "";
	}
};

function onClose(event) {

	event.preventDefault();

	var placeholderElement = dom("#messageBoxPlaceholder");

	placeholderElement.innerHTML = "";
}


export { messageBoxView }