

function AppError(message) {

	// NOTE: The behavior of calling the Error constructor is different from normal
	//  inheritance.  The properties are not being set on the this using:
	//  Error.call(this, message);

	this.innerError = new Error(message);
	this.message = this.innerError.message;
	this.stack = this.innerError.stack;
}

AppError.prototype = Object.create(Error.prototype);


export { AppError }