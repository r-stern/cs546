/* i pledge my honor that i have abided by the stevens honor system. rachel stern */
const axios = require('axios');

async function whereDoTheyWork(firstName, lastName) {
	const people = (await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')).data;
	const work = (await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')).data;

	if (!firstName || !lastName) {
		throw "Error: one or both parameters does not exist.";
	}
	if (typeof(firstName) != "string" || typeof(lastName) != "string") {
		throw "Error: both parameters must be strings.";
	}
	for (var i = 0; i < people.length; i++) {
		if (people[i].firstName == firstName && people[i].lastName == lastName) {
			for (var j = 0; j < work.length; j++) {
				if (people[i].ssn == work[j].ssn) {
					if (work[j].willBeFired == true) {
						return firstName + " " + lastName + " - " + work[j].jobTitle + " at " 
							+ work[j].company + ". They will be fired.";
					}
					else {
						return firstName + " " + lastName + " - " + work[j].jobTitle + " at " 
							+ work[j].company + ". They will not be fired.";
					}
				}
			}
		}
	}
	throw "Error: no one with that name exists in the people array.";
}

async function findTheHacker(ip) {
	const people = (await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')).data;
	const work = (await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')).data;

	if (!ip) {
		throw "Error: the argument does not exist.";
	}
	if (typeof(ip) != "string") {
		throw "Error: argument must be an IP address.";
	}
	for (var i = 0; i < work.length; i++) {
		if (work[i].ip == ip) {
			for (var j = 0; j < people.length; j++) {
				if (work[i].ssn == people[j].ssn) {
					return people[j].firstName + " " + people[j].lastName + " is the hacker!";
				}
			}
		}
	}
	throw "Error: IP is not in the work array.";
}

module.exports = {
	whereDoTheyWork,
	findTheHacker
}
