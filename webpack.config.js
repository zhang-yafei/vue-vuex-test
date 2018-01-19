const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"demo.js"
	},
	plugins: [
        new HtmlWebpackPlugin({
            title: 'vue demo',
            template: 'index.html'
        })
    ],
    devServer:{
        contentBase:"./dist"
    },
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
        alias: {
            'vue$': 'vue-vuex-test/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
}