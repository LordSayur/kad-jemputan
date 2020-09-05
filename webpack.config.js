var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	entry: [ __dirname + '/src/js/main.js', __dirname + '/src/scss/main.scss' ],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: { outputPath: 'css/', name: '[name].min.css' }
					},
					'sass-loader'
				]
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
		})
	]
};
