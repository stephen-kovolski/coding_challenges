const readline = require('readline')

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    firstQuestion()

function firstQuestion(string, num){

    rl.question('ASK THE FIRST QUESTION?\nString:', (string) => {

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