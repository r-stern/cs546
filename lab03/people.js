/* i pledge my honor that i have abided by the stevens honor system. rachel stern */
const axios = require('axios');

async function getPersonById (id) {
	const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
	if (!id && id != 0) {
		throw "Error: the argument doesn't exist.";
	}
	if(typeof(id) != "number") {
		throw "Error: the argument must be of type number.";
	}
	if((id-1) < 0 || id-1 > data.length) {
		throw "Error: the index is out of bounds.";
	}
	else {
		return data[id-1].firstName + " " + data[id-1].lastName;
	}
}

async function lexIndex(index) {
	const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');

	if (!index) {
		throw "Error: the argument doesn't exist.";
	}
	if(typeof(index) != "number") {
		throw "Error: the argument must be of type number.";
	}
	if(index < 0 || index > data.length) {
		throw "Error: the index is out of bounds.";
	}
	else {
		data.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
		return data[index].firstName + " " + data[index].lastName;
	}

}

async function firstNameMetrics() {
	const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');

	var totalLetters = 0;
	var totalVowels = 0;
	var totalConsonants = 0;
	var longestName = data[0].firstName;
	var shortestName = data[0].firstName;

	for (var i = 0; i < data.length; i++) {
		totalLetters += data[i].firstName.length;
		for (var j = 0; j < data[i].firstName.length; j++) {
			if (data[i].firstName.charAt(j) == "a" || data[i].firstName.charAt(j) == "e" || 
				data[i].firstName.charAt(j) == "i" || data[i].firstName.charAt(j) == "o" || 
				data[i].firstName.charAt(j) == "u" || data[i].firstName.charAt(j) == "A" || 
				data[i].firstName.charAt(j) == "E" || data[i].firstName.charAt(j) == "I" || 
				data[i].firstName.charAt(j) == "O" || data[i].firstName.charAt(j) == "U") {
					totalVowels += 1;
			}
			else {
				totalConsonants += 1;
			}
		}
		if (data[i].firstName.length > longestName.length) {
			longestName = data[i].firstName;
		}
		if (data[i].firstName.length < shortestName.length) {
			shortestName = data[i].firstName;
		}
	}
	return return { totalLetters: totalLetters, 
			 totalVowels: totalVowels,
			 totalConsonants: totalConsonants,
			 longestName: longestName,
			 shortestName: shortestName	} 
}

module.exports = {
	getPersonById,
	lexIndex,
	firstNameMetrics
}
