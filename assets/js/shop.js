

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
const addToCartButtonsDOM = document.querySelectorAll('[data-action="add_to_cart"]');

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
			saveCart();
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
      <button class="btn btn-secondary btn-small${(product.quantity === 1 ? ' btn-danger' : '')}" data-action="decrease_item">&minus;</button>
      <h3 class="cart_item_quantity">${product.quantity}</h3>
      <button class="btn btn-secondary btn-small" data-action="increase_item">&plus;</button>
      <button class="btn btn-danger btn-small" data-action="remove_item">&times;</button>
    </div>
  `);

	addCartFooter();

}

/* Functions handling item action buttons in cart */

function handleActionButtons(addToCartButtonDOM, product) {
	addToCartButtonDOM.innerText = 'In Cart';
	addToCartButtonDOM.disabled = true;

	const cartItemsDOM = cartDOM.querySelectorAll('.cart_item');
	cartItemsDOM.forEach(cartItemDOM => {
		if (cartItemDOM.querySelector('.cart_item_name').innerText === product.name) {
			cartItemDOM.querySelector('[data-action="increase_item"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
			cartItemDOM.querySelector('[data-action="decrease_item"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
			cartItemDOM.querySelector('[data-action="remove_item"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
		}
	});
}

function increaseItem(product, cartItemDOM) {
	cart.forEach(cartItem => {
		if (cartItem.name === product.name) {
			cartItemDOM.querySelector('.cart_item_quantity').innerText = ++cartItem.quantity;
			cartItemDOM.querySelector('[data-action="decrease_item"]').classList.remove('btn-danger');
			saveCart();
		}
	});
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
	cart.forEach(cartItem => {
		if (cartItem.name === product.name) {
			if (cartItem.quantity > 1) {
				cartItemDOM.querySelector('.cart_item_quantity').innerText = --cartItem.quantity;
				saveCart();
			} else {
				removeItem(product, cartItemDOM, addToCartButtonDOM);
			}

			if (cartItem.quantity === 1) {
				cartItemDOM.querySelector('[data-action="decrease_item"]').classList.add('btn-danger');
			}
		}
	});
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
	cartItemDOM.classList.add('cart_item-removed');
	setTimeout(() => cartItemDOM.remove(), 250);
	cart = cart.filter(cartItem => cartItem.name !== product.name);
	saveCart();
	addToCartButtonDOM.innerText = 'Add To Cart';
	addToCartButtonDOM.disabled = false;
}

/* Functions handling footer of clear and checkout */

function addCartFooter() {
	if (document.querySelector('.cart-footer') === null) {
		cartDOM.insertAdjacentHTML('afterend', `
      <div class="cart-footer cart-buttons-container mt-3 d-flex justify-content-between">
        <button class="btn btn-black" data-action="clear_cart">Clear Cart</button>
        <h4 data-action="total"></h4>
        <button class="btn btn-pink"><a href="checkout.html">Checkout</a></button>
      </div>
    `);

		document.querySelector('[data-action="clear_cart"]').addEventListener('click', () => clearCart());
	}
}

function clearCart() {
	cartDOM.querySelectorAll('.cart_item').forEach(cartItemDOM => {
		cartItemDOM.classList.add('cart_item-removed');
		setTimeout(() => cartItemDOM.remove(), 250);
	});

	cart = [];
	localStorage.removeItem('cart');
	document.querySelector('.cart-footer').remove();

	addToCartButtonsDOM.forEach(addToCartButtonDOM => {
		addToCartButtonDOM.innerText = 'Add To Cart';
		addToCartButtonDOM.disabled = false;
	});
}

function countCartTotal() {
	let cartTotal = 0;
	cart.forEach(cartItem => cartTotal += cartItem.quantity * cartItem.price);
	const total = cartTotal.toFixed(2);
	document.querySelector('[data-action="total"]').innerText = `Total : $ ${total}`;
}

function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
	countCartTotal();
}
