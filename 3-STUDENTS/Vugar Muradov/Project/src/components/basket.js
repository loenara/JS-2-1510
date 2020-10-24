export default {
    items: [],
    container: null,
    basket: basket,

    init() {
        this.container = document.querySelector("#basket");
        this._render();
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
    },
    _render() {
        let str = "";
        this.items.forEach(item => {
            str += `
        <div class="cartProduct">
        <div class="d-flex justify-content-between">
        <div><img src="${item.img}" width="72px" alt="cartPhoto"></div>
        <div class="tripleCart">
            <div class="reboxZane">${item.name}</div>
            <div class="yellowStars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
            <div class="inCartQuantity">${item.amount} x ${item.price}</div>
        </div>
        <button class="closeButton" name="remove" style="background-color: white; border: none;" data-id="${item.id}">X</button>
        </div>
        <hr> 
        </div>

            `
        })
        this.container.innerHTML = str;
    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);

        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;
        }
        this._render();
    },
    remove(itemId) {
        let find = this.items.find(el => el.id == itemId);

        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
        }
        this._render();
    }
}