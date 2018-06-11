var path = require("path")

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		// webpack needs an absolute path, therefore we utilize the path.resolve
		path: path.resolve(__dirname, "./app/temp/scripts"),
		// [name] is dynamic and can store multiple files
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}