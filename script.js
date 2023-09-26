document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can implement your own authentication logic here.
    // For this example, we'll use a simple check for a demo.
    if (username === 'yourusername' && password === 'yourpassword') {
        // Successful login
        document.getElementById('error-message').textContent = 'Login successful!';
        document.getElementById('error-message').style.color = 'green';
    } else {
        // Failed login
        document.getElementById('error-message').textContent = 'Invalid username or password';
        document.getElementById('error-message').style.color = 'red';
    }
});
