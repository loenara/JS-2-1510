import {padNum} from "./common.js";

export default class Cart {
	constructor() {
		this.popup = document.getElementById("cartPopup");
		this.itemsWrapper = document.getElementById("cartPopupItems");
		this.totalBox = document.getElementById("cartPopupTotal");
		this.items = [];

		this._handleEvents();
		this._render();
	}

	_handleEvents() {
		document.getElementById("cartPopupButton").addEventListener("click", () => {
			this.popup.classList.toggle("hidden");
		});
		this.itemsWrapper.addEventListener("click", e => {
			if(!e.target.classList.contains("cartPopup__itemRemove")) {
				return;
			}

			this.remove(+e.target.dataset.itemId);
		});
	}

	_render() {
		let html = "";
		this.items.forEach(item => {
			html += `<li class="cartPopup__item">
				<img src="${item.img}" alt="${item.name}"
					class="cartPopup__itemImg">
				<div class="cartPopup__itemDetails">
					<p class="cartPopup__itemName">${item.name}</p>
					<p class="cartPopup__itemPrice">${item.qty}&nbsp;&times;&nbsp;`
					+ `\$${Math.floor(item.price / 100)}.${padNum(item.price % 100)}</p>
				</div>
				<button href="#" class="cartPopup__itemRemove fas fa-times-circle"
					data-item-id="${item.id}"></button>
			</li>`;
		});
		this.itemsWrapper.innerHTML = html;

		const total = this.items.reduce((a, b) => a + b.price * b.qty, 0);
		this.totalBox.innerHTML =
			`\$${Math.floor(total / 100)}.${padNum(total % 100)}`;
	}

	add(id, newItem) {
		const item = this.items.find(x => x.id == id);
		if(item === undefined) {
			this.items.push(Object.assign({id, qty: 1}, newItem));
		} else {
			++item.qty;
		}
		this._render();
	}

	remove(id) {
		const index = this.items.findIndex(x => x.id == id)
		const item = this.items[index];
		if(item.qty == 1) {
			this.items.splice(index, 1);
		} else {
			--item.qty;
		}
		this._render();
	}
}
