/*Display Cart*/
(function(){

    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle("show-cart");
    })
})();

/*Add items to Cart*/

