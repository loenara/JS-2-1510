import basket from './basket.js'
import catalogIndex from './catalogIndex.js'
import catalogProduct from './catalogProduct.js'

export default () => {
    basket.init();
    catalogIndex.init();
    catalogProduct.init();
}