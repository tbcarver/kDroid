
module.exports = {
	mode: 'development',
	entry: {
		'kDroidApp.js': './app.js',
		'kDroidAppThreaded.js': './appThreaded.js',
		'kDroidFunctions.js': './appThreadedWorker.js'
	  },
	output: {
		filename: '[name]'
	},
    devtool: "source-map"
};