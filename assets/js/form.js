// assign input content to variables
const username = document.getElementById("username");
const title = document.getElementById("blog-title");
const content = document.getElementById("blog-content"); 
const submitBtn = document.querySelector('input[type="submit"]');

// save blog post content to local storage
function submitHandler(event) {

    // create blog post object
    const blogPost = createPostObj();

    // update local blog list
    updateStorage(blogPost);
} 

// CREATE BLOG POST
function createPostObj () {
    return {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    }
}

// UPDATE LOCAL STORAGE
function updateStorage (blogPost) {
    const stringBlog = JSON.stringify(blogPost);
    localStorage.setItem("blogPost", stringBlog);
}

// add event listener to submit button
submitBtn.addEventListener("click", submitHandler);
