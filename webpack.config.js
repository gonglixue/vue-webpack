var Webpack = require('webpack');
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.js',
	output:{
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer:{
		contentBase:"./public",  //本地服务器所加载的页面所在的目录
		colors: true,  //终端输出结果为彩色？
		historyApiFallback: true,  //不跳转
		inline: true, //实时刷新
		progredd:true,
		hot:true,
	},

	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css'],
			},
			{
				test:/\.(png|jpg)$/,
				loaders:'url?limit=40000'
			}
		]
	},
	plugins:[
		new Webpack.BannerPlugin("这里是打包文件头部注释！")  //注意这是一个数组.. 这些文字会出现在bundle.js头部
	]

}