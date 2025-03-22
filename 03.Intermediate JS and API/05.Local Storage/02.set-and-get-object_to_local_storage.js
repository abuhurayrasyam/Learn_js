const addToLocalStorage = () => {
    const person = {
        'name': 'Abu Hurayra',
        'city': 'Tangail'
    } //এখানে একটি অবজেক্ট person তৈরি করা হয়েছে, যাতে দুটি প্রপার্টি রয়েছে: name ("Abu Hurayra") এবং city ("Tangail")।

    const personConvertedToString = JSON.stringify(person); //এই অবজেক্টকে স্ট্রিং এ রূপান্তর করা হয়েছে JSON.stringify(person) ব্যবহার করে। এটি প্রয়োজন, কারণ Local Storage কেবল স্ট্রিং ডেটা সংরক্ষণ করতে পারে।
    localStorage.setItem("Person", personConvertedToString); //Local Storage-এ setItem মেথড ব্যবহার করে Person নামে একটি key এবং personConvertedToString নামে স্ট্রিং ডেটাটি সংরক্ষণ করা হয়েছে।
}

const personData = localStorage.getItem("Person"); //localStorage.getItem("Person") মেথড ব্যবহার করে Local Storage থেকে Person key-এর স্ট্রিং ডেটা আনা হয়েছে এবং এটি personData ভেরিয়েবলে সংরক্ষণ করা হয়েছে।
const personBackConvertedToObject = JSON.parse(personData); //JSON.parse(personData) ব্যবহার করে স্ট্রিং ডেটাটিকে পুনরায় অবজেক্টে রূপান্তর করা হয়েছে এবং এটি personBackConvertedToObject ভেরিয়েবলে সংরক্ষণ করা হয়েছে।
console.log(personBackConvertedToObject.name); //console.log(personBackConvertedToObject.name) ব্যবহার করে অবজেক্টের name প্রপার্টির মান, অর্থাৎ "Abu Hurayra," কনসোলে প্রদর্শিত হয়েছে।