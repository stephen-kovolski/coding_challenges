// node pig_latin.js


// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {
    
    let vowels = /[a,e,i,o,u]/gi

    let varName = vowels.test(str[0])

    let varNombre = vowels.test(str)



    if (varName === true) {

        return str + 'way';

    

    } else if (varNombre != true) {

        return str + 'ay';
    }
    
    else {

        return str.substring(1, str.length) + str.substring(0, 1) + 'ay';

    } 


  }

  function translateSentence(sentence) {

        


        const allWords = sentence.split(' ');

        for (let i = 0; i < allWords.length; i++) {
            const word = allWords[i];


            // console.log('word', i, word)

            // console.log('translate', translatePigLatin(word));

                finalStr += `${translate(word)}`

        }



  }

translateSentence('hello my name is abe')





//console.log(translatePigLatin("california")) //should return "aliforniacay".
//console.log(translatePigLatin("paragraphs"))// should return "aragraphspay".
//console.log(translatePigLatin("glove")) //should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
//console.log(translatePigLatin("rhythm")) //should return "rhythmay".

