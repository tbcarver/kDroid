import { ajax } from "./ajax.js";
import { EventEmitter } from "../system/event-emitter.js"

function HtmlView(htmlUrl, placeholderElementId) {

	this.htmlUrl = htmlUrl;
	this.html = null;
	this.placeholderElementId = placeholderElementId;
	this.placeholderElement = null;
	this.eventEmitter = new EventEmitter();
}

HtmlView.prototype.initialize = function(callback) {

	ajax.get(this.htmlUrl, function(responseText) {

		this.html = responseText;

		if (this.placeholderElementId) {

			this.placeholderElement = document.getElementById(this.placeholderElementId);
		}

		if (callback) {

			callback();
		}
	}.bind(this));
}

HtmlView.prototype.renderToInnerHtml = function(placeholderElement) {

	var element = placeholderElement;

	if (!element) {

		element = this.placeholderElement;
	}

	if (element) {

		element.innerHTML = this.html;
		this.eventEmitter.emit("render", { placeholderElement: element });
	}
}

HtmlView.prototype.addRenderListener = function(listener) {

	this.eventEmitter.addListener("render", listener);
}


export { HtmlView }