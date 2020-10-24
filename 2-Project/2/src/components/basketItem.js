export default class BasketItem {
    constructor(item) {
        this.item = item;
    }
    
    render() {
        return `
                <div class="drop-cart__product">
                    <a href="product.html" class="drop-cart__product-link">
                        <img src="${this.item.productImg}"
                            alt="product" class="drop-cart__product-img">
                    </a>
                    <div class="drop-cart__product-info">
                        <a href="product.html" class="drop-cart__product-name">${this.item.productName}</a>
                        <div class="drop-cart__product-stars">
                            <i class="${this.item.stars > "0" ? "fas" : "far"} ${this.item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                            <i class="${this.item.stars > "1" ? "fas" : "far"} ${this.item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                            <i class="${this.item.stars > "2" ? "fas" : "far"} ${this.item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                            <i class="${this.item.stars > "3" ? "fas" : "far"} ${this.item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                            <i class="${this.item.stars > "4" ? "fas" : "far"} ${this.item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        </div>
                        <div class="drop-cart__product-price">
                            <span class="drop-cart__product-count">${this.item.amount} </span> x ${this.item.productPrice}
                            <span class="drop-cart__product-sum"> = $${this.item.productPrice * this.item.amount}</span>
                        </div>
                    </div>
                    <a href="#" data-id="${this.item.productId}" name="remove" class="drop-cart__product-close far fa-times-circle"></a>
                </div>
                `
    }
}