import ProductContainer from './product-container';

class Basket extends ProductContainer {

    constructor(container, url = '') {
        super(container, url);
    }

    _init() {
        super._init();
        this._containerTotalSum = document.querySelector('#basket-total');
        this._badge = document.querySelector('#cart-badge');
        this.checkoutButton = document.querySelector('#checkout-button');
        this.goToCartButton = document.querySelector('#go-cart');
        this._storage = window.localStorage;
        this._getStorage();
        this._render();
        this._addListener();
    }

    _render() {
        if (this._items.length > 0) {
            this.checkoutButton.classList.remove('disabled');
            this.goToCartButton.classList.remove('disabled');  
        } else {   
            this.checkoutButton.classList.add('disabled');
            this.goToCartButton.classList.add('disabled');

        }
        super._render();
        this._containerTotalSum.innerText = '$' + this._amountTotal();
        this._badge.innerText = this._items.length;

    }

    _amountTotal() {
        return this._items.length > 0 ? this._items.reduce((sum, item) => {
            return sum += item.price * item.amount;
        }, 0) : '0';
    }

    _addListener() {
        document.addEventListener('click', this._handlerClick.bind(this));
    }

    _handlerClick(event) {
        if (event.target.dataset.button === 'addProduct' || event.target.parentNode.dataset.button === 'addProduct') {
            this._addItem(event.target.dataset.item || event.target.parentNode.dataset.item);
            event.preventDefault();
            return;
        }

        if (event.target.dataset.removeProduct || event.target.parentNode.dataset.removeProduct) {
            this._removeItem(event.target.dataset.removeProduct || event.target.parentNode.dataset.removeProduct);
            event.preventDefault();
            return;
        }
    }

    _getStorage() {
        let items = this._storage.getItem('basket');
        items ? this._items = JSON.parse(items) : this._setStorage([]);
    }

    _setStorage(data) {
        this._storage.setItem('basket', JSON.stringify(data));
    }

    _addItem(item) {
        let product = Object.assign({}, { amount: 1 }, JSON.parse(item));
        let searchResult = this._items.find(item => item.id === product.id);
        searchResult ? searchResult.amount++ : this._items.push(product);
        this._render()
        this._setStorage(this._items);

    }

    _removeItem(id) {
        let product = this._items.find(item => item.id === +id);
        product.amount > 1 ? product.amount-- : this._items.splice(this._items.indexOf(product), 1);
        this._render();
        this._setStorage(this._items);

    }
}

export default Basket;