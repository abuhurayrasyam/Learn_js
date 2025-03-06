//***//spread operator : ... কেই spread operator বলে। কোন array এর শুধুমাত্র এলিমেন্ট কে নেওয়ার জন্য এটি ব্যবহৃত হয়।
//example 01:
const countries = ["BD", "PAK"];
console.log(countries); //normal output: ['BD', 'PAK'] 
console.log(...countries) //output by using spread operator: BD PAK

//example 02: একটি array এর মধ্য থেকে সবচেয়ে বড় এলিমেন্ট বের করার জন্য ES6 এর একটি build in মেথড রয়েছে, Math.max(arrayName).
const numbers = [10, 20, 5, 40];
console.log(Math.max(numbers)); //output: NaN 
//উপরোক্ত আউটপুটে যখন Math.max(numbers) ব্যবহার করা হয়েছে, তখন এটি অ্যারেকে একটি সংখ্যা হিসাবে গণ্য করার চেষ্টা করেছে, যা সঠিক নয় এবং তাই এটি NaN (Not-a-Number) রিটার্ন করেছে। কারণ numbers একটি অ্যারে, এবং Math.max() ফাংশনটি ব্যবহার করে একটি একক সংখ্যা খোঁজা হচ্ছে।
console.log(Math.max(...numbers)); //output: 40
//উপরোক্ত আউটপুটে spread operator ব্যবহার করার কারণে প্রথমে অপারেটরটি array থেকে সমস্ত উপাদান বের করে আনছে, অতঃপর Math.max() এর মাধ্যমে প্রত্যেকটি উপাদানের মধ্যে তুলনা করে সর্বোচ্চ উপাদানটি আউটপুট হিসাবে প্রদান করা হচ্ছে।