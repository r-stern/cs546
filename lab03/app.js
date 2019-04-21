const people = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){
	// test getPersonById, should return "Brew Peat"
	try {
		const peopledata = await people.getPersonById(43);
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test getPersonById, should return Error: out of bounds
	try {
		const peopledata = await people.getPersonById(0);
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test getPersonById, should return Error: must be of type numbers
	try {
		const peopledata = await people.getPersonById("1000");
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test getPersonById, should return Error: arg doesn't exist
	try {
		const peopledata = await people.getPersonById();
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test lexIndex, should return dermot abberley
	try {
		const peopledata = await people.lexIndex(2);
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test lexIndex, should return error out of bounds
	try {
		const peopledata = await people.lexIndex(-1);
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test lexIndex, should return error out of bounds
	try {
		const peopledata = await people.lexIndex(1000);
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test lexIndex, should return error dne
	try {
		const peopledata = await people.lexIndex();
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test firstnamemetrics
	try {
		const peopledata = await people.firstNameMetrics();
		console.log(peopledata);
	} catch(e){
		console.log(e);
	}
	// test shouldTheyGoOutside, yes
	try {
		const weatherdata = await weather.shouldTheyGoOutside("Scotty", "Barajaz");
		console.log(weatherdata);
	} catch(e){
		console.log(e);
	}
	// shouldTheyGoOutside, no
	try {
		const weatherdata = await weather.shouldTheyGoOutside("Calli", "Ondrasek");
		console.log(weatherdata);
	} catch(e){
		console.log(e);
	}
	// shouldTheyGoOutside, error not found
	try {
		const weatherdata = await weather.shouldTheyGoOutside("yuta","nakamoto");
		console.log(weatherdata);
	} catch(e){
		console.log(e);
	}
	// shouldTheyGoOutside, error dne
	try {
		const weatherdata = await weather.shouldTheyGoOutside();
		console.log(weatherdata);
	} catch(e){
		console.log(e);
	}
	// STGO, error must be string
	try {
		const weatherdata = await weather.shouldTheyGoOutside(132343, "123123");
		console.log(weatherdata);
	} catch(e){
		console.log(e);
	}
	
	// wheredotheywork: "Demetra Durrand - Nuclear Power Engineer at Buzzshare. They will be fired."
	try {
		const workdata = await work.whereDoTheyWork("Demetra", "Durrand");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// wheredotheywork: "Returns: "Hank Tarling - Technical Writer at Babbleblab. They will not be fired.""
	try {
		const workdata = await work.whereDoTheyWork("Hank", "Tarling");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// wheredotheywork: error dne
	try {
		const workdata = await work.whereDoTheyWork("doyoung", "kim");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// wheredotheywork: error dne
	try {
		const workdata = await work.whereDoTheyWork("jaemin");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// wheredotheywork: error must be strings
	try {
		const workdata = await work.whereDoTheyWork(1223, 1223);
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// findthehacker: "robert herley is the hacker!"
	try {
		const workdata = await work.findTheHacker("79.222.167.180");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// findthehacker: "ip doesnt exist"
	try {
		const workdata = await work.findTheHacker("79.223.167.180");
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// findthehacker: err wrong type
	try {
		const workdata = await work.findTheHacker(79.223);
		console.log(workdata);
	} catch(e){
		console.log(e);
	}
	// findthehacker: err dne
	try {
		const workdata = await work.findTheHacker();
		console.log(workdata);
	} catch(e){
		console.log(e);
	}

}

main();
