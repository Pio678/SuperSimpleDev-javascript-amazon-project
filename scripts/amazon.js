//products are being loaded from another file

//productshtml stores html for list of out products
productsHtml = "";

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

addToCartBtns.forEach((addToCartBtn) => {
  addToCartBtn.addEventListener("click", () => {
    const productId = addToCartBtn.dataset.productId;

    let matchingItem = null;

    cart.forEach((product) => {
      if (product.productId === productId) {
        matchingItem = product;
      }
    });

    if (matchingItem !== null) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  });
});
