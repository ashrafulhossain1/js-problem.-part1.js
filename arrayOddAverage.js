// array to odd number average
/**
1. function takes an array as  a parameter
2. give me average of the odd num avg.


1. put numbers in an array


*/

function oddAverage(numbers) {
    // console.log(numbers)
    const odds = [];
    for (const number of numbers) {
        // console.log(number)
        if (number % 2 === 1) {
            // console.log(number)
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const oddNumber of odds) {
        sum += oddNumber;
    }
    const count =odds.length;
    const average = sum / count;
    return average;
        // console.log(sum);
        // console.log(oddLength);
}

const numbers = [42, 13, 58, 65, 81, 7,105]
const avg = oddAverage(numbers);
console.log('avg of odd number', avg)




// ME in shortcut in minimum line


// function oddAverage(numbers) {
//     const odds = [];
//     sum =0;
//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             odds.push(number);
//             sum = sum +number;
//         }
//     }
//     const count =odds.length;
//     const average = sum / count;
//     return average;   
// }

// const numbers = [42,13,58,65,81,96,7]
// const avg = oddAverage(numbers);
// console.log('avg of odd number', avg)