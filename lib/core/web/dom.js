
import { coreObject } from "../extensions/core-object.js"

var dom = function(query, sourceElement) {

	var queryElement = (sourceElement) ? sourceElement : document;

	var elements = queryElement.querySelectorAll(query);

	if (elements.length == 0) {

		elements = null;

	} else if (elements.length === 1) {

		elements = elements[0];
	}

	return elements;
};

dom.createElement = function(tagName, elementProperties, children) {

	var element = document.createElement(tagName);

	if (elementProperties) {

		coreObject.forEach(elementProperties, function(key, value) {

			element[key] = value;
		});
	}

	if (children) {

		children.forEach(function(child) {

			element.appendChild(child);
		});
	}

	return element
}

dom.appendHtml = function(element, html) {

	var template = document.createElement("template");
	template.innerHTML = html;

	element.appendChild(template.content);
}

dom.appendScript = function(src, callback) {

	var scriptElement = dom.createElement("script", { src: src });

	scriptElement.addEventListener("load", function() {

		callback();
	});

	document.body.appendChild(scriptElement);
}

dom.getFormData = function(htmlFormElement) {

	var data = {};

	if (htmlFormElement && htmlFormElement.elements) {

		var elements = htmlFormElement.elements;

		for (var index = 0; index < elements.length; index++) {

			var element = elements[index];

			if (element.name) {

				var value = this.getFormDataValue(element);

				if (value !== null) {

					data[element.name] = value;
				}
			}
		}
	}

	return data;
};

dom.getFormDataValue = function(element) {

	var value = element.value;

	if (element.nodeName === "INPUT") {

		if (element.type === "radio") {

			value = (element.checked) ? element.value : null;

		} else if (element.type === "checkbox") {

			value = element.checked;
		}
	}

	return value;
}

dom.getRadioValue = function(htmlCollection) {

	var value = null;

	if (htmlCollection) {

		for (var index = 0; index < htmlCollection.length; index++) {

			var element = htmlCollection[index];

			if (element.checked) {

				value = element.value;
				break;
			}
		}
	}

	return value;
}

dom.setRadioValue = function(htmlCollection, value) {

	if (htmlCollection) {

		for (var index = 0; index < htmlCollection.length; index++) {

			var element = htmlCollection[index];

			if (element.value === value) {

				element.checked = true;
				break;
			}
		}
	}
}


export { dom }