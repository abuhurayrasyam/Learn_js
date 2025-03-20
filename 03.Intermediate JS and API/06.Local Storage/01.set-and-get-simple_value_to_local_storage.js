//***//LocalStorage কী?
//LocalStorage হলো জাভাস্ক্রিপ্টের একটি ব্রাউজার-ভিত্তিক স্টোরেজ API, যা ডেটা সংরক্ষণ করতে ব্যবহার করা হয়। এটি একটি key-value pair ফরম্যাটে ডেটা সংরক্ষণ করে এবং ডেটা ব্রাউজারের বন্ধ করার পরেও থেকে যায় (Persistent Storage)। LocalStorage এ সাধারণত 5MB ডেটা সংরক্ষণ করা যায় (ব্রাউজারের ওপর নির্ভর করে)। এটি শুধুমাত্র string ফরম্যাটে ডেটা সংরক্ষণ করে। যদি কোনো অবজেক্ট বা অন্য ডেটা টাইপ সংরক্ষণ করতে চান, তাহলে সেটি JSON.stringify() করতে হবে।

const age = 20;
localStorage.setItem("My Age", age); //localStorage.setItem() এটি LocalStorage-এ ডেটা সংরক্ষণ করতে ব্যবহৃত হয়।
console.log(localStorage.getItem("My Age")); //localStorage.getItem() এটি LocalStorage থেকে ডেটা পড়তে ব্যবহৃত হয়।

//আউটপুট দেখতে ব্রাউজারের Inspect গিয়ে, অ্যাপ্লিকেশনে ক্লিক করতে হবে, অতঃপর Storage সেকশন থেকে লোকাল স্টোরেজে ক্লিক করে, অতঃপর লোকাল স্টোরেজ থেকে Current URL এ ক্লিক করে, Key এবং ভ্যালু আউটপুট হিসেবে দেখা যাবে।