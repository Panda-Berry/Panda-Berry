const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Replace the following code with your actual authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'your_username' && password === 'your_password') {
        // Successful login
        alert('Login successful!');
    } else {
        // Display an error message
        errorMessage.textContent = 'Invalid username or password.';
    }
});
