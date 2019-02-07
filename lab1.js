/* I pledge my honor that I have abided by the Stevens Honor System. Rachel Stern */

const questionOne = function questionOne(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]*arr[i];
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    var fib = 0;
    if (num <= 0) {
        return fib;
    }
    else if (num == 1) {
        return fib+1;
    }
    else {
        return questionTwo(num-1) + questionTwo(num-2);
    }
}

const questionThree = function questionThree(text) {
    var num = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) == 'a' || 
            text.charAt(i) == 'A' || 
            text.charAt(i) == 'e' || 
            text.charAt(i) == 'E' || 
            text.charAt(i) == 'i' || 
            text.charAt(i) == 'I' || 
            text.charAt(i) == 'o' || 
            text.charAt(i) == 'O' || 
            text.charAt(i) == 'u' || 
            text.charAt(i) == 'U') {
            num++;
        }
    }
    return num;

}

const questionFour = function questionFour(num) {
    if (num < 0) {
        return NaN;
    }
    else if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return num * questionFour(num-1)
    }
}

module.exports = {
    firstName: "RACHEL", 
    lastName: "STERN", 
    studentId: "",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
