
var webAnimationExtensions = {};

var nullTransformKeyframes = {
	transform: ["none", "none"]
};
var nullDurationOptions = {
	duration: 1
};

webAnimationExtensions.getTimelineCurrentTime = function(callback) {

	document.body.animate(nullTransformKeyframes, nullDurationOptions).onfinish = function() {

		callback(document.timeline.currentTime);
	}
}


export { webAnimationExtensions }