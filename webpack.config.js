var Webpack = require('webpack');
var path = require('path');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.js',
	output:{
		path: __dirname + '/dist/',
		filename: 'newbundle.js',
		publicPath:'/dist/'  //公共文件生成的地址
	},

	devServer:{
		contentBase:"./dist",  //本地服务器所加载的页面所在的目录
		colors: true,  //终端输出结果为彩色？
		historyApiFallback: true,  //不跳转
		inline: true, //实时刷新
		progress:true,
		hot:true,
	},

	module:{
		loaders:[
			{test:/\.(png|jpg)$/,loaders:'url?limit=40000'},
			//转化ES6语法
			{test:/\.js$/, loader:'babel',exclude:/node_modules/},
			{test: /\.vue$/, loader:'vue'},
			// 编译css并自动添加css前缀？
			{test:/\.css$/,loader:'style!css!autoprefixer'},
			{text:/\.scss$/,loader:'style!css!sass?sourceMap'},
			{text:/\.(html|tpl)$/, loader:'html-loader'}, //html模板编译
		]
	},
	// 单独vue配置，好像没什么必要
	vue:{
		loaders:{
			css:'style!css!autoprefixer',
		}
	},
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			filter: __dirname + '/app/filters',  //可以使用别名来代表设定的路径以及其他
			components: __dirname+'/app/components'
		}
	},
	plugins:[
		new Webpack.BannerPlugin("这里是打包文件头部注释！"),  //注意这是一个数组.. 这些文字会出现在bundle.js头部
		new Webpack.HotModuleReplacementPlugin()
	]

}