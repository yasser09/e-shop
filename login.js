document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Here you can add your login logic
        console.log('Username:', username);
        console.log('Password:', password);

        // For demonstration purposes, let's redirect to the homepage after login
        window.location.href = 'index.html';
    });
});
