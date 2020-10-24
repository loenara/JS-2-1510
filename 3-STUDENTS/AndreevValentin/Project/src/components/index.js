import Cart from "./cart.js";
import Catalog from "./catalog.js";

export default () => {
	new Catalog(new Cart(), document.getElementById("featuredItems"), 4);
};
