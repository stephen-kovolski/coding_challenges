//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


// function spinalCase(str) {
    
//     let newString = str.split(' ').join('-').toLowerCase();

//     console.log(newString);
    

//   }
  
//   spinalCase('This Is Spinal Tap');




  const readline = require('readline')

    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    firstQuestion()

function firstQuestion(str){

    rl.question('What would you like me to hyphanat and put in lower case?\nString:', (str) => {

        console.log(str)

        let newString = str.split(' ').join('-').toLowerCase();

    console.log(`\nOriginal: ${str}\nNew String: ${newString}`);



    })


    

}


