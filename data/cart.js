//export means variables can be imported by another file
//we load cart from local storage
export let cart = JSON.parse(localStorage.getItem("cart"));

if (cart === null || cart === undefined) {
  cart = [];
}

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem = null;

  //checking if product is already in the cart
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  //if product is in the cart we increase quantity
  if (matchingItem !== null) {
    matchingItem.quantity += 1;
  } //else we add product in the cart
  else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  //we create newCart array
  const newCart = [];

  cart.forEach((cartItem) => {
    //we add all cartItems to new cart array
    //except the one we want to delete
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
    // we override cart with newCart
    cart = newCart;

    saveToStorage();
  });
}
