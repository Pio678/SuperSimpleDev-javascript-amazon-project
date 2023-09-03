//export means variables can be imported by another file
export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 3,
  },
];
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
  });
}
