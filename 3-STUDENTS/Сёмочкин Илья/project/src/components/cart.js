
export default {
    items: [],
    wrapper: null,
    container: null,
    qtyContainer: null,
    url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',

    init() {
        this.wrapper = document.querySelector('.cart-dropdown'); 
        this.container = document.querySelector('#checked-items'); 
        this.qtyContainer = document.querySelector('#qty');
        this._get(this.url)
        .then(cartObject => {
            this.items = cartObject.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    },

    _get(url) {
        return fetch(url).then(d => d.json()) 
    },

    _handleEvents() {
        document.querySelector('#toggle-cart').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden')
        })

        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this._remove(evt.target.dataset.id)
            }
        })
    },

    _add(item) {
        let find = this.items.find(cartItem => cartItem.productId == item.productId);

        if (!find) { 
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else { 
            find.amount++;
        }
        this._render();
    },

    _remove(id) {
        let find = this.items.find(cartItem => cartItem.productId == id);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }
        this._render();
    },

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `
                <div class="cart-dropdown__checked-items">
                    <img src="${item.productImg}" alt="pic">
                    <div>
                        <h3>${item.productName}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>${item.amount} x $${item.productPrice}</p>
                    </div>
                    <button data-id=${item.productId} name="remove" class="fas fa-times-circle"></button>
                </div>
            `
        })
        htmlStr += `
            <div class="cart-dropdown__sum">
                <div>total</div>
                <div>$${this._totalPrice()}</div>
            </div>
        `;
        this.container.innerHTML = htmlStr;
        this.qtyContainer.innerHTML = this._totalQty();
    },

    _totalPrice() {
        let sum = 0;
        for(let item of this.items) {
            sum += item.productPrice * item.amount;
        }
        return sum;
    },

    _totalQty() {
        let qty = 0;
        for(let item of this.items) {
            qty += item.amount;
        }
        return qty;
    }
}
