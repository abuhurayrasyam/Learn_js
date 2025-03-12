//***//null : null একটি মান যা নির্দেশ করে যে একটি ভেরিয়েবল এ ইচ্ছাকৃতভাবে কোন মান নেই।
//null এর উদাহরণ:
javascript
let nullNumber = null; //এখানে আমরা ইচ্ছাকৃতভাবে nullNumber ভেরিয়েবলটিকে null মান দিয়েছি, যার মানে ভেরিয়েবলটি কোন মান ধরে না।
console.log(nullNumber); //output: null


//***//undefined : undefined একটি ভেরিয়েবল যার মান দেয়া হয়নি বা আউটপুটে মান পাওয়া যায়নি।
//undefined এর উদাহরণ:
let undefinedNumber; //এখানে আমরা undefinedNumber ভেরিয়েবলটি ডিক্লেয়ার করেছি কিন্তু কোন মান দিইনি, তাই আউটপুট হবে undefined।
console.log(undefinedNumber); //output: undefined

//ফাংশনের রিটার্ন ভ্যালু undefined হলে:
javascript
function myFunction() {
    // no return statement
}
let result = myFunction();
console.log(result); // Output: undefined

//অবজেক্টের প্রপার্টি না থাকলে undefined:
let myObject = {
    name: 'John'
};
console.log(myObject.age); // Output: undefined