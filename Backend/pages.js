/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Вибір Піци',
        showOrderButton: false
    });
};

exports.orderPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Замовлення',
        showOrderButton: true
    });
};