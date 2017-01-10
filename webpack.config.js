module.exports = {
	entry: __dirname + "/app/main.js", //入口
	output:{
		path:__dirname + "/public",
		filename: "bundle.js"//打包后输出的文件名
	}
}