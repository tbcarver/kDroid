
module.exports = {
	mode: 'development',
	entry: {
		'kDroidApp.js': './app.js',
		'kDroidAppThreaded.js': './appThreaded.js',
		'kDroidFunctions.js': './appThreadedInclude.js'
	  },
	output: {
		filename: '[name]'
	},
    devtool: "source-map"
};