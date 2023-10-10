// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
    // TODO
    return numbers.length;
};
console.log(`You have given ${getLength(numbers)} numbers.`);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
    // TODO
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(`The sum of your numbers is ${getSum(numbers)}.`);


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
    // TODO
    const sum = getSum(numbers);
    return sum / numbers.length;
}

console.log(`The mean of your numbers is ${getMean(numbers)}.`);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
    // TODO
    return Math.min(...numbers);
}
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
    // TODO
    return Math.max(...numbers);
}

console.log('the max of your array is ${numbers.length-1}');

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
    // TODO
    if (!numbers.length) return null;
    let maxVal = Math.max(...numbers);
    let minVal = Math.min(...numbers);

    return maxVal - minVal;

}
console.log(`The range of your numbers is ${getRange(numbers)}.`);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
    // TODO
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            numbers.push(numbers[i]);
        }
    }
    return numbers;
}
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
    // TODO
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            numbers.push(numbers[i]);
        }
        return numbers;
    }
}
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);