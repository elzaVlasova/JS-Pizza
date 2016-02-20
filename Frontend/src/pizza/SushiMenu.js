
var Templates = require('../Templates');
var SushiCart = require('./SushiCart2');
var Sushi_List = require('../Sushi_List');

var $sushi_list = $("#sushi_list");
var $sushi_menu = $("#sushi_menu");

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
    $sushi_menu.find(".number-of-sushi-menu").text(list.length);
    console.log("Show sushi list "+ list.length);

}

//vegetable
function filterSushi(filter) {
    var sushi_shown = [];

    if(!filter) {
        showSushiList(Sushi_List);
        return;
    }
    console.log(filter);

    Sushi_List.forEach(function(sushi){
        if(sushi.content[filter])
            sushi_shown.push(sushi);
    });

    showSushiList(sushi_shown)
}

function makeFilterActive(filter){
    $('#all').closest('li').removeClass("li-in-active");
    $('#vegetable').parent().removeClass("li-in-active");
    $('#avocado').parent().removeClass("li-in-active");
    $('#mushroom').parent().removeClass("li-in-active");
    $('#greenery').parent().removeClass("li-in-active");
    $('#additional').parent().removeClass("li-in-active");

    $('#'+ filter).closest('li').addClass("li-in-active");

    console.log("Active: "+filter);

}

function initialiseMenu(){
    console.log('lets start');
    showSushiList(Sushi_List);
    console.log('init');
    console.log(Sushi_List.length);

    $('#all').click(function(){
        showSushiList(Sushi_List);
        makeFilterActive('all')
    });

    $('#vegetable').click(function(){
        console.log('vegetable');
        filterSushi('vegetable');
        makeFilterActive('vegetable');
    });

    $('#avocado').click(function(){
        console.log('avocado');
        filterSushi('avocado');
        makeFilterActive("avocado");
    });

    $('#mushroom').click(function(){
        console.log('mushroom');
        filterSushi('mushroom');
        makeFilterActive('mushroom');
    });

    $('#greenery').click(function(){
        console.log('greenery');
        filterSushi('greenery');
        makeFilterActive('greenery');
    });

    $('#additional').click(function(){
        console.log('additional');
        filterSushi('additional');
        makeFilterActive('additional');
    });



}

exports.filterSushi = filterSushi;
exports.initialiseMenu = initialiseMenu;