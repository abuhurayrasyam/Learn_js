//***//object destructure : হল একটি পদ্ধতি যা অবজেক্টের values গুলিকে পৃথক ভেরিয়েবলের মধ্যে আনপ্যাক করে।
const person01 = { name: "Hurayra", age: 24 };
const { name, age } = person01; //object destructure
console.log(name); //output: Hurayra
console.log(age);  //output: 24

//***//array destructure : হল একটি পদ্ধতি যা অ্যারের উপাদানগুলিকে পৃথক ভেরিয়েবলের মধ্যে আনপ্যাক করে।
const fruits = ["Watermelon", "Mango", "Lychee"];
const [watermelon, mango, lychee] = fruits; //array destructure
console.log(watermelon); //output: Watermeloan
console.log(mango); //output: Mango
console.log(lychee); //output: Lychee