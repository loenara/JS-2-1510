import Basket from './basket.js';
import Catalog from './catalog.js';

export default ()=>{
    let cart = new Basket;
    //let goods = new Catalog;
    cart.init();
    goods.init(cart);
}