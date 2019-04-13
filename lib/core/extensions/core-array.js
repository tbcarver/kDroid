
var coreArray = {}

coreArray.copy = function(source) {

	var index = 0;
	var copiedArray = [];

	while (index < source.length) {

		copiedArray[index] = source[index];
		index++;
	}

	return copiedArray;
}

coreArray.deepCopy = function(source) {

	var index = 0;
	var copiedArray = [];

	while (index < source.length) {

		if (Array.isArray(source[index])) {

			copiedArray[index] = this.deepCopy(source[index]);

		} else {

			copiedArray[index] = source[index];
		}

		index++;
	}

	return copiedArray;
}


export { coreArray }