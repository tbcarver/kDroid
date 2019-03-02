
import { HandlebarsView } from "../../lib/core-vendor/handlebars/handlebars-view.js";

var worldView = new HandlebarsView("app/world/world.template.hbs", "appPlaceHolder");

worldView.render = function(data) {

	this.renderToInnerHtml(data);
};

export { worldView }