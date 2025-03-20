//***//load data from api and display data on output: এটি একটি API থেকে ইউজারদের ডেটা ফেচ করে এবং তা HTML লিস্টে দেখায়।
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users') //এটি একটি HTTP GET অনুরোধ পাঠায় https://jsonplaceholder.typicode.com/users এ।
        .then(response=>response.json()) //Response-কে JSON ফরম্যাটে রূপান্তর করা (প্রথম এ .then() মেথডটি প্রমিস চেইনিং তৈরি করে। এখানে response হল ফেচ অনুরোধের রেসপন্স অবজেক্ট। response.json() মেথডটি রেসপন্স ডেটাকে JSON ফরম্যাটে রূপান্তরিত করে এবং এটি আবার একটি প্রমিস প্রদান করে।)
        .then(data=>displayUsers(data)) //প্রসেস করা JSON ডেটা displayUsers ফাংশনে পাঠানো হয় যাতে এটি HTML-এ দেখানো যায়।
    } //loadUsers ফাংশন: API থেকে ডেটা আনে। JSON ডেটা প্রসেস করে displayUsers ফাংশনে পাঠায়।

const displayUsers = (users) => {
    const usersInformation = document.getElementById('users'); //এই আইডির বাটনে ক্লিক করলে API থেকে সংগ্রহ কৃত ডাটা ওয়েব পেজে দেখা যাবে।
    for (const user of users){
        const createElement = document.createElement('li');
        createElement.innerText = user.name;
        usersInformation.appendChild(createElement);
    }
} //displayUsers ফাংশন: API থেকে প্রাপ্ত ইউজারদের ডেটা ব্যবহার করে HTML লিস্ট তৈরি করে এবং DOM-এ যুক্ত করে।
//output on index.html