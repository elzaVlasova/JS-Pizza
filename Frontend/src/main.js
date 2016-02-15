/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/SushiMenu');
    var PizzaCart = require('./pizza/SushiCart');


    /*varAPI = require('./API');

    API.getPizzaList(function(err, pizza_list){
        if(err){
            return console.error(err);
        }

        console.log("Pizza List", pizza_list);
        //PizzaCart.initialisecar
        //
    });*/

    var Pizza_List = require('./Pizza_List');

    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();


});