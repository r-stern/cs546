/* I pledge my honor that I have abided by the Stevens Honor System. Rachel Stern */

const extend = function extend(...args) {
	var dict = {};
	if(args.length < 2) {
		throw "Error: there must be at least two arguments.";
	}
	else {
		//console.log(args.length);
		for (var i = 0; i < args.length; i++) {
			//console.log(i);
			if (!args[i]) {
				throw "Error: an argument is undefined.";
			}
			else if (typeof(args[i]) != "object") {
				throw "Error: all arguments must be objects.";
			}
			else {
				args.forEach(k => {
					for (let j in k) {
						//console.log(!dict.hasOwnProperty(dict[j]));
						// if key in object
						if (!(j in dict)) {
							dict[j] = k[j];							
						}
					} 
				});
			}
		}
		return dict;
	}
}

const smush = function smush(...args) {
	var dict = {};
	if(args.length < 2) {
		throw "Error: there must be at least two arguments.";
	}
	else {
		for (var i = 0; i < args.length; i++) {
			for (var m = 0; m < args.length; m++) {
				if (!args[i]) {
					throw "Error: an argument is undefined.";
				}
				else if (typeof(args[i]) != "object") {
					throw "Error: all arguments must be objects.";
				}
			}
			args.forEach(k => {
				for (let j in k) {
					dict[j] = k[j];							
				} 
			});
		}
		return dict;
	}
}

const mapValues = function mapValues(object, func) {
	if (!object) {
		throw "Error: the object argument is undefined.";
	}
	else if (!func) {
		throw "Error: the function argument is undefined.";
	}
	else if (typeof(object) != "object") {
		throw "Error: the first argument must be an object.";
	}
	else if (typeof(func) != "function") {
		throw "Error: the second argument must be a function.";
	}
	else {
		ndict = {};
		for (var key in object) {
			ndict[key] = func(object[key]);
		}
		return ndict;
	}
}

//const first = { x: 2, y: 3};
//const second = { a: 70, x: 4, z: 5 };
//const third = { x: 0, y: 9, q: 10 };
//const fourth = { x: 0, y: 9, q: 10 };
//console.log(extend(first, second, third));
//console.log(extend('undefined', first)); //must be obj
//console.log(extend(undefined, first)); //arg undefined

//console.log(smush(first, second, third));
//console.log(smush('undefined', first)); //must be obj
//console.log(smush(undefined, first));//arg undefined/dne
//console.log(mapValues({ a:1, b:2, c:3 }, n => n + 1)); // {a:2,b:3,c:4}
//console.log(mapValues("hihihihi", n => n + 1)); //must be obj
//console.log(mapValues({ a:1 }, "ewfiwefigwef")); //must be function

//console.log(smush({}, 1234));

module.exports = {
	extend,
	smush,
	mapValues
}
