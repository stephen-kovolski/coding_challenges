// Pig Latin

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".


// function translatePigLatin(str) {
    
//     let newEndWord = '',
//         newBegWord = '',
//         regex = /[aeiou]/;

//         if (regex.test(str[0])) {
//             console.log(str+'way')
//         } else {

//             for (let i = 1; i < str.length; i++) {

//                 if (regex.test(str[i])){

//                    newBegWord = str.slice(0, i)
//                    newEndWord = str.slice(i, str.length)

//                    return console.log(newEndWord + newBegWord + 'ay')

                   
//                   //  return newWord = str.push().slice(0, regex-1)
//                 }

//             }
//             //consoloe.log(str.slice(regex.test(str)).push(newWord)+)
//             //look for all o
//          }

//   }
  
//   translatePigLatin("cdfgoveglay");















function translatePigLatin(str) {
    
    let newBegWord = '',
        newEndWord = '',
        regex = /[aeiou]/;


        if (regex.test(str[0])) {
            console.log(str+'way')
        } else {

            for (let i = 0; i < str.length; i++) {
                if (regex.test(str[i])) {
                    
                    newBegWord = str.slice(0, 1)
                    newEndWord = str.slice(i, str.length)

                    console.log(str[i])


                    return
                }
                

            }

        }


  }
  
  translatePigLatin("consonant");


