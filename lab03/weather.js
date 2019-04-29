/* i pledge my honor that i have abided by the stevens honor system. rachel stern */
const axios = require('axios');

async function shouldTheyGoOutside (firstName, lastName) {
	const people = (await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')).data;
	const weather = (await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')).data;

	if (!firstName || !lastName) {
		throw "Error: one or both parameters does not exist.";
	}
	if (typeof(firstName) != "string" || typeof(lastName) != "string") {
		throw "Error: both parameters must be strings.";
	}
	for (var i = 0; i < people.length; i++) {
		if (people[i].firstName == firstName && people[i].lastName == lastName) {
			var pzip = people[i].zip;
			for (var j = 0; j < weather.length; j++) {
				if (weather[j].zip == pzip) {
					if (weather[j].temp >= 34) {
						//console.log("Yes, " + people[i].firstName + " should go outide.");
						return "Yes, " + people[i].firstName + " should go outside.";
					}
					else {
						return "No, " + people[i].firstName + " should not go outside.";
					}
				}
			}
		}
	}
	throw "Error: a person with that name does not exist in the people array.";
}

module.exports = {
	shouldTheyGoOutside
}
