let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // covert to number
console.log(typeof valueInNumber);// prints the type
console.log(valueInNumber); // NaN (not a number)


// "33"---> 33
// "33abc"--> NaN
//  true--> 1; false --> 0

