//***//some build in methods for objects:
const divisions = {
    name: "Dhaka",
    code: "DH"
}
console.log(Object.keys(divisions)); //output: ['name', 'code']
//build in মেথড Object.keys(objectName) ব্যবহার করে অবজেক্টের keys বের করা হয়।
console.log(Object.values(divisions)); //output: ['Dhaka', 'DH']
//build in মেথড Object.values(objectName) ব্যবহার করে অবজেক্টের valuess বের করা হয়।
console.log(Object.entries(divisions)); //output: [ ['name', 'Dhaka'], ['code', 'DH'] ]
//build in মেথড Object.entries(objectName) ব্যবহার করে অবজেক্টের প্রপার্টি এবং ভ্যালু নিয়ে আলাদা array তৈরি করা হয়।

divisions.districts = 13; //অবজেক্টে নতুন প্রপার্টি যোগ করার জন্য ব্যবহৃত হয়।
console.log(divisions); //output: { name: 'Dhaka', code: 'DH', districts: 13 }

Object.seal(divisions); //অবজেক্টে নতুন প্রপার্টি যোগ করতে না দেওয়ার জন্য ব্যবহৃত হয়।
divisions.cityCorporations = 2; //অবজেক্টে নতুন প্রপার্টি যোগ করার জন্য ব্যবহৃত হয়।
console.log(divisions); //output: { name: 'Dhaka', code: 'DH', districts: 13 }

divisions.name = "Chittagong"; //অবজেক্টে নতুন ভ্যালু যোগ করার জন্য ব্যবহৃত হয়।
console.log(divisions); //output: { name: 'Chittagong', code: 'DH', districts: 13 }
Object.freeze(divisions); //অবজেক্টে নতুন প্রপার্টি ও ভ্যালু যোগ করতে না দেওয়ার জন্য ব্যবহৃত হয়।
divisions.name = "Mymenshing"; //অবজেক্টে নতুন ভ্যালু যোগ করার জন্য ব্যবহৃত হয়।
console.log(divisions); ////output: { name: 'Chittagong', code: 'DH', districts: 13 }