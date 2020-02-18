//Задание 2
//Вариант 1
function forEach(array, fn) {
	for(i = 0; i < array.length; i++)
		fn(array[i]);
} 

//Вариант 2
function map(array, fn) {
	arr = [];
	for(i = 0; i < array.length; i++)
		arr.push(fn(array[i]));
	return arr;
} 

