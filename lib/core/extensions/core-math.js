
var coreMath = {};

coreMath.randomBoolean = function(percent) {

	return Math.random() >= .5;
};

coreMath.randomBooleanForPercent = function(percent) {

	return Math.random() < percent / 100;
};

/** The min and max numbers are included in the possible numbers. */
coreMath.randomInteger = function(min, max) {
	
	min = Math.ceil(min);
	max = Math.floor(max) + 1;

	return Math.floor(Math.random() * (max - min)) + min;
}

coreMath.randomOddInteger = function(min, max) {

	return (Math.ceil(coreMath.randomInteger(min, max) / 2) * 2) - 1;
}

coreMath.randomEvenInteger = function(min, max) {

	return (Math.ceil(coreMath.randomInteger(min, max) / 2) * 2);
}

coreMath.pythagoreanC = function(a, b) {

	return Math.sqrt((a * a) + (b * b));
}

export { coreMath }