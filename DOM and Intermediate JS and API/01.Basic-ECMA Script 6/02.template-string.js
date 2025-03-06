//***//template literals or template string : ` ` মধ্যে লিখিত কোড কে টেমপ্লেট স্ট্রিং বলে। স্ট্রিং এর ভিতরে মাল্টিপল লাইন লেখার জন্য এটি ব্যবহৃত হয়ে থাকে। ভেরিয়েবল কে টেমপ্লেট স্ট্রিং এর মধ্যে লিখতে চাইলে ${variableName} এভাবে লিখতে হয়।
//example:
const surname = "Hurayra";
const myName = `Abu 
${surname}
Syam`;
console.log(myName);
//output: 
//Abu 
//Hurayra 
//Syam 