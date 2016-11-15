var cart = [];
cart = [['12ft HDMI Cable', 6.76], ['JavaScript For Kids', 15.37]]

function total(cart) {
	var result = 0
	var item;
	for (var i = 0; i<cart.length; i++) {
		item = cart[i];
		result = result + item[1]
	}
	return result;
}

total(cart);
