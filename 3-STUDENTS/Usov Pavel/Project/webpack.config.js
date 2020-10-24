const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
       		template: path.resolve(__dirname, 'public', 'index.html')
     	}),
     	new CopyPlugin({
     		patterns: [{from: './src/assets/img', to: './img'}]
     	}),
     	new MiniCssExtractPlugin({
      		filename: 'css/[name].css',
      		chunkFilename: '[id].css',
    	}),
	],
	module: {
    	rules: [
      		{
        		test: /\.css$/i,
        		use: [MiniCssExtractPlugin.loader, 'css-loader'],
      		},
      		{
      			test: /\.(png|jpg|svg|jpe?g|gif)$/i,
      			loader: 'file-loader',
      			options: {
          			outputPath: 'img',
        		},
      			// use: [
         //  			{
         //    			loader: 'file-loader',
         //    			options: {
         //  					outputPath: 'img',
        	// 			},
         //  			},
        	// 	],
      		}
    	],
  	},
};