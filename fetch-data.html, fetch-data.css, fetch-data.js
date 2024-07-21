// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    try {
        // Perform an asynchronous operation to fetch data
        const response = await fetch('https://api.example.com/userdata');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const userData = await response.json();
        
        // Display the fetched user data
        console.log('User Data:', userData);
        
        // You can further process or display the data here
        // For example, update HTML elements with fetched data
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const userData = await response.json();
        
        // Display the fetched user data
        console.log('User Data:', userData);
        
        // You can further process or display the data here
        // For example, update HTML elements with fetched data
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const userData = await response.json();
        
        // Display the fetched user data
        console.log('User Data:', userData);
        
        // Update the HTML element with the fetched data
        dataContainer.textContent = JSON.stringify(userData, null, 2);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Display the fetched user data
        console.log('User Data:', users);
        
        // Update the HTML element with the fetched data
        dataContainer.textContent = JSON.stringify(users, null, 2);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
        // Optionally, update UI to show an error message
        dataContainer.textContent = 'Failed to fetch user data. Please try again later.';
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Clear existing content
        dataContainer.innerHTML = '';

        // Display loading message while fetching data
        dataContainer.textContent = 'Loading user data...';

        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.textContent = '';

        // Display the fetched user data
        console.log('User Data:', users);
        
        // Update the HTML element with the fetched data
        dataContainer.textContent = JSON.stringify(users, null, 2);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
        // Optionally, update UI to show an error message
        dataContainer.textContent = 'Failed to fetch user data. Please try again later.';
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Clear existing content
        dataContainer.innerHTML = '';

        // Display loading message while fetching data
        dataContainer.textContent = 'Loading user data...';

        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.textContent = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements for each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> element (userList) to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
        // Optionally, update UI to show an error message
        dataContainer.textContent = 'Failed to fetch user data. Please try again later.';
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Clear existing content
        dataContainer.innerHTML = '';

        // Display loading message while fetching data
        dataContainer.textContent = 'Loading user data...';

        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.textContent = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements for each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> element (userList) to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
        
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Display error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Call the fetchUserData function to initiate the fetch operation
fetchUserData();
// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Clear existing content
        dataContainer.innerHTML = '';

        // Display loading message while fetching data
        dataContainer.textContent = 'Loading user data...';

        // Perform an asynchronous operation to fetch data
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear loading message
        dataContainer.textContent = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements for each user's name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> element (userList) to the dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching user data:', error.message);
        
        // Clear existing content
        dataContainer.innerHTML = '';
        
        // Display error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', fetchUserData);
