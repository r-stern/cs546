/* I pledge my honor that I have abided by the Stevens Honor System. Rachel Stern */

const capitalize = function capitalize(string) {
	if (string == undefined || !string) {
		throw "Error: the function must have an argument.";
	}
	else if (typeof string !== "string") {
		throw "Error: the argument must be of string type.";
	}
	else {
		string2 = "";
		string2 += string.charAt(0).toUpperCase();
		for (var i = 1; i < string.length; i++) {
			string2 += string.charAt(i).toLowerCase();
		}
		return string2;
	}
}

const repeat = function repeat(string, num) {
	if (string == undefined || !string) {
		throw "Error: the function must have an argument.";
	}
	else if (typeof string !== "string") {
		throw "Error: the argument must be of string type.";
	}
	else if (num == null || !num) {
		throw "Error: the number must not be null.";
	}
	else if (num < 0) {
		throw "Error: the number must be greater than zero.";
	}
	else if (num == 0) {
		return "";
	}
	else {
		repeats = "";
		for (var i = 0; i < num; i++) {
			repeats += string;
		}
		return repeats;
	}
}

const countChars = function countChars(string) {
	if (string == undefined || !string) {
		throw "Error: the function must have an argument.";
	}
	else if (typeof string !== "string") {
		throw "Error: the argument must be of string type.";
	}
	else if (string.length == 0) {
		return 0;
	}
	else {
		var dict = {};
		for (var i = 0; i < string.length; i++) {
			if (dict.hasOwnProperty(string.charAt(i))) {
				dict[string.charAt(i)] += 1;
			}
			else {
				dict[string.charAt(i)] = 1;
			}
		}
		return dict;
	}
}

//console.log(capitalize("nct")); //Nct
//console.log(capitalize("NCT"));//Nct
//console.log(capitalize(undefined))//dne
//console.log(capitalize(123))//wrong type
//console.log(repeat('win', 2)); //winwin
//console.log(repeat(undefined, 1));//dne
//console.log(repeat('w', 1));//w
//console.log(repeat(121223, 3))//not string
//console.log(repeat("w", -1))//number not positive
//console.log(repeat("w"))//number dne
//console.log(countChars("the brown dog jumped over the lazy fox"));
//console.log(countChars("sicheng"));
//console.log(countChars(undefined)); //dne
//console.log(countChars(13242341)); //must be string
//console.log(countChars(""));//0

module.exports = {
	capitalize,
	repeat,
	countChars
}
