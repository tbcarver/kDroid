
function test(robotController) {

	robotController.move();
	robotController.move();

	window.setTimeout(function(){

		robotController.move();
		robotController.move();
	}, 3000);
}


export { test }