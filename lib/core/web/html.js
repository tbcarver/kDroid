
import { htmlEncode } from "./html-encode.js"


var html = {};

html.toHtml = function(value) {

	var value = htmlEncode(value);

	value = value.replace(/\n/g, "<br>");

	return value;
}


export { html }