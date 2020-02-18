//Задание 1
//Вариант 1
function returnFirstArgument(arg){
	return arg;
}

//Вариант 2
function defaultParameterValue(a, b = 100) {
	return (a + b);
}

//Вариант 3
function returnArgumentsArray() {
	return Array.from(arguments)
}
