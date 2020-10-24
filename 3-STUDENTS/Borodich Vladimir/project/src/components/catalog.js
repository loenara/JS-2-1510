import ProductContainer from './product-container';


class Catalog extends ProductContainer {

  constructor(container, url = '') {
    super(container, url);
  }

  _init() {
    super._init()
    this._getProducts();
  }

  _render() {
    super._render();
  }

  async _getProducts() {
    let res = await fetch(this._url);
    let items = await res.json()
    res.status ? (this._items = items.products) : (this._items = []);
    this._render();
  }

}
export default Catalog;