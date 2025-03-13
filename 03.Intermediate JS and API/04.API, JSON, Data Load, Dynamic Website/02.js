fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>{console.log(data)});

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    });