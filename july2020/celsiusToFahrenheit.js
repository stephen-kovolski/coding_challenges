// node celsiusToFahrenheit.js



// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//  ( C * 9/5 )+32

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.




// function convertToF(celsius) {


//     let fahrenheit = (celsius*(9/5))+32;

//     console.log(fahrenheit)

// }

// convertToF(0);







// [*] convertToF(0) should return a number
// [*] convertToF(-30) should return a value of -22
// [*] convertToF(-10) should return a value of 14
// [*] convertToF(0) should return a value of 32
// [*] convertToF(20) should return a value of 68
// [*] convertToF(30) should return a value of 86




const readline = require('readline')

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    firstQuestion()

function firstQuestion(celsius){

    rl.question('Hello, \nI will convert any Celsius temperature to Fahrenheit.  Go ahead and try it out and enter a temperature below\nCelsius:', (celsius) => {


    let fahrenheit = (celsius*(9/5))+32;

    console.log(fahrenheit)


    console.log(`\nThe temperature in celsius that you requested to be converted was: ${celsius}\nThe temparature in fahrenheit is: ${fahrenheit}`);

    rl.question(`Would you like to try again?\n(y/n)\ninput:`, secondQuestion)


    })


    

}


function secondQuestion(string){

    string = string.toLowerCase().substring(0,1);

    if (string == 'y' || string == 'yes') {
        firstQuestion()

    } else {
        rl.question('rate you experinece 1 to 10\nRating:', (num) => {

            console.log(`\n\n Thank you for your feedback`);
            

            rl.close()

        })
    }

    console.log(string)



}








