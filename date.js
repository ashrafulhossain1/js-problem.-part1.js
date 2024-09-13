// const today = new Date();
// console.log(today.toLocaleString())
// // console.log(today);
// const date = new Date('2062-10-19')
// console.log(date.getMonth())
// console.log(date.getDay())
const specificDate = new Date (1991, 0, 26) // month and day is index
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate)
console.log(specificDate.toLocaleString())

console.log(specificDate.toLocaleString('en-GB'))

