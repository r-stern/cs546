/* I pledge my honor that I have abided by the Stevens Honor System. Rachel Stern */

const head = function head(arr) {
	if (typeof(arr) == 'undefined' || arr == 'undefined' || !arr) {
		throw "Error: the argument does not exist.";
	}
	else if (!Array.isArray(arr)){
		throw "Error: the argument must be an array.";
	}
	else if(arr.length == 0) {
		throw "Error: the array has no elements.";
	}
	else {
		return arr[0];
	}
}

const last = function last(arr) {
	if (typeof(arr) == 'undefined' || arr == 'undefined' || !arr) {
		throw "Error: the argument does not exist.";
	}
	else if (!Array.isArray(arr)){
		throw "Error: the argument must be an array.";
	}
	else if(arr.length == 0) {
		throw "Error: the array has no elements.";
	}
	else {
		return arr[arr.length-1];
	}
}

const remove = function remove(arr, index) {
	if (typeof(arr) == 'undefined' || arr == 'undefined' || !arr) {
		throw "Error: the argument does not exist.";
	}
	else if (!Array.isArray(arr)){
		throw "Error: the argument must be an array.";
	}
	else if(arr.length == 0) {
		throw "Error: the array has no elements.";
	}
	else if (index < 0 || index > arr.length-1 || typeof(index) == 'undefined' || !index) {
		throw "Error: index out of bounds or does not exist.";
	}
	else {
		arr.splice(index, 1);
		return arr;
	}
}

const range = function range(end,value) {
	var arr = [];
	if (typeof(end) == 'undefined' || end == 'undefined' || !end) {
		throw "Error: the end argument must have a value.";
	}
	else if (!Number.isInteger(end)) {
		throw "Error: the end argument must be an integer.";
	}
	else if (end < 0) {
		throw "Error: the end argument must be greater than zero.";
	}
	else if (!value && Number.isInteger(end) && end > 0) {
		for (var i = 0; i < end; i++) {
			arr.push(i);
		}
		return arr;
	}
	else if (Number.isInteger(end) && end > 0) {
		for (var i = 0; i < end; i++) {
			arr.push(value);
		}
		return arr;
	}
}

const countElements = function countElements(array) {
	if (array == 'undefined' || typeof(array) == 'undefined' || !array) {
		throw "Error: Array does not exist.";
	}
	else if (!Array.isArray(array)){
		throw "Error: the argument must be an array.";
	}
	else if (array.length == 0) {
		return 0;
	}
	else {
		var dict = {};
		for (var i = 0; i < array.length; i++) {
			if (dict.hasOwnProperty(array[i])) {
				dict[array[i]] += 1;
			}
			else {
				dict[array[i]] = 1;
			}
		}
		return dict;
	}
}

const isEqual = function isEqual(arrayOne, arrayTwo) {
	if (arrayOne == 'undefined' || typeof(arrayOne) == "undefined" || !arrayOne) {
		throw "Error: the first array/argument does not exist.";
	}
	if (arrayTwo == 'undefined' || typeof(arrayTwo) == "undefined" || !arrayTwo) {
		throw "Error: the second array/argument does not exist.";
	}
	else if (!Array.isArray(arrayOne)){
		throw "Error: the arguments must be an array, and the first one is not.";
	}
	else if (!Array.isArray(arrayTwo)){
		throw "Error: the arguments must be an array, and the second one is not.";
	}
	else if (arrayOne.length == arrayTwo.length) {
		for (var i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i] != arrayTwo[i]) {
				return false;
			}
		}
		for (var j = 0; j < arrayOne.length; j++) {
			if (typeof(arrayOne[j]) != "number" || typeof(arrayTwo[j]) != "number") {
				return false;
			}
		}
		return true;
	}
	else {
		return false;
	}
}

//console.log(head([3, 2, 123])); // return 3
//console.log(head([])); // return error: array has no elements
//console.log(head(undefined)); // error: arg does not exist
//console.log(head("quesoquesoqueso")); // error arg must be array
//console.log(head()); //arg DNE

//console.log(last(["yangyang", "ten", "lucas", "xiaojun", "sicheng"])); // sicheng
//console.log(last([])); //array has no elements
//console.log(last('undefined')); // arg does not exist
//console.log(last(123123123)); // arg must be array
//console.log(last()); // arg dne

//console.log(remove(["sicheng", "xiaojun", "mark", "hendery"], 2)); //sicheng, xiaojun, hendery
//console.log(remove(["sicheng", "xiaojun"])); //index out of bounds, or dne
//console.log(remove(["ta", "wo", "ni"], -1)); //index not within bounds
//console.log(remove([], 1)); //array has no elements
//console.log(remove(['undefined'])); // arg not defined/dne
//console.log(remove()); // no args

//console.log(range(4));//[0,1,2,3]
//console.log(range(4, 'win'));//["win", "win", "win", "win"]
//console.log(range("dream launch plan!")); //arg must be int
//console.log(range('undefined', 12321)); // must have a value
//console.log(range(-1, 23)); // end arg must be >0

//console.log(countElements(["sicheng", "sicheng", "wayv", "wayv", "wayv", "ten", "nct"])); // {"sicheng": 2, "wayv": 3, "ten": 1, "nct": 1}
//console.log(countElements(["a", "a"])); // { "a": 2 }
//console.log(countElements([])); //{ 0 }
//console.log(countElements(undefined)); // array does not exist
//console.log(countElements("some stuff")); // arg must be array

//console.log(isEqual([1, 2, 3], [1, 3, 2])); // false
//console.log(isEqual([1, 2], [1, 2])); // true
//console.log(isEqual(['undefined'], [1])) // arrayone doesnt exist
//console.log(isEqual([1, 2, 3], [1])); //false
//console.log(isEqual([1], ['undefined'])) //a2 doesnt exist
//console.log(isEqual("iiiii", [1])); // a1 must be array
//console.log(isEqual([1], "iiiii")); //a2 must be array

//console.log(isEqual([1,2,3], [1,'2',3]))

module.exports = {
	head,
	last,
	remove,
	range,
	countElements,
	isEqual
};
