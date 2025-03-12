//event bubble : event bubble হল একটি প্রক্রিয়া যেখানে শিশু উপাদানে ট্রিগার করা ইভেন্টগুলি পিতামাতার উপাদানগুলিতে উঠে যায়, তাদের ইভেন্ট হ্যান্ডলারগুলিও ট্রিগার করে। উদাহরণস্বরূপ, একটি li উপাদানে ক্লিক করা ol, section, এবং body উপাদানগুলির জন্য ইভেন্ট হ্যান্ডলারগুলিকে বুদ্বুদের কারণে ট্রিগার করতে পারে।

//li (cat) click handler with event handler
document.getElementById('cat')
    .addEventListener('click', function(event){ 
        console.log("li (Cat) Clicked")
    })
//output: li (Cat) Clicked
// ol Clicked
// section Clicked

//ol click handler with event handler
document.getElementById('animals-list')
    .addEventListener('click', function(event){ 
        console.log("ol Clicked")
    })
//output: ol Clicked 
// section Clicked



//stop propagation : event.stopImmediatePropagation() ইভেন্টের আরও প্রচার বন্ধ করতে ব্যবহৃত হয়। এটি একই উপাদান বা পূর্বপুরুষদের উপর একই ইভেন্টের জন্য অন্যান্য হ্যান্ডলারগুলিকে ট্রিগার করা থেকে আটকায়।

//section click handler with stop propagation
document.getElementById('animals-container')
    .addEventListener('click', function(event){ 
        console.log("section Clicked")
        event.stopImmediatePropagation();
    })
//output: section Clicked

//body click handler with stop propagation
document.getElementById('body')
    .addEventListener('click', function(event){ 
        console.log("body Clicked")
        event.stopImmediatePropagation();
    })
//output: body Clicked



//event delegation : event delegation হল একটি একক ইভেন্ট লিসনার ব্যবহার করে একাধিক শিশু উপাদানের ইভেন্টগুলি পরিচালনা করার পদ্ধতি। এটি সাধারণভাবে পিতামাতার উপাদানে ইভেন্ট লিসনার সংযুক্ত করে এবং শিশু উপাদানগুলি থেকে বুদবুদ হিসাবে ইভেন্টগুলি পরিচালনা করে।

document.getElementById('animals-list')
    .addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    }) //এটি অর্ডারড লিস্ট (ID: animals-list) উপাদানে একটি ক্লিক ইভেন্ট লিসনার সংযুক্ত করে। যখন ক্লিক করা হয়, এটি ক্লিক করা উপাদানটিকে DOM থেকে মুছে দেয়।

document.getElementById('btn-add-more')
    .addEventListener('click', function(){
        const createElement = document.createElement('li');
        createElement.classList.add('animal');
        createElement.innerText = 'Horse';

        const ol = document.getElementById('animals-list');
        ol.appendChild(createElement);
    }) //এটি ID: btn-add-more এর মাধ্যমে button এ একটি ক্লিক ইভেন্ট লিসনার সংযুক্ত করে। যখন ক্লিক করা হয়, এটি animal ক্লাস এবং Horse text সহ একটি নতুন তালিকা আইটেম উপাদান তৈরি করে, তারপর এটি অর্ডারড লিস্টে যোগ করে।