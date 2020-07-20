// node largestNumberInArray.js

/*

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/


function largestOfFour(arr) {

    let finalAnswer = [];


    for (let i = 0; i < arr.length; i++) {

            let largestNumber = arr[i][0];

        for (let j = 1; j < arr[i].length; j++) {

            if (arr[i][j] > largestNumber) {
             largestNumber = arr[i][j];
            }

        }

        finalAnswer[i] = largestNumber

    }


    console.log(finalAnswer);
  }
  
   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//**************************************************************************** */

   const readline = require('readline')

   rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout,

   });

   firstQuestion()

function firstQuestion(string, num){

   rl.question('Would you like to find the largest number in an array?\nString:', (string) => {

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

