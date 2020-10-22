import basket from './basket.js';
import createProducts from './catalog.js';

export default () => {
    let container = document.querySelector('#prod');
    container ? createProducts('https://raw.githubusercontent.com/wowankz/static/master/shop/models/prod.json', container).init() : '';

    container = document.querySelector('#cat');
    container ? createProducts('https://raw.githubusercontent.com/wowankz/static/master/shop/models/cat.json', container).init() : '';

    container = document.querySelector('#like');
    container ? createProducts('https://raw.githubusercontent.com/wowankz/static/master/shop/models/like.json', container).init() : '';

    basket.init();
}