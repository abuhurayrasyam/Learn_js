//এই ফাইলটি events.html এর সাথে connected.

//ইভেন্ট হলো ওয়েব পেজে ব্যবহারকারীর ইন্টারঅ্যাকশন। যেমন: মাউস ক্লিক করা, কি প্রেস করা, মাউস মুভ করা। বা ব্রাউজার দ্বারা ট্রিগার হওয়া কোন অ্যাকশন। যেমন: পেজ লোড হওয়া। উদাহরণ: মাউস ক্লিক, কিবোর্ড প্রেস, পেজ লোডিং, ফ্রম সাবমিশন, ইত্যাদি।

// Java Script এ ইভেন্ট হ্যান্ডেলিং করার তিনটি প্রধান উপায় আছে: 
// Inline HTML Event (এইচটিএমএল এর মধ্যে সরাসরি ইভেন্ট বসানো) [note: এর example events.html এ আছে।]
// JavaScript Event Property (JS কোডের মধ্যে ইভেন্ট define করা) [note: এর example events.html এ আছে।]
// addEventListener() [recommended]

// document.getElementById('idName').addEventListener('eventType', handler); [note: main structure]
document.getElementById('btn-make-body-purple').addEventListener('click', function makeBodyPurple(){
    document.body.style.backgroundColor = 'purple';
}); //non-readable codes

//বাটনে ক্লিক করার মাধ্যমে বডির ব্যাকগ্রাউন্ড কালার চেঞ্জ হবে।
document.getElementById('btn-make-body-gold')
    .addEventListener('click', function makeBodyGold(){
        document.body.style.backgroundColor = 'gold';
    }); //readable codes & এখানে ফাংশনের নাম সহ ইভেন্টের কাজ সম্পন্ন করা হয়েছে।

//বাটনে ক্লিক করার মাধ্যমে পেজের টাইটেল আপডেট হবে।
document.getElementById('btn-update-page-title')
    .addEventListener('click', function(){
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Welcome to Events Handler';
    }); //এখানে anonymous ফাংশনের মাধ্যমে ইভেন্টের কাজ সম্পন্ন করা হয়েছে। (recommended)



//Text Updated clicking on Button : বাটনে ক্লিক করা মাত্রই, বাটনের সাথে কানেক্টেড input বক্সে থাকা টেক্সটগুলো, ইনপুট বক্সের সাথে কানেক্টেড এলিমেন্ট এ উক্ত টেক্সটগুলো আপডেট হয়ে যাবে।
document.getElementById('btn-update-text')
    .addEventListener('click', function(){ //এই লাইনটি বাটন (btn-update-text নামে) থেকে click ইভেন্ট লিসেনার যোগ করে। যখন বাটনটি ক্লিক করা হবে, তখন ভিতরে দেওয়া ফাংশনটি কার্যকর হবে।
        const textInput = document.getElementById('input-text-write-here'); //এই লাইনটি ইনপুট ফিল্ড (যার আইডি input-text-write-here) থেকে text সংগ্রহ করে এবং এটিকে textInput নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।

        const updateText = textInput.value; //এই লাইনটি ইনপুট ফিল্ডের মান (যা ব্যবহারকারী লিখেছে) সংগ্রহ করে এবং এটিকে updateText নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।

        const showText = document.getElementById('text-will-showing-here'); //এই লাইনটি টেক্সট প্রদর্শনের element (যার আইডি text-will-showing-here) থেকে text সংগ্রহ করে এবং এটিকে showText নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।
        showText.innerText = updateText; //এই লাইনটি প্রদর্শনের element এর ভিতরের টেক্সট (innerText) আপডেট করে এবং এটি ইনপুট ফিল্ডের মান (updateText) দিয়ে পূরণ করে।
    })



//Comment by Clicking on Button: বাটনে ক্লিক করা মাত্রই, input ফিল্ডের টেক্সটগুলো সংগ্রহ করে, নতুন একটি p এলিমেন্ট তৈরি করে, উক্ত এলিমেন্টের মধ্যে input ফিল্ডের টেক্সট গুলো যুক্ত করে, কন্টেইনারের ভিতরে p এলিমেন্ট টি push করে দিবে।
document.getElementById('btn-comment-post')
    .addEventListener('click', function(){ //এই লাইনটি বাটনটির (যার আইডি 'btn-comment-post') সাথে একটি click ইভেন্ট লিসেনার যোগ করে। যখন বাটনটি ক্লিক করা হবে, তখন ভিতরের ফাংশনটি কার্যকর হবে।
        const commentInput = document.getElementById('input-comment'); //এই লাইনটি ইনপুট ফিল্ডের (যার আইডি 'input-comment') text সংগ্রহ করে এবং এটিকে commentInput নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।

        const newComment = commentInput.value; //এই লাইনটি ইনপুট ফিল্ডের মান (যা ব্যবহারকারী লিখেছে) সংগ্রহ করে এবং এটিকে newComment নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।

        const commentElement = document.createElement('p'); //এই এই লাইনটি একটি নতুন প্যারাগ্রাফ উপাদান তৈরি করে। 
        commentElement.innerText = newComment; //এই লাইনটি নতুন প্যারাগ্রাফ এর ভিতরের টেক্সট (innerText) ইনপুট ফিল্ডের মান (newComment) দিয়ে পূরণ করে।

        const commentContainer = document.getElementById('comment-container');
        commentContainer.appendChild(commentElement); //এই লাইন দুটি মন্তব্য কন্টেইনারের (যার আইডি 'comment-container') রেফারেন্স সংগ্রহ করে এবং নতুন প্যারাগ্রাফ উপাদানটি (commentElement) কন্টেইনারে যোগ করে।
    })



//Button Desabled and Enable : input ফিল্ডে ডিলিট টাইপ করার মাধ্যমে বাটনটি এনেবল হবে এছাড়া বাটনটি ডিজেবল থাকবে।
document.getElementById('input-delete')
    .addEventListener('keyup', function(event){ //এই লাইনটি ইনপুট ফিল্ডের (যার আইডি 'input-delete') সাথে keyup ইভেন্ট লিসেনার যোগ করে। যখন ইনপুট ফিল্ডে কোনো কী চাপানো হবে এবং রিলিজ করা হবে, তখন ভিতরের ফাংশনটি কার্যকর হবে।
        const inputText = event.target.value; //এই লাইনটি ইভেন্ট থেকে ইনপুট ফিল্ডের মান (ইউজার যা লিখেছে) সংগ্রহ করে এবং এটিকে inputText নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।
        const btnDelete = document.getElementById('btn-delete'); //এই লাইনটি বাটনের (যার আইডি 'btn-delete') রেফারেন্স সংগ্রহ করে এবং এটিকে btnDelete নামে একটি কনস্ট্যান্টে সংরক্ষণ করে।
        if (inputText === 'delete'){
            btnDelete.removeAttribute('disabled');
        }
        else{
            btnDelete.setAttribute('disabled', true);
        } //এই লাইনগুলি ইনপুট ফিল্ডের মান (inputText) চেক করে। যদি মানটি 'delete' হয়, তবে বাটন থেকে disabled অ্যাট্রিবিউটটি সরিয়ে ফেলা হয়, অর্থাৎ বাটনটি সক্রিয় হয়। যদি মানটি 'delete' না হয়, তবে বাটনে disabled অ্যাট্রিবিউট যোগ করা হয়, অর্থাৎ বাটনটি নিষ্ক্রিয় থাকে।
    })