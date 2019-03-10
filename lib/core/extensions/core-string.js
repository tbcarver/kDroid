var coreString = {};

coreString.addNumberInString = function(string, number) {

	var result = string.replace(/\d+/, function(value) {

		var parsedNumber = parseFloat(value);

		if (!isNaN(parsedNumber)) {

			value = parsedNumber + number;
		}

		return value;
	});

	return result;
}


export { coreString }