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