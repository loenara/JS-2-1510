const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt'];
const PRICES = [52, 53];

//
const catalog = {
    items: [],
    container: null,
    imgFTPurl: '../src/assets/img',
    init() {
        this.container = document.querySelector('#catalog_shopping-cart');
        this.items = getItems();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/item${index + 1}.jpg`;
            htmlStr += `
            <div class="header__cart-item">
                    <div class="header__cart-item-left">
                        <a href="#" id="cancel_item"><i class="far fa-times-circle"></i></a>
                        <img src="${imgURL}" alt="item${index + 1}">
                    </div>
                    <div class="header__cart-item-right">
                        <div class="header__cart-item-description">${item.productName}</div>
                        <div class="header__cart-item-price">$${item.productPrice}</div>
                    </div>                    
                </div>   
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