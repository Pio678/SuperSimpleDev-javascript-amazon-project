//export means variables can be imported by another file
export const cart = [];

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
