
module.exports = {
	mode: 'development',
	entry: {
		'kDroidApp.js': './app.js',
		'kDroidAppThreaded.js': './appThreaded.js',
		'kDroidFunctions.js': './appThreadedCommands.js'
	  },
	output: {
		filename: '[name]'
	},
    devtool: "source-map"
};