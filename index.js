function displayPosts(posts) {
    posts.forEach((post) => {
        const li = document.createElement("li");
        const title = document.createElement("h1");
        const body = document.createElement("p");

        title.textContent = post.title;
        body.textContent = post.body;

        li.append(title, body);
        document.querySelector("#post-list").append(li);
    });
}

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);
}

getPosts();