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
    const allTodos = document.getElementById('todos');
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

// loadTodos();