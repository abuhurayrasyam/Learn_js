//এই ফাইলটি dom.html এর সাথে connected.

//DOM কাকে বলে?
//DOM হচ্ছে Document Object Model. DOM এ, html এর প্রতিটি element এক একটি object হিসেবে বিবেচিত হয় এবং এই অবজেক্ট গুলোকে node বলা হয়।

//DOM এর মাধ্যমে কি কাজ করা হয়?
//DOM ব্যবহার করা হয় html এর মধ্যে ইন্টারেকশন করার জন্য। অর্থাৎ DOM ব্যবহারের মাধ্যমে DOM traversing, element select এবং তাদের প্রপার্টিগুলোকে পরিবর্তন করা হয়।

//DOM traversing কি?
//DOM traversing হল একটি প্রক্রিয়া যার মাধ্যমে জাভাস্ক্রিপ্ট ব্যবহার করে HTML ডকুমেন্টের বিভিন্ন এলিমেন্টের মধ্যে নেভিগেট করা হয়। DOM traversing এর মাধ্যমে বিভিন্ন এলিমেন্টের প্যারেন্ট, চাইল্ড, সিবলিং ইত্যাদি খুঁজে বের করা হয় এবং সেই এলিমেন্টগুলির সাথে কাজ করা হয়। DOM traversing এর জন্য document.getElementsByTagName('myTag'), document.getElementById('myId'), document.getElementsByClassName('myClass'), document.querySelector('.className'), document.querySelectorAll('.className'), document.createElement("elementName") and element.appendChild(), element.parentNode, element.childNodes, element.firstChild, element.lastChild, element.nextSibling, element.previousSibling ব্যবহৃত হয়ে থাকে।

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
const searchByQuerySelectorAll = document.querySelectorAll('.city'); //querySelectorAll হল জাভাস্ক্রিপ্ট মেথড যা সিএসএস সিলেক্টর ব্যবহার করে ডম (DOM) থেকে এলিমেন্ট খুঁজে পেতে ব্যবহৃত হয়। querySelectorAll ব্যবহারের জন্য css idname, css classname ব্যবহৃত হয়, idname এর ক্ষেত্রে শুরুতে # ও classname এর ক্ষেত্রে শুরুতে . বসাতে হয়। এর মাধ্যমে সিএসএস সিলেক্টর ম্যাচ করে এমন এলিমেন্ট এর মধ্যে সবগুলো এলিমেন্ট আউটপুট হিসেবে প্রদান করে। এটি আউটপুট হিসেবে node list প্রদান করে, যার ফলে এর উপর forEach loop চালানো যায়।
console.log(searchByQuerySelectorAll);
//output: NodeList(4) [li.city, li.city, li.city, li.city]



//document.createElement("elementName") and element.appendChild()
const newListItem = document.createElement("li"); //document.createElement("elementName") ফাংশনটি একটি নতুন এলিমেন্ট তৈরি করে।
newListItem.innerText = "Elephant"; //.innerText = "Text" নতুন element এর ভিতরে টেক্সট সেট করে।
const appendNewChild = document.getElementById("animals").appendChild(newListItem); //element.appendChild() নতুন element টি বিদ্যমান তালিকায় অ্যাপেন্ড করে।
console.log("Append Child:-", appendNewChild);
//output: Append Child:- <li>​…​</li>​::marker​"Elephant"</li>​

//element.parentNode
const parentElement = document.getElementById('animals-container').parentNode; //element.parentNode এটি বর্তমান এলিমেন্টের প্যারেন্ট এলিমেন্টকে নির্দেশ করে। এটি বর্তমান এলিমেন্টের প্যারেন্ট এলিমেন্টে প্রবেশ করতে ব্যবহৃত হয়।
console.log("Parent Node:-", parentElement);
//output: Parent Node:- <body>​…​</body>​

//element.childNodes
const fullChildNodes = document.getElementById('animals-container').childNodes; //element.childNodes এটি বর্তমান এলিমেন্টের সকল চাইল্ড নোডসমূহের একটি লাইভ কালেকশন প্রদান করে। এটি বর্তমান এলিমেন্টের চাইল্ড নোডগুলোতে প্রবেশ করতে ব্যবহৃত হয়। এটি প্যারেন্ট node এর সমস্ত child গুলোকে রিটার্ন করে।
console.log("Child Nodes:-", fullChildNodes);
//output: Child Nodes:- NodeList(5) [text, h4#animal-title, text, ul#animals, text]

//element.childNodes
const childNode = document.getElementById('animals-container').childNodes[1]; //element.childNodes এটি বর্তমান এলিমেন্টের সকল চাইল্ড নোডসমূহের একটি লাইভ কালেকশন প্রদান করে। এটি বর্তমান এলিমেন্টের চাইল্ড নোডগুলোতে প্রবেশ করতে ব্যবহৃত হয়। এটি প্যারেন্ট node এর নির্দিষ্ট চাইল্ড কে রিটার্ন করে।
console.log("Child Node:-", childNode);
//output: Child Node:- <h4 id=​"animal-title">​My Favorite Animals​</h4>​

//element.firstChild
const firstChildNode = document.getElementById('animals-container').firstChild; //element.firstChild এটি বর্তমান এলিমেন্টের প্রথম চাইল্ড নোডকে নির্দেশ করে। এটি বর্তমান এলিমেন্টের প্রথম চাইল্ড নোডে প্রবেশ করতে ব্যবহৃত হয়।
console.log("First Child's Node:-", firstChildNode);
//output: First Child's Node:- #text

