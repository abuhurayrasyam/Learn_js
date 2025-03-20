//***//Closure : ক্লোজার ঘটে যখন একটি ফাংশন অন্য একটি ফাংশনের ভেতরে সংজ্ঞায়িত হয় এবং সেই অভ্যন্তরীণ ফাংশন বাইরের ফাংশনের ভেরিয়েবলগুলিতে অ্যাক্সেস পায়।
function sum(){
    let counter = 0; // বাইরের ভেরিয়েবল
    return function(){
        counter ++; // বাইরের ভেরিয়েবল ব্যবহার করা হচ্ছে
        console.log("Closure:-", counter);
    }
}

result = sum();
result(); //output: Closure:- 1
result(); //output: Closure:- 2
result(); //output: Closure:- 3
result(); //output: Closure:- 4

result01 = sum();
result01(); //output: Closure:- 1
result01(); //output: Closure:- 2
result01(); //output: Closure:- 3
result01(); //output: Closure:- 4
result01(); //output: Closure:- 5

result(); //output: Closure:- 5