//首頁

exports.index = function(req, res) {
    var data = ['王小名', '李小花', '菜頭'];
    res.render('pages/index', {
        ogheadTitle: '首頁內容',
        listdata: data
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
