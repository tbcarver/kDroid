
import { HashTable } from "../collections/hash-table.js";

function EventEmitter() {
	this.eventListeners = new HashTable();
}

EventEmitter.prototype.addListener = function(eventName, listener) {

	if (!this.eventListeners.includesKey(eventName)) {

		this.eventListeners[eventName] = [];
	}

	var eventListenerArray = this.eventListeners[eventName];

	eventListenerArray.push(listener);
}

EventEmitter.prototype.emit = function(eventName, event) {

	if (this.eventListeners.includesKey(eventName)) {

		var eventListenerArray = this.eventListeners[eventName];

		for (var index = 0; index < eventListenerArray.length; index++) {

			var eventListener = eventListenerArray[index];

			eventListener(event);
		}
	}
}


export { EventEmitter }