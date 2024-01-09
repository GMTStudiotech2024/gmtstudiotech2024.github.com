class UserHandler {
    constructor() {
      this.users = JSON.parse(localStorage.getItem("users")) || [];
    }
  
    doesUserExist(username) {
      return this.users.some(user => user.username === username);
    }
  
    loginUser(username, password) {
      const foundUser = this.users.find(user => user.username === username);
      return foundUser && foundUser.password === password;
    }
  
    addUser(username, password) {
      if (!this.doesUserExist(username)) {
        const newUser = { username, password };
        this.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.users));
        return true;
      }
      return false;
    }
  }
  
  class FormHandler {
    static clearInputs(inputIds) {
      inputIds.forEach(id => (document.getElementById(id).value = ""));
    }
  
    static showMessage(elementId, message) {
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = message;
      }
    }
  }
  
  const userHandler = new UserHandler();
  const loginInputIds = ["username", "password"];
  const signupInputIds = ["signup-username", "signup-password"];
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const [username, password] = loginInputIds.map(id => document.getElementById(id).value);
  
    if (username && password) {
      if (userHandler.loginUser(username, password)) {
        FormHandler.showMessage("message", "Login successful!");
        FormHandler.clearInputs(loginInputIds);
        // Redirect after successful login
        window.location.href = "index.html"; // Replace 'your_new_page.html' with your target page
      } else {
        FormHandler.showMessage("message", "Invalid username or password. Please try again.");
      }
    } else {
      FormHandler.showMessage("message", "Please enter both username and password.");
    }
  });
  
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const [username, password] = signupInputIds.map(id => document.getElementById(id).value);
  
    if (username && password) {
      if (userHandler.addUser(username, password)) {
        FormHandler.showMessage("signup-message", "User signed up successfully!");
        FormHandler.clearInputs(signupInputIds);
      } else {
        FormHandler.showMessage("signup-message", "Username already exists. Please choose a different one.");
      }
    } else {
      FormHandler.showMessage("signup-message", "Please enter both username and password.");
    }
  });
  if (username && password) {
    if (userHandler.loginUser(username, password)) {
      FormHandler.showMessage("message", "Login successful!");
      FormHandler.clearInputs(loginInputIds);
      // Redirect after successful login
      window.location.href = "your_new_page.html"; // Replace 'your_new_page.html' with your target page
  
      // Get the user's account name (Replace 'getUserName()' with the actual function to get the user's name)
      const userAccountName = getUserName(); // Example function to get user's account name
  
      // Update 'User' link with user's account name
      const userLink = document.getElementById("userLink");
      if (userLink) {
        userLink.innerHTML = `
          <lord-icon src="https://cdn.lordicon.com/ozckswtv.json" trigger="hover" colors="primary:#66a1ee" style="width:40px;height:40px"></lord-icon>
          <a href="#">${userAccountName}</a>
        `;
      }
    } else {
      FormHandler.showMessage("message", "Invalid username or password. Please try again.");
    }
  } else {
    FormHandler.showMessage("message", "Please enter both username and password.");
  }