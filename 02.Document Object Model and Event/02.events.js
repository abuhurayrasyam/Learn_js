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