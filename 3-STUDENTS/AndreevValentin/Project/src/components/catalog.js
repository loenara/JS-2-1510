import {padNum} from "./common.js";

function getItems() {
	// This should be retrieved from a server...
	return [
		{
			name: "Mango people T-shirt",
			price: 5200,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/0.jpg"
		},
		{
			name: "Banana people T-shirt",
			price: 5300,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/1.jpg"
		},
		{
			name: "Strawberry people T-shirt",
			price: 5500,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/2.jpg"
		},
		{
			name: "Orange people T-shirt",
			price: 6700,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/3.jpg"
		},
		{
			name: "Pumpkin people T-shirt",
			price: 6900,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/4.jpg"
		},
		{
			name: "Pineapple people T-shirt",
			price: 9400,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/5.jpg"
		},
		{
			name: "Cucumber people T-shirt",
			price: 2300,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/6.jpg"
		},
		{
			name: "Tomato people T-shirt",
			price: 4500,
			img: "https://raw.githubusercontent.com/VoidPhantom/gbimg/master/7.jpg"
		}
	];
}

export default class Catalog {
	constructor(cart, container, itemsPerRow) {
		this.container = container;
		this.items = getItems();
		this.cart = cart;

		this._handleEvents();
		this._render(itemsPerRow);
	}

	_handleEvents() {
		this.container.addEventListener("click", e => {
			if(!e.target.classList.contains("snippet__addToCart")) {
				return;
			}

			const id = +e.target.dataset.itemId;
			this.cart.add(id, this.items[id]);
		});
	}

	_render(itemsPerRow) {
		let html = "";
		this.items = getItems();
		this.items.forEach((item, id) => {
			html += `<article class="snippet">
				<img src="${item.img}"
					alt="${item.name}" class="snippet__img">
				<div class="snippet__hover">
					<button class="snippet__addToCart"
						data-item-id="${id}">Add to cart</button>
				</div>
				<div class="snippet__caption">
					<h3 class="snippet__name">${item.name}</h3>
					<p class="snippet__price">\$${Math.floor(item.price / 100)}`
					+ `.${padNum(item.price % 100)}</p>
				</div>
			</article>`;
		});

		// A hack to get items on the last row to align
		for(let i = 0; i < itemsPerRow - 1; ++i) {
			html += '<div class="snippet__filler"></div>';
		}

		this.container.innerHTML = html;
	}
};
