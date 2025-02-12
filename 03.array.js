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


