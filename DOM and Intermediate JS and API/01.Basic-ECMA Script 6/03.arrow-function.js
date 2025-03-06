//***//arrow function : => এটি ব্যবহার করে যে ফাংশন লিখা হয় তাকে Arrow ফাংশন বলে। ফাংশনকে শর্ট ভাবে লেখার প্রক্রিয়া। 
//singleline arrow function's example:
const add1 = (a,b) => a + b;
console.log(add1(2,2));
//output: 4

//multiple line arrow function's example:
const add2 = (c,d) => {
    return c + d;
}
console.log(add2(4,4));
//output: 8

//empty parameter arrow function's example:
const message = () => console.log("Hello World");
message(); //called the function.
//output: Hello World

//single parameter arrow function's example:
const square = x => x * x;
console.log(square(10));
//output: 100

//anonymous arrow function's example:
const anonymous = (z) => z + z; //anonymous is a variable.
console.log(anonymous(20));
//output: 40