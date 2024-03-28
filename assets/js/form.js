// assign input content to variables
const username = document.getElementById("username");
const title = document.getElementById("blog-title");
const content = document.getElementById("blog-content"); 
const submitBtn = document.querySelector('input[type="submit"]');

// save blog post content to local storage
function submitHandler(event) {
    event.preventDefault();

    let blogList = [];

    // create blog post object
    const blogPost = {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim()
    }

    // checks that all inputs are valid
    if (!username.value || !title.value || !content.value) {
        alert("All inputs are required to add a blog post.");
        return;
    }

    // gets blog list from local storage
    if (localStorage.length !== 0) {
        const storage = localStorage.getItem("blogPosts");
        blogList = JSON.parse(storage);
    }

    // add new post to blog list
    blogList.push(blogPost);

    // update blog list in local storage
    updateStorage(blogList);

    // redirect to blog page
    window.location.href = "./blog.html";
} 

// UPDATE LOCAL STORAGE
function updateStorage(blog) {
    const stringBlog = JSON.stringify(blog);
    localStorage.setItem("blogPosts", stringBlog);
}

// add event listener to submit button
submitBtn.addEventListener("click", submitHandler);
