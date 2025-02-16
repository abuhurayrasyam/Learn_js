/*Some Strings Methods :
--To write a string use ''/""/``
--String is immutable(not changeable)
--In string lowercase and uppercase are not same. To convert full string in lowercase use: variableName.toLowercase() and to covert full string in uppercase use: variableName.toUppercase()
--To hide space from start and end of a sentence use: variableName.trim()
--To get some char or words from a string use: variableName.slice(first index number,last index number)
--To covert a string's words in a array use: variableName.split("space")
--To attach a full arrays all element use: variableName.join("space")
--To reverse a string use: 
    const variableName = stringVariableName.split("space").reverse().join("space");
    console.log(variableName);
*/


//Task-1: Count how many times a string has the letter a.
let str01 = "Count how many times a string has the letter a";
let countA = 0;
for (let i = 0; i <str01.length; i++){
    if (str01[i] === "a"){
        countA++;
    }
}
console.log(countA);

//Task-2:Count how many times a string has the letter a or A.
let str02 = "Count how many times a string has the letter a or A";
let countAorA = 0;
for (let i = 0; i <str02.length; i++){
    if (str02[i] === "a" || str02[i] === "A"){
        countAorA++;
    }
}
console.log(countAorA);

//Task-3: Check whether a string contains all the vowels a, e, i, o, u.

// Task-4: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Task-5: Capitalize Every first Letter of each word in a String.