//***//some build in method used in array : .map(), .forEach(), .filter(), .find()

//main array 01
const friends = [ "Mahadi", "Joynal", "Alamin" ];

//.map() method used in array : .map() হল জাভাস্ক্রিপ্টের একটি অ্যারে মেথড, যা কোন একটি array তে loop চালিয়ে, কোন একটি কাজ সম্পূর্ণ করে, আবার কোন একটি array তে তার ভ্যালু কে রিটার্ন করে।
const newFriends01 = friends.map(element => {
    return element;
})//array তে .map() method এর ব্যবহার।
console.log("With map()", newFriends01); //output from main array 01 : With map() [ 'Mahadi', 'Joynal', 'Alamin' ]

const newFriends02 = [];
for (let i = 0; i < friends.length; i++){
    newFriends02.push(friends[i]);
} //array তে সাধারণ loop এর ব্যবহার।
console.log("Without map()", newFriends02) //output from main array 01 : Without map() [ 'Mahadi', 'Joynal', 'Alamin' ]



//main array 02
const phones = [
    { brand: 'Nokia', name: 'Nokia 3310', color: 'Blue', price: 50 },
    { brand: 'Samsung', name: 'Galaxy S21', color: 'Black', price: 799 },
    { brand: 'Apple', name: 'iPhone 13', color: 'White', price: 999 },
    { brand: 'Nokia', name: 'Nokia 1100', color: 'Gray', price: 30 },
  ];


//forEach মেথডটি অ্যারের প্রতিটি এলিমেন্টের উপর একটি ফাংশন / loop চালায়। এটি কোন নতুন অ্যারে রিটার্ন করে না, শুধুমাত্র প্রতিটি এলিমেন্টের উপর কাজ সম্পন্ন করে। নিম্নে, forEach() ব্যবহার করে প্রতিটি মোবাইল ফোনের ব্র্যান্ড প্রিন্ট করা হয়েছে।
phones.forEach(phone => {
console.log(phone.brand);
});
//output from main array 02: Nokia, Samsung, Apple, Nokia


//filter মেথডটি একটি নতুন অ্যারে রিটার্ন করে যা শুধুমাত্র সেই এলিমেন্টগুলি ধারণ করে যা নির্দিষ্ট শর্ত পূরণ করে। যদি কোন এলিমেন্ট শর্ত পূরণ না করে তবে এটি emty [] রিটার্ন করে। নিম্নে filter() ব্যবহার করে দাম $১০০ এর কম যেই মোবাইল ফোনগুলি আছে তা ফিল্টার করা হয়েছে।
const affordablePhones = phones.filter(phone => phone.price < 100);
console.log(affordablePhones);
//output from main array 02: [{ brand: 'Nokia', name: 'Nokia 3310', color: 'Blue', price: 50 }, { brand: 'Nokia', name: 'Nokia 1100', color: 'Gray', price: 30 }]


//find মেথডটি অ্যারের প্রথম এলিমেন্ট রিটার্ন করে যা নির্দিষ্ট শর্ত পূরণ করে। যদি কোন এলিমেন্ট শর্ত পূরণ না করে তবে এটি undefined রিটার্ন করে। নিম্নে, find() ব্যবহার করে প্রথম Samsung ব্র্যান্ডের মোবাইল ফোন খুঁজে বের করা হয়েছে।
const samsungPhone = phones.find(phone => phone.brand === 'Samsung');
console.log(samsungPhone);
//output from main array 02: { brand: 'Samsung', name: 'Galaxy S21', color: 'Black', price: 799 }



//পার্থক্য:-
//map: মূল অ্যারের প্রতিটি এলিমেন্টের পরিবর্তিত মান নিয়ে একটি নতুন অ্যারে রিটার্ন করে।
//forEach: কোন নতুন অ্যারে রিটার্ন করে না, শুধুমাত্র প্রতিটি এলিমেন্টের উপর কাজ সম্পন্ন করে।
//filter: নির্দিষ্ট শর্ত পূরণ করা এলিমেন্টগুলি নিয়ে একটি নতুন অ্যারে রিটার্ন করে।
//find: নির্দিষ্ট শর্ত পূরণ করা প্রথম এলিমেন্টটি রিটার্ন করে।