//element.lastChild
const lastChildNode = document.getElementById('animals-container').lastChild; //element.lastChild এটি বর্তমান এলিমেন্টের শেষ চাইল্ড নোডকে নির্দেশ করে। এটি বর্তমান এলিমেন্টের শেষ চাইল্ড নোডে প্রবেশ করতে ব্যবহৃত হয়।
console.log("Last Child,s Node:-", lastChildNode);
//output: Last Child,s Node:- #text

//element.nextSibling
const nextSiblingNode = document.getElementById('animal-title').nextSibling; //element.nextSibling এটি বর্তমান এলিমেন্টের পরবর্তী সিবলিং নোডকে নির্দেশ করে। এটি বর্তমান এলিমেন্টের পরবর্তী সিবলিং নোডে প্রবেশ করতে ব্যবহৃত হয়।
console.log("Next Sibling's Node:-", nextSiblingNode);
//output: Next Sibling's Node:- #text

//element.previousSibling
const previousSiblingNode = document.getElementById('animals').previousSibling; //element.previousSibling এটি বর্তমান এলিমেন্টের পূর্ববর্তী সিবলিং নোডকে নির্দেশ করে। এটি বর্তমান এলিমেন্টের পূর্ববর্তী সিবলিং নোডে প্রবেশ করতে ব্যবহৃত হয়।
console.log("Previous Sibling's Node:-", previousSiblingNode);
//output: Previous Sibling's Node:- #text



//.innerText = 'innerTextGet'
const getInnerText = document.getElementById('title').innerText; //innerText একটি HTML এলিমেন্টের ভিতরের টেক্সট নিয়ে কাজ করে। এটি এলিমেন্টের শুধুমাত্র text কে গ্রহণ বা সেট করতে ব্যবহৃত হয়।
console.log(getInnerText);
//output: Welcome to Document Object Model

//.innerText = 'innerTextSet'
const setInnerText = document.getElementById('title').innerText = "Welcome to DOM"; //innerText একটি HTML এলিমেন্টের ভিতরের টেক্সট নিয়ে কাজ করে। এটি এলিমেন্টের শুধুমাত্র text কে গ্রহণ বা সেট করতে ব্যবহৃত হয়।
console.log(setInnerText);
//output: Welcome to DOM

//.style.property = 'value'
const setStyle = document.getElementById('title').style.color = "red"; //.style একটি html এলিমেন্টের ভিতরের টেক্সট নিয়ে কাজ করে। এটি নতুন স্টাইল সেট করতে ব্যবহৃত হয়।
console.log(setStyle);
//output: red

//.innerHTML
const getInnerByHTML = document.getElementsByClassName('city')[0].innerHTML; //innerHTML একটি HTML এলিমেন্টের ভিতরের সমস্ত HTML কন্টেন্ট নিয়ে কাজ করে। এটি এলিমেন্টের ভিতরের HTML কন্টেন্টকে গ্রহণ বা সেট বা গ্রহণ করতে ব্যবহৃত হয়।
console.log(getInnerByHTML);
//output: Dhaka

//innerHTML = 'newHTML'
const setByInnerByHTML = document.getElementsByClassName('city')[0].innerHTML = '<h1>Mymenshing</h1>'; //innerHTML একটি HTML এলিমেন্টের ভিতরের সমস্ত HTML কন্টেন্ট নিয়ে কাজ করে। এটি এলিমেন্টের ভিতরের HTML কন্টেন্টকে গ্রহণ বা সেট বা গ্রহণ করতে ব্যবহৃত হয়।
console.log(setByInnerByHTML);
//output on console: <h1>Mymenshing</h1>
//output on browser: Mymenshing

//.getAttribute('attributeType')
const getElementById01 = document.getElementById('fruits-container-id');
const getByAttribute = getElementById01.getAttribute('class'); //getAttribute একটি নির্দিষ্ট এলিমেন্ট থেকে একটি নির্দিষ্ট অ্যাট্রিবিউটের মান বের করতে ব্যবহৃত হয়। এটি এলিমেন্টের নির্দিষ্ট অ্যাট্রিবিউটের মানকে ফিরিয়ে আনে।
console.log(getByAttribute);
//output: fruits-container-class

//.setAttribute('attributeName', 'attributeValue')
const setByAttribute = document.getElementById('fruits-title-id');
setByAttribute.setAttribute('id', 'fruits-title-class'); //setAttribute একটি নির্দিষ্ট এলিমেন্টে একটি নির্দিষ্ট অ্যাট্রিবিউটের মান সেট করতে ব্যবহৃত হয়। এটি এলিমেন্টের নির্দিষ্ট অ্যাট্রিবিউটে নতুন মান সেট করে।
console.log(setByAttribute.getAttribute('id'));
//previous id output: fruits-title-id
//current id output: fruits-title-class



//a example using dom (created a new section)
const mainContainer01 = document.getElementById('main-container');

const sectionFriends = document.createElement('section');

const h4 = document.createElement('h4');
h4.innerText = 'My Friends';
sectionFriends.appendChild(h4);

const ul = document.createElement('ul');
const li01 = document.createElement('li');
li01.innerText = 'Mahadi';
ul.appendChild(li01);
const li02 = document.createElement('li');
li02.innerText = 'Joynal';
ul.appendChild(li02);
const li03 = document.createElement('li');
li03.innerText = 'Alamin';
ul.appendChild(li03);

sectionFriends.appendChild(ul);

mainContainer01.appendChild(sectionFriends);


//another example using dom (created another new section)
const mainContainer02 = document.getElementById('main-container');

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
        <h4>My Favorite Dress</h4>
        <ul>
            <li>Tupi</li>
            <li>Panjabi</li>
            <li>Payjama</li>
        </ul>
`;

mainContainer02.appendChild(sectionDress);



