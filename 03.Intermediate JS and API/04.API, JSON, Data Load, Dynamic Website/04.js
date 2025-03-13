const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>displayComments(data))
    }

const displayComments = (comments) => {
    const allComments = document.getElementById('comments');
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
}