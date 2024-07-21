document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    // You can start writing your code inside this function
    
    // Example: Accessing an element by its ID
    const myElement = document.getElementById('myElementId');
    
    // Example: Adding an event listener to a button
    const myButton = document.getElementById('myButtonId');
    myButton.addEventListener('click', function() {
      // Code to run when the button is clicked
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select the division where feedback will be displayed
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Now you can work with the 'form' and 'feedbackDiv' variables
    
    // Example: Adding a submit event listener to the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Add your form submission logic here
      // For example, you can collect form data and send it to a server
      
      // Example: Collecting form data
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log('Form data:', formObject);
      
      // Example: Displaying feedback in the feedbackDiv
      feedbackDiv.textContent = 'Form submitted successfully!';
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select the division where feedback will be displayed
    const feedbackDiv = document.getElementById('form-feedback');
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Add your form submission logic here
      // For example, you can collect form data and send it to a server
      
      // Example: Collecting form data
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log('Form data:', formObject);
      
      // Example: Displaying feedback in the feedbackDiv
      feedbackDiv.textContent = 'Form submitted successfully!';
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select each input field by its respective ID and store trimmed values
    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Example: Validate and use the trimmed values
      console.log('Trimmed Username:', usernameInput);
      console.log('Trimmed Email:', emailInput);
      console.log('Trimmed Password:', passwordInput);
      
      // Example: Displaying feedback in the feedbackDiv
      // This assumes you have already selected the feedbackDiv element
      feedbackDiv.textContent = 'Form submitted successfully!';
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select each input field by its respective ID and store trimmed values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Declare variables for validation status and messages
    let isValid = true;
    const messages = [];
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Reset messages array for new validation
      messages.length = 0;
      
      // Trimmed input values
      const trimmedUsername = usernameInput.value.trim();
      const trimmedEmail = emailInput.value.trim();
      const trimmedPassword = passwordInput.value.trim();
      
      // Example: Validation logic (simple example)
      if (trimmedUsername.length === 0) {
        isValid = false;
        messages.push('Username cannot be empty');
      }
      if (trimmedEmail.length === 0) {
        isValid = false;
        messages.push('Email cannot be empty');
      }
      if (trimmedPassword.length === 0) {
        isValid = false;
        messages.push('Password cannot be empty');
      }
      
      // Example: Displaying feedback in the feedbackDiv
      // This assumes you have already selected the feedbackDiv element
      if (isValid) {
        feedbackDiv.textContent = 'Form submitted successfully!';
      } else {
        feedbackDiv.textContent = 'Form submission failed. Please fix the following errors:\n' + messages.join('\n');
      }
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select each input field by its respective ID and store trimmed values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Declare variables for validation status and messages
    let isValid = true;
    const messages = [];
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Reset messages array for new validation
      messages.length = 0;
      
      // Trimmed input values
      const trimmedUsername = usernameInput.value.trim();
      const trimmedEmail = emailInput.value.trim();
      const trimmedPassword = passwordInput.value.trim();
      
      // Validation logic for username length
      if (trimmedUsername.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long');
      }
      
      // Example: Other validation checks (email and password not empty)
      if (trimmedEmail.length === 0) {
        isValid = false;
        messages.push('Email cannot be empty');
      }
      if (trimmedPassword.length === 0) {
        isValid = false;
        messages.push('Password cannot be empty');
      }
      
      // Example: Displaying feedback in the feedbackDiv
      // This assumes you have already selected the feedbackDiv element
      if (isValid) {
        feedbackDiv.textContent = 'Form submitted successfully!';
      } else {
        feedbackDiv.textContent = 'Form submission failed. Please fix the following errors:\n' + messages.join('\n');
      }
    });
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select each input field by its respective ID and store trimmed values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Declare variables for validation status and messages
    let isValid = true;
    const messages = [];
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Reset messages array for new validation
      messages.length = 0;
      
      // Trimmed input values
      const trimmedUsername = usernameInput.value.trim();
      const trimmedEmail = emailInput.value.trim();
      const trimmedPassword = passwordInput.value.trim();
      
      // Validation logic for username length
      if (trimmedUsername.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long');
      }
      
      // Validation logic for email format
      if (!isValidEmail(trimmedEmail)) {
        isValid = false;
        messages.push('Email must be valid (should contain "@" and "." characters)');
      }
      
      // Example: Other validation checks (password not empty)
      if (trimmedPassword.length === 0) {
        isValid = false;
        messages.push('Password cannot be empty');
      }
      
      // Example: Displaying feedback in the feedbackDiv
      // This assumes you have already selected the feedbackDiv element
      if (isValid) {
        feedbackDiv.textContent = 'Form submitted successfully!';
      } else {
        feedbackDiv.textContent = 'Form submission failed. Please fix the following errors:\n' + messages.join('\n');
      }
    });
    
    // Function to validate email format
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with id "registration-form"
    const form = document.getElementById('registration-form');
    
    // Select each input field by its respective ID and store trimmed values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Declare variables for validation status and messages
    let isValid = true;
    const messages = [];
    
    // Add event listener for 'submit' event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Reset messages array for new validation
      messages.length = 0;
      
      // Trimmed input values
      const trimmedUsername = usernameInput.value.trim();
      const trimmedEmail = emailInput.value.trim();
      const trimmedPassword = passwordInput.value.trim();
      
      // Validation logic for username length
      if (trimmedUsername.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long');
      }
      
      // Validation logic for email format
      if (!isValidEmail(trimmedEmail)) {
        isValid = false;
        messages.push('Email must be valid (should contain "@" and "." characters)');
      }
      
      // Validation logic for password length
      if (trimmedPassword.length < 8) {
        isValid = false;
        messages.push('Password must be
  
