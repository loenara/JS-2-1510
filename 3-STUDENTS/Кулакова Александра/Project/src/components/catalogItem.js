export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    
    render() {
        return `
                <div class="hot-offer">
                    <div class="hot-offer__shadow">
                        <img src="${this.item.productImg}" alt="t-shirt">
                        <div class="hot-offer__hover">
                            <div class="hot-offer__square">
                                <button 
                                    name="add"
                                    data-id="${this.item.productId}"
                                    data-name="${this.item.productName}"
                                    data-img="${this.item.productImg}"
                                    data-price="${this.item.productPrice}"
                                ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <a href="single.html">${this.item.productName}</a>
                    <h3>
                        $${this.item.productPrice}
                        <!--stars-->
                    </h3>
                </div>
                `
    }
}