//***//প্রিমিটিভ ডাটা টাইপ : প্রিমিটিভ ডাটা টাইপগুলি হল মৌলিক ডাটা টাইপ যা সরাসরি একটি ডাটা টাইপ এর মান ধারণ করে। এগুলি অপরিবর্তনীয়, অর্থাৎ একবার তৈরি হলে এদের পরিবর্তন করা যায় না।

//String:
let stringDataType = "Hello, World!"
console.log("String:-", stringDataType); //output: String:- Hello, World!

//Number:
let numberDataTypeInteger = 40;
console.log("Integer Number:-", numberDataTypeInteger); //output: Integer Number:- 40

let numberDataTypeFloat = 3.14;
console.log("Float Number:-", numberDataTypeFloat); //output: Float Number:- 3.14

//Boolean:
let booleanDataTypeTrue = true;
console.log("Boolean True:-", booleanDataTypeTrue); //output: Boolean True:- true

let booleanDataTypeFalse= false;
console.log("Boolean False:-", booleanDataTypeFalse); //output: Boolean False:- false

//Null:
let nullDataType = null; //nullDataType is null
console.log("Null:-", nullDataType); //output: Null:- null

//Undefined:
let undefinedDataType; //undefinedDataType is undefined
console.log("Undefined:-", undefinedDataType); //output: Undefined:- undefined

//Symbol (ES6 থেকে চালু হয়েছে): প্রতিটি Symbol অনন্য এবং এটি একটি প্রপার্টি কী হিসাবে ব্যবহৃত হয়।
let symbolDataType = Symbol('description');
let anotherSymbolDataType = Symbol('description');
console.log("Symbol:-", symbolDataType); //output: Symbol:- Symbol(description)
console.log("Another Symbol:-", anotherSymbolDataType); //output: Another Symbol:- Symbol(description)
console.log("Symbol Equal:-", symbolDataType === anotherSymbolDataType); //output: Symbol Equal:- false, কারণ প্রতিটি Symbol অনন্য

//BigInt (ES10 থেকে চালু হয়েছে): বড় সংখ্যার সাথে কাজ করতে এটি ব্যবহৃত হয়, যা নিয়মিত Number data টাইপ দ্বারা উপস্থাপন করা যায় না।
let bigintDataType = BigInt(123456789012345678901234567890);
let anotherBigintDataType  = 123456789012345678901234567890n; //n ব্যবহার করে BigInt তৈরি করা হয়েছে
console.log("Bigint:-", bigintDataType); //output: Bigint:- 123456789012345677877719597056n
console.log("Another Bigint:-", anotherBigintDataType); //output: Another Bigint:- 123456789012345678901234567890n



//***//নন-প্রিমিটিভ ডাটা টাইপ : নন-প্রিমিটিভ ডাটা টাইপগুলি হল অবজেক্ট ভিত্তিক ডাটা টাইপ যা একাধিক মান ধারণ করতে পারে। এগুলি পরিবর্তনযোগ্য।

//Object:
let objectDataType = { name: "John", age: 30 };
console.log("Object:-", objectDataType); //output: Object:- { name: 'John', age: 30 }

//Array (একটি বিশেষ অবজেক্ট):
let arrayDataType = [1, 2, 3, 4, 5];
console.log("Array:-", arrayDataType); //output: Array:- [ 1, 2, 3, 4, 5 ]

//Function (একটি বিশেষ অবজেক্ট):
function functionDataType() {
    console.log("Function:-", "Hello!");
}
functionDataType(); //output: Function:- Hello!

//Date: বর্তমান তারিখ এবং সময় পেতে, নির্দিষ্ট তারিখ সেট করতে, এবং তারিখের উপাদানগুলি পেতে ব্যবহৃত হয়।
let dateDataType = new Date();
console.log("Date:-", dateDataType); //output: Date:- Current Time (Example: 2025-03-12T18:46:48.478Z)

//RegExp: নিয়মিত অভিব্যক্তি তৈরি করতে এবং স্ট্রিং-এ নিদর্শন অনুসন্ধান এবং পরিবর্তন করতে ব্যবহৃত হয়।
let regex = /hello/i; //i ফ্ল্যাগটি কেস-ইনসেনসিটিভ করে
//স্ট্রিং এর সাথে ম্যাচ করা
let str = 'Hello, world!';
console.log(regex.test(str)); //output: true
// স্ট্রিং থেকে নিদর্শন অনুসন্ধান
let match = str.match(regex);
console.log(match[0]); //output: Hello
// স্ট্রিং এর ভিতর নিদর্শন পরিবর্তন করা
let newStr = str.replace(regex, 'Hi');
console.log(newStr); //output: Hi, world!



//another example using primitive data type:
let primitivePerson = "Abu Hurayra";
let newPrimitivePerson = primitivePerson;
primitivePerson = "Syam";
console.log("Primitive:-", newPrimitivePerson);
//output: Primitive:- Abu Hurayra

//another example using non-primitive data type:
let nonPrimitivePerson = {name: "Abu Hurayra"};
let newNonPrimitivePerson = nonPrimitivePerson;
nonPrimitivePerson.name = "Syam"
console.log("Non-Primitive:-", newNonPrimitivePerson);
//output: Non-Primitive:- { name: 'Syam' }