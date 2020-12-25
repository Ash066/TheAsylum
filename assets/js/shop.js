/* Display Cart */
(function () {

    const cartInfo = document.getElementById("cart-info");
    const cartView = document.getElementById("cartView");

    cartInfo.addEventListener('click', function () {
        cartView.classList.toggle("show-cart");
    })
})();

/* Saving cart contents to local storage */
let cart = (JSON.parse(localStorage.getItem('cart')) || []);

/* Accessing objects from DOM */
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

if (cart.length > 0) {
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if (productDOM.querySelector('.product_name').innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        });

    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product_image').getAttribute('src'),
            name: productDOM.querySelector('.product_name').innerText,
            price: productDOM.querySelector('.product_price').innerText,
            quantity: 1,
        };

        const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);

        if (!isInCart) {
            insertItemToDOM(product);
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            handleActionButtons(addToCartButtonDOM, product);
        }
    });
});

/* Display products in cart */

function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML('beforeend', `
    <div class="cart_item">
      <img class="cart_item_image" src="${product.image}" alt="${product.name}">
      <h3 class="cart_item_name">${product.name}</h3>
      <h3 class="cart_item_price">${product.price}</h3>
      <button class="btn btn-secondary btn-small${(product.quantity === 1 ? ' btn-danger' : '')}" data-action="DECREASE_ITEM">&minus;</button>
      <h3 class="cart_item_quantity">${product.quantity}</h3>
      <button class="btn btn-secondary btn-small" data-action="INCREASE_ITEM">&plus;</button>
      <button class="btn btn-danger btn-small" data-action="REMOVE_ITEM">&times;</button>
    </div>
  `);
}

/* Functions handling action buttons in cart */

function handleActionButtons(addToCartButtonDOM, product) {
    addToCartButtonDOM.innerText = 'In Cart';
    addToCartButtonDOM.disabled = true;

    const cartItemsDOM = cartDOM.querySelectorAll('.cart_item');
    cartItemsDOM.forEach(cartItemDOM => {
        if (cartItemDOM.querySelector('.cart_item_name').innerText === product.name) {
            cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
        }
    });
}

function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            cartItemDOM.querySelector('.cart_item_quantity').innerText = ++cartItem.quantity;
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn-danger');
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
                cartItemDOM.querySelector('.cart_item_quantity').innerText = --cartItem.quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                removeItem(product, cartItemDOM, addToCartButtonDOM);
            }

            if (cartItem.quantity === 1) {
                cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn-danger');
            }
        }
    });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
    cartItemDOM.classList.add('cart_item-removed');
    setTimeout(() => cartItemDOM.remove(), 250);
    cart = cart.filter(cartItem => cartItem.name !== product.name);
    localStorage.setItem('cart', JSON.stringify(cart));
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;
}
