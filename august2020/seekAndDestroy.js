/*

node seekAndDestroy.js

Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object. 



*/


function destroyer(arr) {

  let newArray = [];

  for (const numbers of arguments) {

      if (typeof numbers != 'object' ) {
console.log(numbers)
        for (let i = 0; i < arr.length; i++) {

          if (arr[i] != numbers) {
console.log(arr[i])
              newArray.push(arr[i])

          }

      }
    
  }

}

  return newArray;

}  

  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


      


  
