var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
//	设置视图根目录
app.set('views','./view');
//	设置模板引擎
app.set('view engine','jade');
//	监听端口
app.listen(port);

console.log('server is running at port' + port);