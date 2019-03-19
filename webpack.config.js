
module.exports = {
	mode: 'development',
	entry: {
		'kDroidAppThreaded.js': './appThreaded.js',
		'kDroidFunctions.js': './appThreadedCommands.js'
	  },
	output: {
		filename: '[name]'
	},
    devtool: "source-map"
};