/*Display Cart*/
(function () {

    const cartInfo = document.getElementById("cart-info");
    const cartView = document.getElementById("cartView");

    cartInfo.addEventListener('click', function () {
        cartView.classList.toggle("show-cart");
    })
})();

/*Selecting Product Details From Shop.html*/

const addToCartButtonsDom = document.querySelectorAll('[data-action="ADD_TO_CART"]');

addToCartButtonsDom.forEach(addToCartButtonDom =>{
    addToCartButtonDom.addEventListener("click", () => {
        const productDom = addToCartButtonDom.parentNode;
        const product = {
            image: productDom.querySelector(".product_image").getAttribute("src"),
            name: productDom.querySelector(".product_name").innerText,
            price: productDom.querySelector(".product_price").innerText
        };
    });
});