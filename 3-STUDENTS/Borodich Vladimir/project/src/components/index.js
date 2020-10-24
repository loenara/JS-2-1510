import Basket from './basket.js';
import Catalog from './catalog.js';

export default () => {    
    const catalog = new Catalog('#prod', 'catalog/prod.json');
    const basket = new Basket('#basket');
}