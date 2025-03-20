//***//async কী?
//loadTodos ফাংশনটি অ্যাসিনক্রোনাসভাবে কাজ করে। অর্থাৎ, এটি ডেটা লোড করা সম্পন্ন না হওয়া পর্যন্ত অপেক্ষা করতে পারে (non-blocking)।

//***//await কী এবং এটি কীভাবে কাজ করে?
//await হলো জাভাস্ক্রিপ্টের একটি কীওয়ার্ড যা অ্যাসিঙ্ক্রোনাস (Asynchronous) অপারেশনের জন্য ব্যবহৃত হয়। এটি সাধারণত async ফাংশনের ভেতরে ব্যবহার করা হয় এবং প্রমিস (Promise) রিজলভ হওয়া পর্যন্ত ফাংশনের এক্সিকিউশন থামিয়ে রাখে (pause করে)।

//***//try ব্লক : এটি এমন কাজ চালানোর জন্য ব্যবহৃত হয় যেখানে সমস্যা (error) ঘটতে পারে।

//***//catch : যদি fetch অথবা response.json()-এ কোনো সমস্যা হয়, তাহলে catch ব্লক চলবে এবং কনসোলে একটি ত্রুটির বার্তা (Error Here) দেখাবে।

const loadTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        displayTodos(data);
    }
    catch {
        console.log("Error Here:")
    }
}

const displayTodos = (todos) => {
    const allTodos = document.getElementById('todos'); //এই আইডির বাটনে ক্লিক করলে API থেকে সংগ্রহ কৃত ডাটা ওয়েব পেজে দেখা যাবে।
    for (const todo of todos){
        const createElement = document.createElement('div');
        createElement.classList.add('bg-black', 'rounded', 'shadow', 'text-white', 'p-3', 'm-3')
        createElement.innerHTML = `
            <h1 class="font-bold">User ID: ${todo.id}</h1>
            <h4 class="font-semibold">Title: ${todo.title}</h4>
            <p>Completed: ${todo.completed}</p>

        `;
        allTodos.appendChild(createElement);
    }
}

// loadTodos(); //এটি এনেবল রাখলে পেজ লোড হওয়ার সাথে সাথেই সমস্ত ডাটা প্রদর্শিত হবে।