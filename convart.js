// 12 inch(1feet) to feet

function inchToFeet(inch) {
    const feet = parseInt(inch / 12);

    const RemainingInch = (inch % 12);
    const result = feet + ' ft ' + RemainingInch + ' inc ';
    return result

}
// const height = inchToFeet(55);
// console.log(height);

// // mile to kilometer 

function mileToKilo(mile) {
    const kilometerIs = (mile * 1.60934);
    return kilometerIs;
}

function kiloToMile(kilo) {
    const mileIs = (kilo * 0.62137119);
    return mileIs;
}

const outputKiloIs = mileToKilo(10);
const outputMiles = kiloToMile(outputKiloIs);

// console.log('km:', outputKiloIs, 'and' , 'mile:', outputMiles)

// loop to inch to feet

// function inchToFeet(inch) {
//     if (!! inch % 12) {
//         // const remainingInch = inch % 12;
//         // return remainingInch;
//     }

// }
// const inch = inchToFeet(40);
// console.log(inch)

const inch = 12;
console.log((!! inch % 12) )