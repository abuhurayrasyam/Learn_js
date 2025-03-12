//***//Hoisting : Hoisting হল জাভাস্ক্রিপ্টের একটি মেকানিজম, যেখানে ভেরিয়েবল এবং ফাংশন ডিক্লেয়ারেশনগুলি তাদের স্কোপের শীর্ষে সরানো হয়। এটি ঘটে কোড চালানোর আগে। এর মানে আপনি ভেরিয়েবল বা ফাংশন ব্যবহার করতে পারেন তাদের ডিক্লেয়ার করার আগেই।

//ভেরিয়েবল Hoisting:
console.log(myVar); //output: undefined
var myVar = 5;
console.log(myVar); //output: 5
//এখানে myVar ভেরিয়েবলটি ডিক্লেয়ারের আগে ব্যবহার করা হয়েছে। কিন্তু যেহেতু এটি hoist হয়েছে, undefined রিটার্ন করেছে।

// জাভাস্ক্রিপ্ট এভাবে কোডটি ব্যাখ্যা করে:
var myVar;
console.log(myVar); //output: undefined
myVar = 5;
console.log(myVar); //output: 5


//ফাংশন Hoisting:
myFunction(); //output: Hello, World!
function myFunction() {
    console.log("Hello, World!");
}
//এখানে myFunction ফাংশনটি ডিক্লেয়ারের আগে কল করা হয়েছে, কিন্তু এটি ঠিকভাবে কাজ করেছে কারণ ফাংশনগুলি পুরোপুরি hoist হয়।

// জাভাস্ক্রিপ্ট এভাবে কোডটি ব্যাখ্যা করে:
function myFunction() {
    console.log("Hello, World!");
}
myFunction(); //output: Hello, World!



//***//Scope : Scope হল জাভাস্ক্রিপ্টের একটি মেকানিজম যা নির্ধারণ করে কোন ভেরিয়েবলগুলি কোথা থেকে অ্যাক্সেস করা যাবে। জাভাস্ক্রিপ্টে দুটি প্রধান স্কোপ আছে:

//Global Scope: যখন কোন ভেরিয়েবল বা ফাংশন স্কোপের বাইরে ডিক্লেয়ার করা হয়, তা গ্লোবাল স্কোপের অংশ হয়। এটি পুরো প্রোগ্রাম জুড়ে অ্যাক্সেস করা যায়।
let globalVariable = "I am a global variable";

function globalScopeExample() {
    console.log(globalVariable); //output: I am a global variable
}

globalScopeExample();

//Local Scope: যখন কোন ভেরিয়েবল বা ফাংশন কোন ফাংশনের ভিতর বা ব্লকের ভিতর ডিক্লেয়ার করা হয়, তা লোকাল স্কোপের অংশ হয়। এটি শুধুমাত্র সেই ফাংশন বা ব্লকের ভিতর অ্যাক্সেস করা যায়।
function localScopeExample() {
    let localVariable = "I am a local variable";
    console.log(localVariable); //output: I am a local variable
}

localScopeExample();
console.log(localVariable); //error: localVariable is not defined

//ব্লক স্কোপ (Block Scope): Block Scope হল {} ব্রেসেসের ভিতর যে কোন ভেরিয়েবল ডিক্লেয়ার করা হয়, সেটা কেবলমাত্র সেই ব্লকের ভিতর অ্যাক্সেস করা যায়। let এবং const ব্যবহার করে ডিক্লেয়ার করা ভেরিয়েবলগুলি ব্লক স্কোপ ফলো করে।
if (true) {
    let blockVariable = "I am a block-scoped variable";
    console.log(blockVariable); //output: I am a block-scoped variable
}

console.log(blockVariable); //error: blockVariable is not defined