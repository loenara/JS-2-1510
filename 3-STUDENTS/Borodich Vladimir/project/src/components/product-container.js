import ProductItem from './product-item';
class ProductContainer {
    constructor(container, url = '') {
        this._items = null;
        this._baseUrl = 'https://raw.githubusercontent.com/wowankz/static/master/shop/'
        this._url = this._baseUrl + url;
        this._container = null;
        this._containerName = container;
        this._init();
        console.log(`Container ${this._containerName}  init`);
    }

    _init() {
        this._container = document.querySelector(this._containerName);
    }

    _render() {
        let content = '';
        if (this._items.length > 0) {
            this._items.forEach((item) => {
                content += new ProductItem(item, this._containerName, this._baseUrl + 'img/').render();
            });
        } else {
            content = new ProductItem(null, this._containerName, this._baseUrl + 'img/').render();
        }
        this._container.innerHTML = content;
    }
}

export default ProductContainer;