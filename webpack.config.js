module.exports = {
	mode: 'development',
	entry: './appCommandsThreaded.js',
	output: {
		filename: 'kDroid.js',
		path: __dirname + '/dist'
	},
    devtool: "source-map"
};