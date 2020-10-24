class ProductItem {

  constructor(item, target, baseImgUrl) {
    this.item = item;
    this.target = target;
    this.baseImgUrl = baseImgUrl;
  }

  render() {
    if (this.target === '#basket') {
      return this.item ? `<div class="drop-cart__product">
                    <a href="product.html" class="drop-cart__product-link">
                        <img src="${this.baseImgUrl}${this.item.img}"
                            alt="product" class="drop-cart__product-img">
                    </a>
                    <div class="drop-cart__product-info">
                        <a href="product.html" class="drop-cart__product-name">${this.item.name}</a>
                        <div class="drop-cart__product-stars">
                            <i class="${this.item.stars > "0" ? "fas" : "far"} ${this.item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "1" ? "fas" : "far"} ${this.item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "2" ? "fas" : "far"} ${this.item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "3" ? "fas" : "far"} ${this.item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "4" ? "fas" : "far"} ${this.item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        </div>
                        <div class="drop-cart__product-price">
                            <span class="drop-cart__product-count">${this.item.amount} </span> x ${this.item.price}
                            <span class="drop-cart__product-sum"> = $${this.item.price * this.item.amount}</span>
                        </div>
                    </div>
                    <a data-remove-product="${this.item.id}" href="#"  class="drop-cart__product-close"><i class="far fa-times-circle"></i></a>
                </div>`: `<div class="drop-cart__empty">Empty</div>`;

    } else {
      return this.item ? `<div class="card">
                      <div class="card__hover">
                        <a  href="#" class="card__button-add" data-item='${JSON.stringify(this.item)}' data-button="addProduct">
                          <img   src="../src/assets/images/cart-white.png" alt="cart" class="card__cart-img">
                          Add to Cart
                        </a>
                      </div>
                      <a href="#" class="card__link">
                        <img src="${this.baseImgUrl}${this.item.img}" alt="${this.item.name}" class="card__img">
                      </a>
                      <div class="card__content">
                        <a href="product.html">
                          <h3 class="card__h3">${this.item.name}</h3>
                        </a>
                        <div class="card__price">
                          $${this.item.price}
                          <div class="card__stars">
                              <i class="${this.item.stars > "0" ? "fas" : "far"} ${this.item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "1" ? "fas" : "far"} ${this.item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "2" ? "fas" : "far"} ${this.item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "3" ? "fas" : "far"} ${this.item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                              <i class="${this.item.stars > "4" ? "fas" : "far"} ${this.item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                          </div>
                        </div>
                      </div>
                    </div> ` : `<div style="width: 100%;font-size: 5rem;color: #eeeeee;text-align: center;">
                                  <i class="fas fa-spinner fa-spin"></i>
                                </div>`

    }


  }

}

export default ProductItem;