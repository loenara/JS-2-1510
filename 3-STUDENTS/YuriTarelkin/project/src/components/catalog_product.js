const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt', 'Mango People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45, 77];

//
const catalog = {
    items: [],
    container: null,
    imgFTPurl: '../src/assets/img',
    init() {
        this.container = document.querySelector('#catalog');
        this.items = getItems();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/productImg${index + 1}.jpg`;
            htmlStr += `
            <article class="catalogBar__item">
                <div class="catalogBar__item-img"><a href="#"><img src="${imgURL}" alt="item${index + 1}"></a></div>
                <div class="catalogBar__item-hover">
                    <div class="catalogBar__item-hover-contente"><a href="#"><i class="fas fa-shopping-cart"></i> <span>Add to Cart</span></a></div>
                </div>
                <div class="catalogBar__item-description">${item.productName}</div>
                <div class="catalogBar__item-price">$${item.productPrice}</div>
            </article>
            `;
        });
        this.container.innerHTML = htmlStr;
    }
}

catalog.init();
//

function createNewItem(name, price) {
    return {
        productName: name,
        productPrice: price
    }
}

function getItems() {
    return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
}