
import { ajax } from "../../core/web/ajax.js";

var templateEngine = {};

templateEngine.compile = function(templateUrl, callback) {

	ajax.get(templateUrl, function(responseText) {

		var compiledTemplate = Handlebars.compile(responseText);

		callback(compiledTemplate);
	})
}

templateEngine.buildHtml = function(compiledTemplate, data) {

	return compiledTemplate(data);
}


export { templateEngine }