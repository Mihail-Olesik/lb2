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

//Вариант 3
function reduce(array, fn, initial = 0) {
	prev = 0;	
	for(i = 0; i < array.length; i++)
		prev = fn(prev, array[i]);
	return prev;
} 
