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
const cartDom = document.querySelector(".cart");

addToCartButtonsDom.forEach(addToCartButtonDom =>{
    addToCartButtonDom.addEventListener("click", () => {
        const productDom = addToCartButtonDom.parentNode;
        const product = {
            image: productDom.querySelector(".product_image").getAttribute("src"),
            name: productDom.querySelector(".product_name").innerText,
            price: productDom.querySelector(".product_price").innerText
        };

        cartDom.insertAdjacentHTML("beforeend", `       
            <div class = "cart_item">
                <img class = "cart_item_image mr-4 " src = "${product.image}" alt = "${product.name}">
                <h6 class = "class_item_name ml-4 ">${product.name}</h6>
                <h6 class = "class_item_price ml-4 ">${product.price}</h6>
            </div>`)

    });
});