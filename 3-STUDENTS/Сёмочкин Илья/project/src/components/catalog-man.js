
        // const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
        // const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

        //
        export default {
            items: [],
            cart: null,
            container: null,
            imgURL: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JS1_shop',
            url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/catalog-man.json', //json файл с каталогом
            init(cart) { 
                this.container = document.querySelector('#items-man');
                this.cart = cart;
                // this.items = getItems(); 
                this._get(this.url) 
                .then(items => { 
                    this.items = items;
                })
                .then(() => { 
                    this._render();
                    this._handleEvents();
                })
            },

            _get(url) { 
                return fetch(url).then(d => d.json());
            },

            _handleEvents() {
                this.container.addEventListener('click', evt => { 
                    if (evt.target.name == 'add') { 
                        let item = { 
                            productId: evt.target.dataset.id,
                            productName: evt.target.dataset.name,
                            productImg: evt.target.dataset.img,
                            productPrice: +evt.target.dataset.price
                        }
                        this.cart._add(item); 
                    }
                })
            },

            _render() { 
                let htmlStr = ''; 
                this.items.forEach((item, index) => { 
                    let imgURL = `${this.imgURL}/man-item${index + 1}.png`;
                    htmlStr += `
                        <div class="featured-items__item">
                            <div class="featured-items__item-top"><img src="${imgURL}" alt="featured-items-${index + 1}">
                                <div class="add-hover-div">
                                    <div>
                                        <button name="add"
                                            data-id="${item.productId}"
                                            data-name="${item.productName}"
                                            data-img="${imgURL}"
                                            data-price="${item.productPrice}">
                                        <img src="../src/assets/img/cart_small.png" alt="cart_small">Add to Cart</button>
                                        <a href="#"><i class="fas fa-retweet"></i></a>
                                        <a href="#"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-items__item-bottom">
                                <div>${item.productName}</div>
                                <div>$${item.productPrice}.00</div>
                            </div>
                        </div>
                    `;
                });
                this.container.innerHTML = htmlStr;
            }
        }
        //

        // function createNewItem(name, price) {
        //     return {
        //         productName: name,
        //         productPrice: price
        //     }
        // }

        // function getItems() {
        //     return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
        // }