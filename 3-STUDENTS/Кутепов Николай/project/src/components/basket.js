export default {
    items: [],
    wrapper: null,
    container: null,
    basket_link: null,
    url: 'https://raw.githubusercontent.com/Nicknk77/img/master/dist/basket.json',
    total_cost: 0,

    init() {
        this.wrapper = document.querySelector('#basket');
        this.container = document.querySelector('#basket-list');
        this.basket_link = document.querySelector("#basket-link");
        this._get(this.url)
        .then(basketObject => {
            this.items = basketObject.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        });
    },
    _get(url) {
        return fetch(url).then(d => d.json())   //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },

    _render() {
        let str = '';
        this.total_cost = 0;
        this.items.forEach((item, index) => {
        str += `
            <div class="basket__item">
            <img src="${this.items[index].productImg}" alt="item1">
            <div class="basket__item-about">
                <h3>${this.items[index].productName}</h3>
                <div class="hot-offer__stars-basket">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div${this.items[index].stars ? this.items[index].stars : ""}></div>
                </div>
                <div class="amount-price">
                    <span id="amount-item">${this.items[index].amount}</span>&nbsp;
                    x &nbsp;$
                    <span id="price-item">${this.items[index].productPrice}.00</span>
                </div>
            </div>
            <a href="#" name="remove" data-id=${this.items[index].productId}><i class="fas fa-times-circle"></i></a>
            </div>
        `;
        this.total_cost += +this.items[index].amount * +this.items[index].productPrice;
        });
        this.container.innerHTML = str;
        this._sum();
    },
    _handleEvents() {
        this.basket_link.addEventListener('click', e => {
            this.wrapper.classList.toggle('hidden');
        });
        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove' || e.target.parentNode.name == 'remove') {
                let id = e.target.dataset.id ? e.target.dataset.id : e.target.parentNode.dataset.id;
                this._remove(id);
            }
        });
    },
    _remove(id) {
        let find = this.items.find(item => item.productId == id);
        if (find.amount > 1) --find.amount;
        else this.items.splice(this.items.indexOf(find), 1);
        this._render();
    },
    _sum() {
        document.querySelector('#total-cost').innerText = `$${this.total_cost}.00`;
    },

    add(item) {
        // console.log(item.productId);
        let find = this.items.find(basketItem => basketItem.productId == item.productId);

        if (!find) {
            item.amount = 1;
            this.items.push(item);
        }else {
            find.amount++;
        }
        this._render();
    }

}

// basket.init();