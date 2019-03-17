
import { webAnimationExtensions } from "../lib/core-vendor/web-animation-js/web-animation-extensions.js";

var animationView = {
	currentEndTime: 0,
	animations: [],
	canAnimate: true
};

animationView.stackAnimation = function(element, keyframes, options, onFinishHandler) {

	if (this.canAnimate) {

		webAnimationExtensions.getTimelineCurrentTime(function(currentTime) {

			if (this.canAnimate) {

				var delay = 0;

				if (currentTime < this.currentEndTime) {

					delay = this.currentEndTime - currentTime;
				}

				options.delay = delay;

				var animation = element.animate(keyframes, options);

				animation.onfinish = onFinishHandler;

				this.animations.push(animation);

				this.currentEndTime = delay + options.duration + currentTime;
			}

		}.bind(this));
	}
}

animationView.cancelAnimating = function() {

	this.canAnimate = false;

	for (var index = 0; index < this.animations.length; index++) {

		var animation = this.animations[index];

		if (animation.playState !== "finished") {

			animation.cancel();
		}
	}
}


export { animationView }