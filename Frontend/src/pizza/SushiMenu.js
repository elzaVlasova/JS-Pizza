
var Templates = require('../Templates');
var SushiCart = require('./SushiCart');
var Sushi_List = require('../Sushi_List');

var $sushi_list = $("#sushi_list");
//var Cart = getPizzaInCart();

function showSushiList(list){
    $sushi_list.html("");

    function showOneSushi(sushi){
        var html_code = Templates.SushiMenu_OneItem({pizza: sushi});

        var $node = $(html_code);

        $node.find(".buy-small-portion").click(function(){
            console.log('small');
            SushiCart.addToCart(sushi, SushiCart.SushiSize.Small);
        });

        $node.find(".buy-big-portion").click(function(){
            console.log('big');
            SushiCart.addToCart(sushi, SushiCart.SushiSize.Big);
        });

        $sushi_list.append($node);
    }

    list.forEach(showOneSushi);

}

function filterSushi(filter) {
    var sushi_shown = [];

    Sushi_List.forEach(function(pizza){
        //$node.find(".")

    });

    showSushiList(sushi_shown)
}

function initialiseMenu(){
    showSushiList(Sushi_List);
    console.log('init');
    console.log(Sushi_List.length);
}

exports.filterSushi = filterSushi;
exports.initialiseMenu = initialiseMenu;