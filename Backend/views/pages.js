
exports.startPage = function(req, res) {
    res.render('startPage', {
        pageTitle: 'Travel'
    });
};

exports.wayPage = function(req, res) {
    //TODO: implement
    res.render('wayPage', {
        pageTitle: 'Way'
    });
};
