function validateLogin() {
    let loginUsername = document.getElementById('loginUsername').value;
    let loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user data from registration (localStorage)
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    // Validate if the input matches the stored data
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
        // You can redirect to another page or dashboard
        window.location.href = 'dashboard.html';
        return false;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
