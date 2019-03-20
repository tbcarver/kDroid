
var separater = "-";

function DoubleKeyHashSet(separater) {

	if (separater) {

		separater = separater.toString();
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

	return keyLeft + separater + keyRight;
}

function parseKey(key) {

	var keys = key.split(separater);

	return {
		leftKey: keys[0],
		rightKey: keys[1]
	};
}

DoubleKeyHashSet.prototype.forEach = function(callback) {

	var keys = Object.keys(this);
	
	for (var index = 0; index < keys.length; index++) {

		var parsedKey = parseKey(keys[index]);

		callback(parsedKey.leftKey, parsedKey.rightKey);
	}
}


export { DoubleKeyHashSet };