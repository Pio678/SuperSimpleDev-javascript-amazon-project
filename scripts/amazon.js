//cart variable is imported from other cart.js
import { cart, addToCart } from "../data/cart.js";

//products variable is imported from products.js
import { products } from "../data/products.js";

//productshtml stores html for list of out products
let productsHtml = "";

function updateCartQuantity() {
  let cartQuantity = 0;

  //we count quantity of all items in cart
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  //we update the number of items on page
  const cartQuantityElement = document.querySelector(".js-cart-quantity");
  cartQuantityElement.innerText = cartQuantity;
}

//this for each loop generates html for each of our products
products.forEach((product) => {
  const html = ` <div class="product-container">
  <div class="product-image-container">
    <img
      class="product-image"
      src=" ${product.image} "
    />
  </div>

  <div class="product-name limit-text-to-2-lines">
   ${product.name}
  </div>

  <div class="product-rating-container">
    <img
      class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png"
    />
    <div class="product-rating-count link-primary">
    ${product.rating.count}</div>
  </div>

  <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png" />
    Added
  </div>

  <button 
  class="add-to-cart-button button-primary js-add-to-cart-button"
  
  data-product-id="${product.id}"
  >Add to Cart</button>
</div>`;

  productsHtml += html;
});

const productsGrid = document.querySelector(".js-products-grid");

productsGrid.innerHTML = productsHtml;

const addToCartBtns = document.querySelectorAll(".js-add-to-cart-button");

//adding event listeners to all addToCart buttons
addToCartBtns.forEach((addToCartBtn) => {
  addToCartBtn.addEventListener("click", () => {
    const productId = addToCartBtn.dataset.productId;

    addToCart(productId);

    updateCartQuantity();
  });
});
