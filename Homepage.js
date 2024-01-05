const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
const logoText = document.querySelector(".logo-text");

btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changebtn();
});

function changebtn() {
    const isExpanded = side_bar.classList.contains("expand");

    if (isExpanded) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        logoText.style.display = "inline"; // Show the text when sidebar is expanded
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    // Hide the text when sidebar is not expanded
    }
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    const isClickInside = side_bar.contains(event.target) || btn_menu.contains(event.target);
    if (!isClickInside && side_bar.classList.contains("expand")) {
        side_bar.classList.remove("expand");
        changebtn();
    }
});


function handleActions(post) {
    const likeBtn = post.querySelector(".bx-like");
    const commentBtn = post.querySelector(".bx-comment");
    const likeCount = post.querySelector(".like-count");

    let likes = 0;

    likeBtn.addEventListener("click", function () {
        likes++;
        likeCount.textContent = likes === 1 ? `${likes} like` : `${likes} likes`;
    });

    commentBtn.addEventListener("click", function () {
        // Add your comment functionality here
        alert("Comment button clicked!");
    });
}

// Function to create a post
function createPost(userAvatar, postContent, postType) {
    const postContainer = document.querySelector(".posts-container");

    const post = document.createElement("div");
    post.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post-header");

    const userAvatarContainer = document.createElement("div");
    userAvatarContainer.classList.add("post-avatar");
    userAvatarContainer.innerHTML = `<img src="${userAvatar}" alt="User Avatar">`;

    const postUsername = document.createElement("p");
    postUsername.classList.add("post-username");
    postUsername.textContent = "your_username";

    postHeader.appendChild(userAvatarContainer);
    postHeader.appendChild(postUsername);

    const postContentContainer = document.createElement("div");
    postContentContainer.classList.add("post-content");

    if (postType === "image") {
        const postImage = document.createElement("div");
        postImage.classList.add("post-image");
        postImage.innerHTML = `<img src="${postContent}" alt="Post Image">`;
        postContentContainer.appendChild(postImage);
    } else {
        const postText = document.createElement("p");
        postText.textContent = postContent;
        postContentContainer.appendChild(postText);
    }

    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");
    postActions.innerHTML = `
        <i class="bx bx-like"></i>
        <i class="bx bx-comment"></i>
        <span class="like-count">0 likes</span>
    `;

    postContentContainer.appendChild(postActions);

    post.appendChild(postHeader);
    post.appendChild(postContentContainer);

    postContainer.appendChild(post);

    // Call the handleActions function to handle like and comment actions for this post
    handleActions(post);
}

// Event listener for submitting a new post
document.getElementById("submitPost").addEventListener("click", function () {
    const newPostText = document.getElementById("newPostText").value;

    if (newPostText.trim() !== "") {
        createPost("your_avatar.jpg", newPostText, "text");
        document.getElementById("newPostText").value = "";
    }
});

// Event listener for submitting a new image post
document.getElementById("submitImagePost").addEventListener("click", function () {
    const newPostImageURL = document.getElementById("newPostImageURL").value;

    if (newPostImageURL.trim() !== "") {
        createPost("your_avatar.jpg", newPostImageURL, "image");
        document.getElementById("newPostImageURL").value = "";
    }
});

// Execute this code after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Example posts
    createPost("avatar1.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel condimentum leo. Proin vel elit nec nisl tincidunt tincidunt.", "text");
    createPost("avatar2.jpg", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", "text");
    createPost("avatar3.jpg", "https://example.com/image.jpg", "image");

    // Add more posts as needed using createPost function
});