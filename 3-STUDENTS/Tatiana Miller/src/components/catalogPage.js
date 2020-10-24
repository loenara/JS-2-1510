
function createCatalog() {
    let arr = [];
    brand.forEach((brand, index) => {
        let id = 'Item_' + index;
        let img = imgBaseUrl + `fi-${index + 1}.png`;
        arr.push(createItem(img, brand, price[index], id))
    })
    return arr
}

function createItem(img, brand, price, _id) {
    return {
        img, brand, price, _id
    }
}

let Catalog = {
    Catalog: [],
    container: null,
    init() {
        this.container = document.querySelector('#product_boxes');
        this.Catalog = createCatalog();
        this._render()
    },
    _render() {
        let html= '';
        this.Catalog.forEach(us => {
            html+= `
                     <div class="product">
                          <a href="#"> <img class="product__img" src="${us.img}" alt='photo product'> </a>
                          <div class="product__content">
                            <div class="product__name">${us.brand} </div>
                            <p class="product__price"><span>$</span>${us.price} </p>
                          </div>
                          <a href="#" class="product__add">Add to Cart</a>
                      </div>                 
            `
        })
        this.container.innerHTML = html;
    }
}

Catalog.init();