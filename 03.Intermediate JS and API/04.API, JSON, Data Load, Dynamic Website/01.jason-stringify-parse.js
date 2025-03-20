//***//JSON (JavaScript Object Notation) কী?
//JSON হলো একটি ডেটা ফরম্যাট, যা ডেটা আদান-প্রদানের জন্য ব্যবহৃত হয়। এটি জাভাস্ক্রিপ্ট অবজেক্টের মতো দেখায়, তবে এটি সাধারণত টেক্সট হিসেবে সংরক্ষিত ও পাঠানো হয়। এটি API-এর মাধ্যমে ডেটা পাঠানোর জন্য সবচেয়ে জনপ্রিয় ফরম্যাট।

const person = {
    name: 'Abu Hurayra',
    age: 21,
    friends: ["Mahadi", "Joynal"],
    isMarried: false
}
console.log(person); //person অবজেক্ট: এটি মূল ডেটা।
// {name: 'Abu Hurayra', age: 21, friends: Array(2), isMarried: false}

const newPerson = JSON.stringify(person); //JSON.stringify(): অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তরিত করেছে।
console.log(newPerson);
// {"name":"Abu Hurayra","age":21,"friends":["Mahadi","Joynal"],"isMarried":false}

const anotherNewPerson = JSON.parse(newPerson); //JSON.parse(): JSON স্ট্রিংকে আবার জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তরিত করেছে।
console.log(anotherNewPerson);
// {name: 'Abu Hurayra', age: 21, friends: Array(2), isMarried: false}