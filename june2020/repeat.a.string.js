//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.




const readline = require('readline')

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    firstQuestion()

function firstQuestion(string, num){

    rl.question('What string would you like to have repeated?\nString:', (string) => {

        console.log(string)

    let newstring = '';

    for (let i = 0; i < string.length; i++) {

        console.log(string[i]);
        
        newstring += string[i];

    }

    console.log(`\nOriginal: ${string}\nReversed: ${newstring}`);

    rl.question(`Would you like to try again?\n(y/n)\ninput:`, secondQuestion)


    })


    

}


function secondQuestion(string){

    string = string.toLowerCase().substring(0,1);

    if (string == 'y' || string == 'yes') {
        firstQuestion()

    } else {
        rl.question('rate you experinece 1 t 10 \nRating:', (num) => {

            console.log(`\n\n Thank you for your feedback`);
            

            rl.close()

        })
    }

    console.log(string)



}



//standin an standout