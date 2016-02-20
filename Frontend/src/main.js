/**
 * Created by chaika on 25.01.16.
 */

$(function () {
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/SushiMenu');
    var PizzaCart = require('./pizza/SushiCart2');


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


    require('./GoogleMap');
});


$('#oneButton').click(function () {
    API.createOrder({
        name: "name",
        phone: "ph",
        pizza: PizzaCart.getPizzaInCart()
    }, function (err, result) {
        if (err) {
            alert('Cant create order');
        }
        else {
            LiqPayCheckout.init({
                data: "Дані...",
                signature: result.signature,
                embedTo: "#liqpay",
                mode: "popup" // embed || popup
            }).on("liqpay.callback", function (data) {
                console.log(data.status);
                console.log(data);
            }).on("liqpay.ready", function (data) {
                // ready
            }).on("liqpay.close", function (data) {
                // close
            });

        }}) ;})

