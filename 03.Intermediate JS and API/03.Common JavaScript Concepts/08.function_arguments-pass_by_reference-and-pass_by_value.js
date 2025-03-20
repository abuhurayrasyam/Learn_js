//***//পাস বাই ভ্যালু (Pass by Value): যখন কোনো ফাংশনে একটি প্রিমিটিভ ডেটা টাইপ (যেমন, number, string, boolean) আর্গুমেন্ট হিসেবে পাস করা হয়, তখন আসল ডেটার একটি কপি ফাংশনের ভেতরে যায়। ফলে ফাংশনে ডেটা পরিবর্তিত হলেও মূল ডেটা পরিবর্তিত হয় না। এটি জাভাস্ক্রিপ্টে "Pass by Value" বলে পরিচিত।
let x = 10;
let y = 20;

function showNum(num01, num02) {
    num01 = 30; // Changing num01 inside the function
    num02 = 40; // Changing num02 inside the function
    console.log(num01, num02); // This logs the updated values: 30 40
}

showNum(x, y); // Output: 30 40
console.log(x, y); // Output: 10 20



//***//পাস বাই রেফারেন্স (Pass by Reference): যখন কোনো ফাংশনে একটি অবজেক্ট বা অ্যারে আর্গুমেন্ট হিসেবে পাস করা হয়, তখন মূল ডেটার রেফারেন্স (ঠিকানা) ফাংশনের ভেতরে যায়। ফলে ফাংশনে ডেটা পরিবর্তিত হলে মূল ডেটা পরিবর্তিত হয়। এটি জাভাস্ক্রিপ্টে "Pass by Reference" বলে পরিচিত।
const person05 = {
    'name': 'Abu Hurayra',
    'age': 21
}

function showPerson(obj) {
    obj.name = 'Syam';
}

console.log(person05); //output: { name: 'Abu Hurayra', age: 21 }
showPerson(person05);
console.log(person05); //output: { name: 'Syam', age: 21 }