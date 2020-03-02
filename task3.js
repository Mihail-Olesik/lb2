//Задание 3
//Вариант 1
function deleteProperty(obj, prop)
{	
	delete obj[prop]
}

//Вариант 2
function hasProperty(obj, prop){
	if(prop in obj)
		return true
	else
		return false
}

//Вариант 3
function getEnumProps(obj){
	let a = [];
	for (i in obj){
		if(Number.isInteger(obj[i])){
			a.push(obj[i])
		}
	}
	return a
}

//Вариант 4
function upperProps(obj){
	let a = [];
	for (i in obj){
		a.push(i.toUpperCase())
	}
	return a
}