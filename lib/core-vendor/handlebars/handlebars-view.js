
import { templateEngine } from "./template-engine.js";
import { EventEmitter } from "../../core/system/event-emitter.js"

function HandlebarsView(templateUrl, placeholderElementId) {

	this.templateUrl = templateUrl;
	this.placeholderElementId = placeholderElementId;
	this.placeholderElement = null;
	this.compiledTemplate = null;
	this.eventEmitter = new EventEmitter();
}

HandlebarsView.prototype.initialize = function(callback) {

	templateEngine.compile(this.templateUrl, function(compiledTemplate) {

		this.compiledTemplate = compiledTemplate;

		if (this.placeholderElementId) {

			this.placeholderElement = document.getElementById(this.placeholderElementId);
		}

		if (callback) {

			callback();
		}

	}.bind(this));
}

HandlebarsView.prototype.renderToInnerHtml = function(data, placeholderElement) {

	var element = placeholderElement;

	if (!element) {

		element = this.placeholderElement;
	}

	if (element) {

		element.innerHTML = templateEngine.buildHtml(this.compiledTemplate, data);
		this.eventEmitter.emit("render", { placeholderElement: element });
	}
}

HandlebarsView.prototype.addRenderListener = function(listener) {

	this.eventEmitter.addListener("render", listener);
}


export { HandlebarsView }