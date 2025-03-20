//***//API (Application Programming Interface) কী?
//API হলো একটি মাধ্যম যার মাধ্যমে দুটি ভিন্ন সফটওয়্যার সিস্টেম একে অপরের সাথে যোগাযোগ করে। এটি একধরনের "সংযোগ সেতু" যা ডেভেলপারদের নির্দিষ্ট ডেটা বা ফিচার অ্যাক্সেস করতে সাহায্য করে। উদাহরণ: আপনি যদি একটি ওয়েবসাইট থেকে আবহাওয়ার তথ্য দেখতে চান, তাহলে ওই সাইটের API আপনার জন্য সেই তথ্য সরবরাহ করে। যেমন: Weather API, Google Maps API। অর্থাৎ API হল ক্লায়েন্ট হতে সার্ভারে যোগাযোগের মাধ্যম।

//***//Fetch API কী?
//Fetch API জাভাস্ক্রিপ্টে একটি ইন-বিল্ট মেথড যা সার্ভারে HTTP অনুরোধ (GET, POST, PUT, DELETE) পাঠাতে ব্যবহৃত হয়। এটি প্রমিস (Promise) ব্যবহার করে কাজ করে এবং অ্যাসিঙ্ক্রোনাস ডেটা হ্যান্ডলিং করে।

fetch('https://jsonplaceholder.typicode.com/todos/1') //এটি একটি HTTP GET অনুরোধ পাঠায় https://jsonplaceholder.typicode.com/todos/1 এ।
    .then(response=>response.json()) // Response-কে JSON ফরম্যাটে রূপান্তর করা (প্রথম এ .then() মেথডটি প্রমিস চেইনিং তৈরি করে। এখানে response হল ফেচ অনুরোধের রেসপন্স অবজেক্ট। response.json() মেথডটি রেসপন্স ডেটাকে JSON ফরম্যাটে রূপান্তরিত করে এবং এটি আবার একটি প্রমিস প্রদান করে।)
    .then(data=>{
        console.log(data) // রূপান্তরিত ডেটা কনসোলে দেখানো //output: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    });