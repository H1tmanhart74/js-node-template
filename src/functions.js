//Calculating a cart total with tax
const cart = {
	price: 100,
	tax: 0.07,
};
function calculateCartTotal(cart) {
	return cart.price + cart.price * cart.tax;
}
console.log(calculateCartTotal(cart));
