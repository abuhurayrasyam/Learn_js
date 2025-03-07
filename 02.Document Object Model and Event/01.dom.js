//এই ফাইলটি dom.html এর সাথে connected.

//DOM কাকে বলে?
//DOM হচ্ছে Document Object Model. DOM এ, html এর প্রতিটি element এক একটি object হিসেবে বিবেচিত হয় এবং এই অবজেক্ট গুলোকে node বলা হয়।

//DOM এর মাধ্যমে কি কাজ করা হয়?
//DOM ব্যবহার করা হয় html এর মধ্যে ইন্টারেকশন করার জন্য। অর্থাৎ DOM ব্যবহারের মাধ্যমে DOM traversing, element select এবং তাদের প্রপার্টিগুলোকে পরিবর্তন করা হয়।

//DOM traversing কি?
//DOM traversing হল একটি প্রক্রিয়া যার মাধ্যমে জাভাস্ক্রিপ্ট ব্যবহার করে HTML ডকুমেন্টের বিভিন্ন এলিমেন্টের মধ্যে নেভিগেট করা হয়। DOM traversing এর মাধ্যমে বিভিন্ন এলিমেন্টের প্যারেন্ট, চাইল্ড, সিবলিং ইত্যাদি খুঁজে বের করা হয় এবং সেই এলিমেন্টগুলির সাথে কাজ করা হয়। DOM traversing এর জন্য element.parentNode, element.childNodes, element.firstChild, element.lastChild, element.nextSibling, element.previousSibling, document.getElementsByTagName('myTag'), document.getElementById('myId'), document.getElementsByClassName('myClass'), document.querySelector('.className'), document.querySelectorAll('.className') ব্যবহৃত হয়ে থাকে।

//HTML এলিমেন্টের বিভিন্ন প্রোপার্টি এবং কনটেন্ট পরিবর্তন হয় কিভাবে?
//HTML এলিমেন্টের বিভিন্ন প্রোপার্টি এবং কনটেন্ট পরিবর্তন করতে element.innerText, element.innerHTML, element.getAttribute('attributeName'), element.setAttribute('attributeName', 'attributeValue') ব্যবহৃত হয়ে থাকে।



//element.document.getElementById('IdName') এর ব্যবহার:-
const searchByID = document.getElementById('title'); //নির্দিষ্ট একটি এলিমেন্ট খুঁজে পেতে id এর সাহায্যে এলিমেন্ট কে খুঁজে আউটপুট প্রদান করা।
console.log(searchByID);
//output: h1#title 
//[Note: DOM এর আউটপুট দেখতে হয় ব্রাউজারের console এ।]


//element.document.getElementsByTagName('TagName') এর ব্যবহার:-
const searchByTagName = document.getElementsByTagName('li'); //html tagname এর সাহায্যে এলিমেন্ট কে খুঁজে আউটপুট প্রদান করা। এটি আউটপুট হিসেবে array like object বা html collection প্রদান করে, যার ফলে এর উপর for of loop চালানো যায়, একাধিক ট্যাগ থেকে এক একটি করে করে ট্যাগ বের করে আনার জন্য।।
console.log(searchByTagName);
//output: HTMLCollection(6) [li.holy-book, li.holy-book, li.city, li.city, li.city, li.city]


//element.document.getElementsByClassName('ClassName') এর ব্যবহার:-
const searchByClassName = document.getElementsByClassName('holy-book'); //classname এর সাহায্যে এলিমেন্ট কে খুঁজে আউটপুট প্রদান করা। এর মাধ্যমে এক বা একাধিক  ক্লাস name এর উপরে কাজ করা যায়। এটি আউটপুট হিসেবে array like object বা html collection প্রদান করে, যার ফলে এর উপর for of loop চালানো যায়।
console.log(searchByClassName);
//output: HTMLCollection(2) [li.holy-book, li.holy-book]


//element.document.querySelector('cssSelectorName') এর ব্যবহার:-
const searchByQuerySelector = document.querySelector('.city'); //querySelector হল জাভাস্ক্রিপ্ট মেথড যা সিএসএস সিলেক্টর ব্যবহার করে ডম (DOM) থেকে এলিমেন্ট খুঁজে পেতে ব্যবহৃত হয়। querySelector ব্যবহারের জন্য css idname, css classname ব্যবহৃত হয়, idname এর ক্ষেত্রে শুরুতে # ও classname এর ক্ষেত্রে শুরুতে . বসাতে হয়। এর মাধ্যমে সিএসএস সিলেক্টর ম্যাচ করে এমন এলিমেন্ট এর মধ্যে প্রথম এলিমেন্ট আউটপুট হিসেবে প্রদান করে।
console.log(searchByQuerySelector.innerText);
//output: Dhaka


//element.document.querySelectorAll('cssSelectorName') এর ব্যবহার:-
const searchByQuerySelectorAll = document.querySelectorAll('.city'); //querySelectorAll হল জাভাস্ক্রিপ্ট মেথড যা সিএসএস সিলেক্টর ব্যবহার করে ডম (DOM) থেকে এলিমেন্ট খুঁজে পেতে ব্যবহৃত হয়। querySelector ব্যবহারের জন্য css idname, css classname ব্যবহৃত হয়, idname এর ক্ষেত্রে শুরুতে # ও classname এর ক্ষেত্রে শুরুতে . বসাতে হয়। এর মাধ্যমে সিএসএস সিলেক্টর ম্যাচ করে এমন এলিমেন্ট এর মধ্যে সবগুলো এলিমেন্ট আউটপুট হিসেবে প্রদান করে। এটি আউটপুট হিসেবে node list প্রদান করে, যার ফলে এর উপর forEach loop চালানো যায়।
console.log(searchByQuerySelectorAll);
//output: NodeList(4) [li.city, li.city, li.city, li.city]




