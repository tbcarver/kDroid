
import { webAnimationExtensions } from "../lib/coreVendor/webAnimationJs/webAnimationExtensions.js";

var animationView = {
	currentEndTime: 0
};

animationView.stackAnimation = function(element, keyFrames, options, onFinishHandler) {

	webAnimationExtensions.getTimelineCurrentTime(function(currentTime) {

		var delay = 0;

		if (this.currentEndTime === 0) {

			var delay = currentTime;

		} else if (currentTime < this.currentEndTime) {

			delay = this.currentEndTime - currentTime;
		}

		options.delay = delay;

		element.animate(keyFrames, options).onfinish = onFinishHandler;
		
		this.currentEndTime = delay + options.duration + currentTime;

	}.bind(this));
}


export { animationView }