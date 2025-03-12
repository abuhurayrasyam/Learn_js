//জাভাস্ক্রিপ্টে কিছু মান আছে যেগুলো true বা false হিসেবে মূল্যায়িত হয়। এগুলোর মধ্যে কিছু মান falsy (যেগুলো false হিসেবে বিবেচিত হয়) এবং কিছু truthy (যেগুলো true হিসেবে বিবেচিত হয়)।

//***//falsy মান: নিম্নলিখিত মানগুলি falsy হিসেবে বিবেচিত হয়:-
//01. false
//02. 0 (শূন্য)
//03. "" (শূন্য স্ট্রিং)
//04. null
//05. undefined
//06. NaN (Not a Number)

//উদাহরণ:-
if (false) {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}

if (0) {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}

if ("") {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}

if (null) {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}

if (undefined) {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}

if (NaN) {
    console.log("This won't be printed.");
} else {
    console.log("This will be printed."); //output: This will be printed.
}


//***//truthy মান: falsy মান ছাড়া সবকিছুই truthy হিসেবে বিবেচিত হয়। কিছু সাধারণ উদাহরণ:-
//01. true
//02. সংখ্যা (শূন্য ছাড়া)
//03. স্ট্রিং (শূন্য স্ট্রিং ছাড়া)
//04. অবজেক্ট এবং অ্যারে

//উদাহরণ:-
if (true) {
    console.log("This will be printed."); //output: This will be printed.
}

if (1) {
    console.log("This will be printed."); //output: This will be printed.
}

if ("hello") {
    console.log("This will be printed."); //output: This will be printed.
}

if ([]) {
    console.log("This will be printed."); //output: This will be printed.
}

if ({}) {
    console.log("This will be printed."); //output: This will be printed.
}