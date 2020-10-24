function createItem(id, name, price, img) {
    return {id, name, price, img};
};

function initCatalogIndex() {
        let ids = [0, 1, 2, 3, 4, 5, 6, 7]
        let names = ["Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt", "Mango People T-shirt"];
        let prices = ["52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00", "52.00"];
        let imgs = ["../src/assets/img/feature1.jpg", "../src/assets/img/feature2.jpg", "../src/assets/img/feature3.jpg", "../src/assets/img/feature4.jpg", "../src/assets/img/feature5.jpg", "../src/assets/img/feature6.jpg", "../src/assets/img/feature7.jpg", "../src/assets/img/feature8.jpg"]
        return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
};

export default {
    items: [],
    container: null,
    basket: basket,

    init() {
        this.items = initCatalogIndex();
        this.container = document.querySelector("#catalogIndex");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add') {
                let item = {
                    name: evt.target.dataset.name,
                    price: +evt.target.dataset.price,
                    img: evt.target.dataset.img,
                    amount: 1,
                    id: evt.target.dataset.id
                }
                this.basket.add(item);
            }
        })
    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
               <article>
            <a style="cursor: pointer">
            <img src="${item.img}" alt="item">
            <h6>${item.name}</h6>
            <button class="buyButton" name="add" data-name="${item.name}" data-img="${item.img}" data-price="${item.price}" data-id="${item.id}"> Add to Cart </button>
            <p class="price">${item.price}</p></a>
            </article>
            `
        })
        this.container.innerHTML = str;
    }
}