/*
*
*array has some duplicate elements
*
*
*
*
*/
const biriryani = ['abul', 'babul;', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul']

const numbers = [1, 5, 61, 87, 7, 5, 81, 61];


function noDuplicate(array) {
    // console.log(array)
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

// const uniqueArray = noDuplicate(biriryani);
// console.log(uniqueArray)

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray)