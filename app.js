
let itirate = true;

while (itirate) {
	let weight = +prompt ('Введите свой текущий вес');
	let goal = +prompt ('Введите желаемый вес');
	let diff = weight - goal;
		if (diff === 0) {
			alert ('Вы достигли своей цели');
			break;
		}
	let days = +prompt ('За сколько дней');

		function recommend () {
		let result = diff * 1100 / days;
		if (result > 0) {
			alert ('Чтобы достичь желаемого веса, Вам нужно терять ' + (result) + ' ккал в день');
		} else {
			alert ('Чтобы достичь желаемого веса, Вам нужно прибавлять ' + (result) + ' ккал в день');
		}
	}
	recommend ();
		let itirate = confirm ('Повторить еще раз?');
		if (itirate) {
			alert ('Ok');
		} else {
			break;
		}
}