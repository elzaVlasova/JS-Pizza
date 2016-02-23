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
var sumOrder = 0;

function addToCart(pizza, size) {

    var isInCart = false;

    for (var i = 0; i < Cart.length; i++) {
        if (Cart[i].pizza == pizza && Cart[i].size == size) {
            console.log(Cart[i].quantity);
            Cart[i].quantity++;

            var isInCart = true;
            console.log("Is in Cart");
        }
    }
    if (!isInCart) {
        Cart.push({
            pizza: pizza,
            size: size,
            quantity: 1,
            price: pizza[size].price
        });
    }

    sumOrder += Cart[Cart.length - 1].price;

    console.log("Price" + sumOrder);
    updateCart();
}


function removeFromCart(cart_item) {

    for (var i = 0; i < Cart.length; i++) {
        if (Cart[i].pizza === cart_item.pizza && Cart[i].size === cart_item.size) {
            Cart.splice(i, 1);
            console.log('I try to remove you. Sorry, my dear sushi')
        }

    }
    //updateCart();
}

function updateCart() {
    //Функція викликається при зміні вмісту кошика
    //Тут можна наприклад показати оновлений кошик на екрані та зберегти вміт кошика в Local Storage

    //Очищаємо старі піци в кошику
    if (Cart.length===0){$cart.find(".section-text").append();}else{
    $cart.html("");}

    //Онволення однієї піци
    function showOnePizzaInCart(cart_item) {
        var html_code = Templates.SushiCart_OneItem(cart_item);

        var $node = $(html_code);


        $node.find(".info-plus").click(function () {
            //Збільшуємо кількість замовлених піц
            cart_item.quantity += 1;
            console.log('plus');
            sumOrder += cart_item.price;
            //Оновлюємо відображення
            updateCart();
        });

        $node.find(".info-minus").click(function () {
            //Зменшуємо кількість замовлених піц
            cart_item.quantity -= 1;
            console.log('minus' + cart_item.quantity);
             sumOrder -= cart_item.price;


            if (cart_item.quantity == 0) {
                console.log('null remove sushi');
                console.log(Cart);
                $node.remove();
                console.log(cart_item.quantity);
                removeFromCart(cart_item);
            }

            //Оновлюємо відображення
            updateCart();
        });

        if (cart_item.quantity == 0) {
            console.log('null remove sushi');
            console.log(Cart);
            $node.remove();
            console.log(cart_item.quantity);
            removeFromCart(cart_item);
        }

        $cart.append($node);



        $node.find(".info-delete").click(function () {
            //Видаляемо суші із списку покупок
            console.log("SumOrder = " + sumOrder + "Quantity = " + cart_item.quantity + "Price = " + cart_item.price);
            console.log('remove ' + "Sum of this sushi " + cart_item.quantity * cart_item.price);
            //  sumOrder = sumOrder - (cart_item.size*cart_item.price);


                for (var j=1; j<=cart_item.quantity; j++){
                sumOrder-=cart_item.price;}

            console.log("SumOrder = " + sumOrder);
            $section.find(".sum-order-number").text(sumOrder);
            $node.remove();


            cart_item.quantity = 0;
            removeFromCart(cart_item);
            console.log("Quantity " + cart_item.quantity);

            updateCart();
        });



    }

    $section.find(".sum-order-number").text(sumOrder);


    Cart.forEach(showOnePizzaInCart);
    $section.find(".number-of-product-order").html(Cart.length);
    console.log($section.find(".number-of-product-order"));
    console.log(Cart.length);
    Storage.set("cart", Cart); // записуємо значення замовлених піц
    Storage.set("sumOrder", sumOrder);

    if (Cart.length===0) { sumOrder=0;}
}

function initialiseCart() {
    //Фукнція віпрацьвуватиме при завантаженні сторінки
    //Тут можна наприклад, зчитати вміст корзини який збережено в Local Storage то показати його
    var saved_pizza = Storage.get("cart");
    if (saved_pizza) {
        Cart = saved_pizza;
    }

    /*var sum_order = Storage.get('sumOrder');
    if (sum_order) {
        sumOrder = sum_order;
    }*/


    for (var i = 0; i < Cart.length; i++) {
        for (var j = 1; j <= Cart[i].quantity; j++) {
        sumOrder += Cart[i].price;
    }}



    $(".clean-order").click(function () {
        console.log('clean order');
        sumOrder = 0;
        $section.find(".sum-order-number").text(sumOrder);
        $cart.html("");
        $cart.find(".section-text").show();
        console.log(Cart.length);
        Cart = [];
        updateCart();
        console.log(Cart.length);
    });

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