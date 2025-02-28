//Calculate order total
const order = {
	price: 10,
	quantity: 2,
};
function calculateTotal(price, quantity) {
	return price * quantity;
}

console.log(calculateTotal(order.price, order.quantity));
