// assign input content to variables
const username = document.getElementById("username");
const title = document.getElementById("blog-title");
const content = document.getElementById("blog-content"); 
const submitBtn = document.querySelector('input[type="submit"]');

// save blog post content to local storage
function submitHandler(event) {
    event.preventDefault();

    // create blog post object
    const blogPost = createPostObj();
    let blogList = [];

    if (localStorage.length !== 0) {
        const storage = localStorage.getItem("blogPosts");
        console.log(storage);
        blogList = JSON.parse(storage);
    }

    // add new post to blog list array
    blogList.push(blogPost);

    // update local blog list
    updateStorage(blogList);

    window.location.href = "./blog.html";
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
function updateStorage(blog) {
    const stringBlog = JSON.stringify(blog);
    localStorage.setItem("blogPosts", stringBlog);
}

// add event listener to submit button
submitBtn.addEventListener("click", submitHandler);
