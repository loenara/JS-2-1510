import CatalogItem from './catalogItem.js';

export default class Catalog {
    constructor(basket, container = '#catalog', url = '/catalog.json') {
        this.items = [];
        this.basket = basket;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();
    }

    _init() {
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }

    _get(url) {
        return fetch(url).then(d => d.json())
    }

    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                })
            }
        })
    }

    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new CatalogItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}
