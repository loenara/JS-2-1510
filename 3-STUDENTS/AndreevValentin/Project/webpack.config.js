const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js"
	},
	plugins: [
		new CopyWebpackPlugin({patterns: [
			{from: "./src/assets/img", to: "img"}
		]}),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new MiniCssExtractPlugin({
			file: "css/[name].css",
			chunkFilename: "[id].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpe?g|svg)$/i,
				use: ["file-loader"]
			}
		]
	}
};
