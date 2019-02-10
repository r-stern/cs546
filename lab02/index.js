const s = require('./stringUtils.js')
const a = require('./arrayUtils.js')
const o = require('./objUtils.js')

// remove tests
try {
	// should pass
	const remove1 = a.remove([2, 4, 6], 1);
	console.log('remove passed successfully');
} catch (e) {
	console.error('remove failed test case');
}

try {
	// should fail
	const remove2 = a.remove([2, 4, 6], 3);
	console.log('remove did not error');
} catch (e) {
	console.error('remove failed successfully');
}

// countElements tests
try {
	// should pass
	const countelem1 = a.countElements([1, 2, 3, 35234, 3545]);
	console.log('countElements passed successfully');
} catch (e) {
	console.error('countElements failed test case');
}

try {
	// should fail
	const countelem2 = a.countElements("i be walkin' with the cheese, that's the queso.");
	console.log('countElements did not error');
} catch (e) {
	console.error('countElements failed successfully');
}

// repeat
try {
	// should pass
	const repeat1 = s.repeat("queso", 3);
	console.log('repeat passed successfully');
} catch (e) {
	console.error('repeat failed test case');
}

try {
	// should fail
	const repeat2 = s.repeat(3);
	console.log('repeat did not error');
} catch (e) {
	console.error('repeat failed successfully');
}

// extend
try {
	// should pass
	const first = { x: 2, y: 3 };
	const second = { a: 70, x: 4, z: 5 };
	const third = { x: 0, y: 9, q: 10 };
	const extend1 = o.extend(first, second, third);
	console.log ('extend passed successfully');
} catch (e) {
	console.error('extend failed test case');
}

try {
	// should fail
	const asdfghjkl = { x:2 };
	const extend2 = o.extend(asdfghjkl);
	console.log('extend did not error');
} catch (e) {
	console.error('extend failed successfully');
}
