// romanNumeralConverter.js

function convertToRoman(num){

let romNumObj = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}


let newString = '';


 //first loop is to go through the keys of the obj

 for (let key in romNumObj) {
        console.log(key)
        console.log(romNumObj[key])

    //write another loop for the logic of comapring the key/value to num/
    //if num (2) is >= 100, 500, 100, ...  Its greater thatn 1.  It needs to add 1 to newString.

    while (num >= romNumObj[key]) {

    //     //want to add RN to newString
    newString += key;

    // //want to decrease the number from num similar to x--

     num -= romNumObj[key]
    }

    // //return newString
    console.log(newString)

}

}
convertToRoman(36)