const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: [ __dirname + '/src/js/main.js' ],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	watchOptions: {
		aggregateTimeout: 600,
		ignored: [ 'dist/**', 'node_modules/**' ]
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: 'Omar & Amirah',
			myPageHeader: 'Hello World',
			template: './src/index.html',
			filename: './index.html' //relative to root of the application
		}),
		new CopyWebpackPlugin({
			patterns: [ { from: __dirname + '/src/assets', to: __dirname + '/dist/assets' } ]
		})
	]
};
