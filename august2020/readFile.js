// node readFile.js

// const fs = require('fs');

// let newArray = [];


// let info = fs.readFileSync('info.txt', 'utf8');

//     newArray.push(info)

//     for (let i = 0; i < newArray.length; i++) {

        

//     }



// console.log(newArray)




const fs = require('fs');

let stateArray = [];
let numArray = [];


let newArray = fs.readFileSync('info.txt', 'utf8', (err, data) => {
    if(err) throw err;
        

        newArray.split('\r\n\+\'\\')


for (let i = 0; i < newArray.length; i++) {

    if(newArray[i] != Number) {

        stateArray.push()

    } else {

        numArray.push()

    }

}

return(data);

});




console.log(newArray);
console.log(stateArray);
console.log(numArray);

