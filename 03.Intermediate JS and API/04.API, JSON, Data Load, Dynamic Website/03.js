const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>displayUsers(data))
    }

const displayUsers = (users) => {
    const usersInformation = document.getElementById('users');
    for (const user of users){
        const createElement = document.createElement('li');
        createElement.innerText = user.name;
        usersInformation.appendChild(createElement);
    }
}