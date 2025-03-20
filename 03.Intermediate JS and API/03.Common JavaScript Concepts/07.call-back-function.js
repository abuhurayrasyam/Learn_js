//***//কলব্যাক ফাংশন : জাভাস্ক্রিপ্টে একটি কলব্যাক ফাংশন হলো এমন একটি ফাংশন যা আর্গুমেন্ট হিসেবে একটি ফাংশনকে অন্য একটি ফাংশনে পাস করা হয়।
function matchmaker(bride, name){
    bride(name); // কলব্যাক ফাংশন হিসেবে "bride" কল করা হচ্ছে
}

const bride01 = function(name){
    console.log("Bride01:- I got my husband", name)
}
const bride02 = function(name){
    console.log("Bride02:- I got my husband", name)
}
const bride03 = function(name){
    console.log("Bride03:- I got my husband", name)
}

// ফাংশন কল
matchmaker(bride01, 'Abu'); //output: Bride01:- I got my husband Abu
matchmaker(bride02, 'Hurayra'); //output: Bride02:- I got my husband Hurayra
matchmaker(bride03, 'Syam'); //output: Bride03:- I got my husband Syam