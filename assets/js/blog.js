// gets blog from local storage
function getBlogList() {
    if (localStorage.length !== 0) {
        const storage = localStorage.getItem("blogPosts");
        return JSON.parse(storage);
    } else {
        return;
    }
}

// create blog post elements
function createPost(post) {

    const articleEl = document.createElement("article");
    articleEl.classList.add("container");

    const titleEl = document.createElement("h2");
    titleEl.classList.add("title");
    titleEl.textContent = post.title;

    const contentEl = document.createElement("p");
    contentEl.classList.add("content");
    contentEl.textContent = post.content;

    const authorEl = document.createElement("p");
    authorEl.classList.add("author");
    authorEl.textContent = `Posted by: ${post.username}`;

    // Add elements to DOM
    document.querySelector("main").appendChild(articleEl);
    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);
    articleEl.appendChild(authorEl);
}

// creates entire blog
function createBlog(blog) {
    blog.forEach((post) => {
        createPost(post);
    });
}

// add event listener to the window
window.addEventListener("load", function () {
    const blog = getBlogList();
    console.log(`blog: ${blog}`);
    createBlog(blog);
})