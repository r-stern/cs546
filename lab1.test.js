
/* Testing for Lab 1
	I pledge my honor that I have abided by the Stevens Honor System. Rachel Stern */

const lab1 = require("./lab1");

// test cases for questionOne
console.log(lab1.questionOne([1, 2, 3])); 
// should output 14
console.log(lab1.questionOne([5, 3, 10])); 
// should output 134
console.log(lab1.questionOne([2, 1, 2]));
// should output 9
console.log(lab1.questionOne([2, 10, 12]));
// should output 248
console.log(lab1.questionOne([5]));
// should output 25

// test cases for questionTwo
console.log(lab1.questionTwo(-1));
// should output 0
console.log(lab1.questionTwo(0));
// should output 0
console.log(lab1.questionTwo(1));
// should output 1
console.log(lab1.questionTwo(6));
// should output 8
console.log(lab1.questionTwo(11));
// should output 89

// test cases for questionThree
console.log(lab1.questionThree("aeiouaeiou"));
// should output 10
console.log(lab1.questionThree("hjklm nbvcx z"));
// should output 0
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); 
// should output 196
console.log(lab1.questionThree("we be screaming go, go go"));
// should output 8
console.log(lab1.questionThree("tomato soup"));
// should output 5

// test cases for questionFour
console.log(lab1.questionFour("-2"));
// should output NaN
console.log(lab1.questionFour("0"));
// should output 1
console.log(lab1.questionFour("1"));
// should output 1
console.log(lab1.questionFour("2"));
// should output 2
console.log(lab1.questionFour("5"));
// should output 120

