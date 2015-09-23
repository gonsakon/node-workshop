// node 預設模組
var path = require('path');

// NPM 模組
var app = require('express')();
var partials = require('express-partials');
var static = require('serve-static');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');    

// router設定
var page = require('./routes/page');

// parse application/x-www-form-urlencoded 
// 讓回傳的值可以解析 json與 urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

// 版型設定
app.use(partials());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//設定預設指定目錄
app.use( static( path.join( __dirname, 'public' )));

//預設favicon.ico位置
app.use(favicon(__dirname + '/public/favicon.ico'));

//路徑設定，有get與post指令
app.get('/', page.index);
app.post('/post',page.post);
app.post('/postAjax',page.postAjax);
app.get('/getAjax',page.getAjax);
app.get('/getJson', page.getJson);

//偵測3000 port
app.listen(3000);

