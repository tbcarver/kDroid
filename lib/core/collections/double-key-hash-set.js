
function DoubleKeyHashSet(separater) {

	this.separater = "-";

	if (separater) {

		this.separater = separater.toString();
	}
}

DoubleKeyHashSet.prototype.add = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	this[key] = null;
}

DoubleKeyHashSet.prototype.remove = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	delete this[key];
}

DoubleKeyHashSet.prototype.includesKey = function(keyLeft, keyRight) {

	var key = getKey(keyLeft, keyRight);

	return this.hasOwnProperty(key);
}

function getKey(keyLeft, keyRight) {

	return keyLeft + "-" + keyRight;
}


export { DoubleKeyHashSet };