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