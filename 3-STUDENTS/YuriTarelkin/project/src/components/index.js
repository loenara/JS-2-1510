import basket from './basket.js'
import catalog from './catalog_index'

export default () => {
    basket.init();
    catalog.init();
}