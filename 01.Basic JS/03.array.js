//***//অ্যারে (Array) : অ্যারে হল একটি ডেটা স্ট্রাকচার যা একাধিক মান ধরে রাখতে পারে। প্রতিটি মান একটি সূচক (ইনডেক্স) ব্যবহার করে অ্যাক্সেস করা যায়। এবং এটি ক্যামেল কেসে ডিক্লার করা হয়।

/*Some Arrays Methods :
--We can use for of loop, for loop and while loop in a array.
--To reverse a array use: 
    Using method: arrayName.revers()
    Using loop: 
        const newArrayName = [];
        for(let i = arrayName.length - 1; i >= 0; i--){
            const variableName = arrayName[i];
            newArrayName.push(variableName);
        }
        console.log(newArrayName);
--To sort a string array use: arrayName.sort();
--To ascending a number array use: [...arrayName].sort(function(a,b){return a-b});
--To descending a number array use: [...arrayName].sort(function(a,b){return b-a});
*/

//Part-01

//Task-01 : Declare an array
let fruits = ["apple", "orange", "mango", "jackfruit", "grape"]; // Declare an array with 5 elements containing fruits
console.log(fruits);
console.log(fruits[3]); // console log the 3rd index element
fruits[2] = "jambura"; // change the value of the 2nd index element to jambura
console.log(fruits); // console log the final array

//Task-02 : Add or remove elements
let touristDestinations = ["coxbazar", "sondarban", "rangamati"]; // Declare an array of 3 tourist destinations
touristDestinations.push("bandarban"); // Add a new tourist destination to your tourist array at last
touristDestinations.unshift("khagracori", "potenga"); // Add two more to your array at first
console.log(touristDestinations);
touristDestinations.pop(); // Remove the last tourist destination you have added
touristDestinations.shift(); // Remove the first tourist destination you have added
console.log(touristDestinations); // display the final array as output

//Task-03 : Checking Array Membership with ‘includes’
let books = ["bangla", "english", "math"]; // Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.
if(books.includes("math")){ 
    console.log("The math book have in array");
}
else{
    console.log("the math book not in array");
}

//Task-04 : Checking if it's an Array
// Create different variables, each containing either an array or a non-array value.
let fruits01 = ["bannana"];
let fruits02 = [];
let fruits03 = "mango";
// Now use isArray to check if each variable is an array.
console.log(Array.isArray(fruits01));
console.log(Array.isArray(fruits02));
console.log(Array.isArray(fruits03));
// Print a message to the console indicating whether each variable is an array or not.
if(Array.isArray(fruits01)){
    console.log("Its an array");
}
else{
    console.log("Its not an array");
}

//Task-05 : Combining Arrays
// Create two arrays of your choice.
let food01 = ["vat", "sak"];
let food02 = ["mac", "mangsho"];
// Use the concat method to combine the two arrays into a new array.
let foods = food01.concat(food02);
// Print both the original arrays and the combined array using console.log().
console.log(food01);
console.log(food02);
console.log(foods);
console.log(foods.length); // Length of a array
console.log(foods[3]) // value find using index number



//Part-02
//Task 1 : Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverseColors = [];
for (let i = colors.length - 1; i >= 0; i--){
    const color = colors[i];
    reverseColors.push(color);
}
console.log(reverseColors);

//Task 2 : Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    if (num % 2 !== 0){
        continue;
    }
    console.log(num);
}

//Task 3 : Use a for...of loop to concatenate all the elements of an array into a single string.
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let newName = '';
for (let name of names){
    newName += name;
}
console.log(newName);

//Task 4 : Reverse the words of a sentence. Only the position of the word will be reversed. check out the output.
//One Way:
const statement = 'I am a hard working person';
const statementsArray = statement.split(" ");
const reverseStatementsArray = [];
for (let i = statementsArray.length - 1; i >= 0; i--){
    const statementArray = statementsArray[i];
    reverseStatementsArray.push(statementArray);
}
console.log(reverseStatementsArray.join(" "));
//Another Way:
const statement1 = 'WE am a hard working person';
const reverseStatement1 = statement1.split(" ").reverse().join(" ")
console.log(reverseStatement1)
