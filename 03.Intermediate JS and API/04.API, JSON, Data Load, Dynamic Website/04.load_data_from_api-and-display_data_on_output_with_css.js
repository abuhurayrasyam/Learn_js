//***//load data from api and display data on output with css : এটি একটি API থেকে ইউজারদের ডেটা ফেচ করে এবং তা HTML লিস্টে দেখায় with css।
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/posts') //এটি একটি HTTP GET অনুরোধ পাঠায় https://jsonplaceholder.typicode.com/posts এ।
        .then(response=>response.json()) //Response-কে JSON ফরম্যাটে রূপান্তর করা (প্রথম এ .then() মেথডটি প্রমিস চেইনিং তৈরি করে। এখানে response হল ফেচ অনুরোধের রেসপন্স অবজেক্ট। response.json() মেথডটি রেসপন্স ডেটাকে JSON ফরম্যাটে রূপান্তরিত করে এবং এটি আবার একটি প্রমিস প্রদান করে।)
        .then(data=>displayComments(data)) //প্রসেস করা JSON ডেটা displayUsers ফাংশনে পাঠানো হয় যাতে এটি HTML-এ দেখানো যায়।
    } //loadComments ফাংশন: API থেকে ডেটা আনে। JSON ডেটা প্রসেস করে displayComments ফাংশনে পাঠায়।

const displayComments = (comments) => {
    const allComments = document.getElementById('comments'); //এই আইডির বাটনে ক্লিক করলে API থেকে সংগ্রহ কৃত ডাটা ওয়েব পেজে দেখা যাবে।
    for (const comment of comments){
        const createElement = document.createElement('div');
        createElement.classList.add('bg-black', 'rounded', 'shadow', 'text-white', 'p-3', 'm-3')
        createElement.innerHTML = `
            <h1 class="font-bold">User ID: ${comment.id}</h1>
            <h4 class="font-semibold">Title: ${comment.title}</h4>
            <p>Description: ${comment.body}</p>

        `;
        allComments.appendChild(createElement);
    }
} //displayComments ফাংশন: API থেকে প্রাপ্ত ইউজারদের ডেটা ব্যবহার করে HTML লিস্ট তৈরি করে with css এবং DOM-এ যুক্ত করে।
//output on index.html