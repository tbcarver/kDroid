
module.exports = {
	mode: 'development',
	entry: {
		'kDroidApp.js': './app.js',
		'threaded/kDroidAppThreaded.js': './appThreaded.js',
		'threaded/kDroidFunctions.js': './appThreadedInclude.js'
	  },
	output: {
		filename: '[name]'
	},
    devtool: "source-map"
};