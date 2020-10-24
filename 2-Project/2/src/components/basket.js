import BasketItem from './basketItem.js'

export default class Basket {
    constructor(container = '#basket', url = '/basket.json') {
        this.items = [];
        this.wrapper = null;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();
    }
    
    _init() {
        this.wrapper = document.querySelector('.drop-cart');

        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content
            })
            .then(() => {
                this._render();
                this._handleEvents();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    }
    _handleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden');
            console.log(this)
        });

        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset.id)
            }
        })
    }
    add(item) {
        // console.log('add ' + item.productName)
        let find = this.items.find(basketItem => basketItem.productId == item.productId);

        if (!find) {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
    }
    remove(id) {
        let find = this.items.find(basketItem => basketItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new BasketItem(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}
