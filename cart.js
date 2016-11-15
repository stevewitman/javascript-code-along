var cart = [];
cart = [['12ft HDMI Cable', 676], ['JavaScript For Kids', 1537]];
var amountDue = total(cart);
var amountPaid = 4000;
change(amountDue, amountPaid);

function total(cart) {
	var result = 0
	var item;
	for (var i = 0; i<cart.length; i++) {
		item = cart[i];
		result = result + item[1]
	}
	return result;
}

function change(total, cash) {
	var money = [
		['twenties', 2000],
		['tens', 1000],
		['fives', 500],
		['ones', 100],
		['quarters', 25],
		['dimes', 10],
		['nickles', 5],
		['pennies', 1]
	];
	var change = [];
	var diff = cash - total;

	for (var i=0; i < money.length; i++) {
		var denomination = money[i];
		var count = 0;
		while (diff >= denomination[1]) {
			count++;
			diff = diff - denomination[1];
		}
		if (count) {
			console.log(count + ' ' + denomination[0])
		}

	}

}
