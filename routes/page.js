//首頁

//取得檔案列表
var fs = require('fs');

exports.index = function(req, res) {
    var data = ['王小名', '李小花', '菜頭'];

    fs.readdir(__dirname + '/public/upload/', function(err, files) {

        var fileList = [];

        for(var f in files){
            var extension = files[f].split('.').pop().toLowerCase();

            if (["pdf", "doc", "docx"].indexOf(extension) != -1){
                fileList.push(files[f]);
            }
            
        }

        res.render('pages/index', {
            ogheadTitle: '首頁內容',
            listdata: data,
            fileList: fileList
        });
    });

};

//傳統輸入 

exports.post = function(req, res) {
    console.log(req.body);
    if (req.body.password == 1234) {
        res.render('pages/success');
    } else(
        res.render('pages/error')
    );

};

exports.postAjax = function(req, res) {
    // ajax
    if (req.body.password == 1234) {
        res.send('success');
    } else(
        res.send('error')
    );
};

//get取得資料
exports.getAjax = function(req, res) {
    res.send([{
        name: '王小名',
        tel: '0922194720'
    }, {
        name: '李小花',
        tel: '0983026183'
    }, {
        name: '王大雄',
        tel: '0929735162'
    }]);
};

//get取得Json
exports.getJson = function(req, res){
    var tours = [
        { id: 0, name: 'Hood River', price: 99.99 },
        { id: 1, name: 'Oregon Coast', price: 149.95}
    ]

    res.json(tours);
}

//上傳檔案
var jqupload = require('jquery-file-upload-middleware');

exports.upload = function(req, res, next){

    jqupload.fileHandler({
        uploadDir: function(){
            return __dirname + '/public/upload/';
        },
        uploadUrl: function(){
            return '/upload';
        }
    })(req, res, next);
}
