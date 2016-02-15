/**
 * Created by 112 on 13.02.2016.
 */
var Templates = require('../Templates');
var Storage = require('../Storage');

var SushiSize = {
    Big: "big_size",
    Small: "small_size"
};

var Cart = [];
var $cart = $("#cart");
var $section = $(".section");



function addToCart(pizza, size) {

    Cart.push({
        pizza: pizza,
        size: size,
        quantity: 1
    });

    updateCart();
}


function removeFromCart(cart_item) {

    for (var i=0; i<Cart.length; i++){
        if(Cart[i]==cart_item.pizza){
            Cart[i].splice();
        }

            }
    updateCart();
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    $cart.html("");

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.SushiCart_OneItem(cart_item);

        var $node = $(html_code);

        $node.find(".info-plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;
            console.log('plus');
            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".info-minus").click(function () {
                    //Зменшуємо кількість замовлених піц
                     cart_item.quantity -= 1;
                    console.log('minus'+cart_item.quantity);

                    //Оновлюємо відображення
                    updateCart();
                });


        $cart.append($node);

        if(cart_item.quantity==0){
                                    console.log('null remove sushi');
                                    console.log(Cart);
                                    $node.remove();
                                                        }

                                  $node.find(".info-delete").click(function(){
                                  //Видаляемо суші із списку покупок
                                  console.log('remove');
                                  $node.remove();
                                       });

    }
    Cart.forEach(showOnePizzaInCart);
    Storage.set("cart", Cart); // записуємо значення замовлених піц

}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
/*var saved_pizza = Storage.get("cart");
    if (saved_pizza){
        Cart=saved_pizza;
    }*/



    updateCart();
}

function getPizzaInCart() {
    //Повертає піци які зберігаються в кошику
    return Cart;
}

exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;

exports.getPizzaInCart = getPizzaInCart;
exports.initialiseCart = initialiseCart;

exports.SushiSize = SushiSize;