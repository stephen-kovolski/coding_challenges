const readline = require('readline')

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    firstQuestion()

function firstQuestion(answer){

    rl.question('What would you like me to reverse?\nString:', (answer) => {

        console.log(answer)

    let newAnswer = '';

    for (let i = answer.length-1; i >= 0; i--) {

        console.log(answer[i]);
        
        newAnswer += answer[i];

    }

    console.log(`\nOriginal: ${answer}\nReversed: ${newAnswer}`);

    rl.question(`Would you like to try again?\n(y/n)\ninput:`, secondQuestion)


    })


    

}


function secondQuestion(answer){

    answer = answer.toLowerCase().substring(0,1);

    if (answer == 'y' || answer == 'yes') {
        firstQuestion()

    } else {
        rl.question('rate you experinece 1 t 10 \nRating:', (num) => {

            console.log(`\n\n Thank you for your feedback`);
            

            rl.close()

        })
    }

    console.log(answer)



}



//standin an standout