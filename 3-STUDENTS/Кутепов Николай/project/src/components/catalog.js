const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];
const CART = "../src/assets/img/kart_white.png";
const STARS = ["", " class=\"half-star\"", "", "", "", "", " class=\"empty-star\"", ""];

export default {
    items: [],
    container: null,
    basket: null,
    imgFTPurl: 'https://raw.githubusercontent.com/Nicknk77/img/master/GB_img/infeature',
    url: 'https://raw.githubusercontent.com/Nicknk77/img/master/dist/catalog.json',
    
    init() {
        this.container = document.querySelector('#catalog');
        this.basket = basket;
        // this.items = getItems();
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then (() => {
            this.render();
            this._handleEvents();
        })
    },

    _handleEvents() {
        this.container.addEventListener('click', (e) => {
            if (e.target.name == 'add-to-cart') {
                let item = {
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.image,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                    stars: e.target.dataset.stars,
                };
                this.basket.add(item);
            }
        })
    },

    _get(url) {
        return fetch(url).then(d => d.json())   //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },
    render() {
        let str = "";
        this.items.forEach( (element, index) => {
            let img = `${this.imgFTPurl}${index+1}.jpg`;
            str += `<div class="hot-offer">
            <div class="hot-offer__shadow">
                <img src="${element.productImg}" alt="t-shirt">
                <div class="hot-offer__hover">
                    <div class="hot-offer__square">
                        <button 
                        name="add-to-cart" 
                        data-id="${element.productId}" 
                        data-name="${element.productName}"
                        data-price="${element.productPrice}"
                        data-image="${element.productImg}" 
                        data-stars="${element.stars}"
                        ><img src="${CART}" alt="order">Add to Cart</button>
                    </div>
                </div>
            </div>
            <a href="single.html">${element.productName}</a>
            <h3>
                $${element.productPrice}.00
                <div class="hot-offer__stars">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div${element.stars}></div>
                </div>
            </h3>
            </div>
            `;
        })
        this.container.innerHTML = str;
        }
}

// catalog.init();

// function createNewItem(name, price, stars) {
//     return {
//         productName: name,
//         productPrice: price,
//         productStars: stars
//     }
// }
// function getItems() {
//     return NAMES.map(function(name, index) { return createNewItem(NAMES[index], PRICES[index], STARS[index])  });
// }