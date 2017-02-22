// an array with all of our cart items
var cart = [];

var updateCart = function() {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    var total = 0;
    $(".cart-list").empty();
    for (var i = 0; i < cart.length; i++) {
        var source = $("#cart-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template({ item: cart[i].name, price: cart[i].price });
        $(".cart-list").append(newHTML);
        total += cart[i].price;
    }
    $(".total").text(total);
}


var addItem = function(item) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    cart.push(item);
}

var clearCart = function() {
    // TODO: Write a function that clears the cart ;-)
    cart = [];
    updateCart();

};

$('.view-cart').on('click', function() {
    // TODO: hide/show the shopping cart!
    $(".shopping-cart").slideToggle();
});

$('.add-to-cart').on('click', function() {
    // TODO: get the "item" object from the page
    var $cardItem = document.getElementsByClassName("card item");
    var item = $(this).closest($cardItem).data();
    addItem(item);
    updateCart();
    $(".shopping-cart").show();
    $(".cart-list").append(cart);
});

$('.clear-cart').on('click', function() {
    clearCart();
});

// update the cart as soon as the page loads!
updateCart();
